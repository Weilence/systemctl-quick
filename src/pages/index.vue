<script lang="ts" setup>
import { isArray, isString } from 'lodash'
import type { FormInst, UploadFileInfo } from 'naive-ui'
import { useMessage } from 'naive-ui'

const form = $ref<FormInst | null>(null)
const formValue = $ref<any>({
  name: '',
  unit: {
    description: '',
    after: ['network.target'],
  },
  services: {
    type: 'simple',
    workingDirectory: '',
    execStart: '',
    execStop: '',
    restart: 'on-failure',
    restartSec: '',
    environment: [],
  },
  install: {
    wantedBy: ['multi-user.target'],
    requiredBy: [],
  },
})

// const computetEnvironmentValue = $computed({
//   get: () => {
//     return formValue.services.environment.split(/\r?\n/).map((pair: any) => {
//       const [key, value] = pair.trim().split('=')
//       return {
//         key: key || '', value: value || '',
//       }
//     })
//   },
//   set: (value: any[]) => {
//     formValue.services.environment = value.map(m => `${m.key}=${m.value}`).join('\n')
//   },
// })

const rules = {
  name: {
    required: true,
    trigger: 'input',
  },
  unit: {
    description: {
      required: true,
      trigger: 'input',
    },
  },
  services: {
    type: {
      required: true,
      trigger: 'input',
    },
  },
}

const preDefinedTarget = $ref([{ label: 'network.target', value: 'network.target' }, { label: 'multi-user.target', value: 'multi-user.target' }])

const serviceData = $computed(() => generate(formValue))

function generate(data: object) {
  let service = ''
  for (const [section, sectionValue] of Object.entries(data)) {
    if (section === 'name')
      continue

    service += `[${upperFirst(section)}]\n`
    for (const [key, value] of Object.entries<any | any[]>(sectionValue)) {
      if ((isArray(value) && !value.length))
        continue
      if (!isArray(value) && !value)
        continue
      if (key === 'environment') {
        for (const item of value)
          service += `${upperFirst(key)}=${generateValue(`${item.key}=${item.value}`)}\n`
      }
      else {
        service += `${upperFirst(key)}=${generateValue(value)}\n`
      }
    }
    service += '\n'
  }
  return service
}

function upperFirst(name: string) {
  if (!name)
    return ''

  return name[0].toUpperCase() + name.slice(1)
}

function lowerFirst(name: string) {
  if (!name)
    return ''

  return name[0].toLowerCase() + name.slice(1)
}

function generateValue(value: string | string[]) {
  if (isArray(value))
    return value.join(' ')
  else
    return value
}

function parse(text: string) {
  const lines = text.split(/\r?\n/)
  const parsedData: any = {}
  let sectionKey = ''
  for (let line of lines) {
    line = line.trim()
    if (!line)
      continue

    if (line.startsWith('[') && line.endsWith(']')) {
      const section = lowerFirst(line.slice(1, line.length - 1))
      parsedData[section] = {}
      sectionKey = section
    }
    else {
      // eslint-disable-next-line prefer-const
      const eqIndex = line.indexOf('=')

      const key = lowerFirst(line.slice(0, eqIndex))
      const value = line.slice(eqIndex + 1)
      if (isString(formValue[sectionKey][key])) {
        parsedData[sectionKey][key] = lowerFirst(value)
      }
      else if (isArray(formValue[sectionKey][key])) {
        if (key === 'environment') {
          if (!parsedData[sectionKey][key])
            parsedData[sectionKey][key] = []
          const [environmentKey, environmentValue] = value.split('=')
          parsedData[sectionKey][key].push({ key: environmentKey || '', value: environmentValue || '' })
        }
        else {
          parsedData[sectionKey][key] = value.split(' ').map(lowerFirst)
        }
      }
    }
  }

  return parsedData
}

function merge(target: any, source: any) {
  for (const [section, sectionValue] of Object.entries<any>(target)) {
    if (section === 'name')
      continue

    for (const key of Object.keys(sectionValue)) {
      if (source?.[section]?.[key]) {
        target[section][key] = source[section][key]
      }
      else {
        if (isString(formValue[section][key]))
          target[section][key] = ''
        else
          target[section][key] = []
      }
    }
  }
}

const message = useMessage()
async function handleChange(options: { file: UploadFileInfo }) {
  try {
    const text = await options.file.file?.text() as string
    const parsedData = parse(text)
    formValue.name = options.file.name
    merge(formValue, parsedData)
  }
  catch (error) {
    message.error('Please select a valid \'systemctl service\' file')
  }
}
</script>

<template>
  <div m-auto w-700px>
    <n-form ref="form" :label-width="120" label-placement="left" :model="formValue" :rules="rules">
      <n-form-item label="Name" path="name">
        <div w-full flex="~ gap2">
          <n-input v-model:value="formValue.name" flex-auto />
          <n-upload flex-1 :default-upload="false" :show-file-list="false" @change="handleChange">
            <n-button type="primary">
              Select Exist
            </n-button>
          </n-upload>
        </div>
      </n-form-item>
      <n-h2 mt-0 text-center>
        Unit
      </n-h2>
      <n-form-item label="Description" path="unit.description">
        <n-input v-model:value="formValue.unit.description" />
      </n-form-item>
      <n-h2 mt-0 text-center>
        Services
      </n-h2>
      <n-form-item path="services.type">
        <template #label>
          <div inline-flex items-center>
            Type
            <a
              href="https://www.freedesktop.org/software/systemd/man/systemd.service.html#Type="
              target="_blank"
            >
              <div i-carbon:help-filled />
            </a>
          </div>
        </template>
        <n-select
          v-model:value="formValue.services.type"
          :options="[
            { label: 'simple', value: 'simple' },
            { label: 'exec', value: 'exec' },
            { label: 'forking', value: 'forking' },
            { label: 'oneshot', value: 'oneshot' },
            { label: 'dbus', value: 'dbus' },
            { label: 'notify', value: 'notify' },
            { label: 'idle', value: 'idle' },
          ]
          "
        />
      </n-form-item>
      <n-form-item label="After" path="unit.after">
        <n-select
          v-model:value="formValue.unit.after"
          filterable
          multiple
          tag
          :options="preDefinedTarget"
        />
      </n-form-item>
      <n-form-item label="WorkingDirectory" path="services.workingDirectory">
        <n-input v-model:value="formValue.services.workingDirectory" />
      </n-form-item>
      <n-form-item label="ExecStart" path="services.execStart">
        <n-input v-model:value="formValue.services.execStart" />
      </n-form-item>
      <n-form-item label="ExecStop" path="services.execStop">
        <n-input v-model:value="formValue.services.execStop" />
      </n-form-item>
      <n-form-item label="Restart" path="services.restart">
        <n-select
          v-model:value="formValue.services.restart"
          :options="[
            { label: 'no', value: 'no' },
            { label: 'always', value: 'always' },
            { label: 'on-success', value: 'on-success' },
            { label: 'on-failure', value: 'on-failure' },
            { label: 'on-abnormal', value: 'on-abnormal' },
            { label: 'on-abort', value: 'on-abort' },
            { label: 'on-watchdog', value: 'on-watchdog' },
          ]
          "
        />
      </n-form-item>
      <table
        w-full
        relative
        top="-5"
        class="table"
        summary="Exit causes and the effect of the Restart= settings"
      >
        <thead>
          <tr>
            <th>Restart settings/Exit causes</th>
            <th>no</th>
            <th>always</th>
            <th>on-success</th>
            <th>on-failure</th>
            <th>on-abnormal</th>
            <th>on-abort</th>
            <th>on-watchdog</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Clean exit code or signal</td>
            <td />
            <td>X</td>
            <td>X</td>
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td>Unclean exit code</td>
            <td />
            <td>X</td>
            <td />
            <td>X</td>
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td>Unclean signal</td>
            <td />
            <td>X</td>
            <td />
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td />
          </tr>
          <tr>
            <td>Timeout</td>
            <td />
            <td>X</td>
            <td />
            <td>X</td>
            <td>X</td>
            <td />
            <td />
          </tr>
          <tr>
            <td>Watchdog</td>
            <td />
            <td>X</td>
            <td />
            <td>X</td>
            <td>X</td>
            <td />
            <td>X</td>
          </tr>
        </tbody>
      </table>
      <n-form-item label="RestartSec" path="services.restartSec">
        <n-input v-model:value="formValue.services.restartSec" placeholder="default 100ms" />
      </n-form-item>
      <n-form-item label="Environment" path="services.environment">
        <n-dynamic-input
          v-model:value="formValue.services.environment"
          preset="pair"
          key-placeholder="Environment Key"
          value-placeholder="Environment Value"
        />
      </n-form-item>
      <n-h2 mt-0 text-center>
        Install
      </n-h2>
      <n-form-item label="WantedBy" path="install.wantedBy">
        <n-select
          v-model:value="formValue.install.wantedBy"
          filterable
          multiple
          tag
          :options="preDefinedTarget"
        />
      </n-form-item>
      <n-form-item label="RequiredBy" path="install.requiredBy">
        <n-select
          v-model:value="formValue.install.requiredBy"
          filterable
          multiple
          tag
          :options="preDefinedTarget"
        />
      </n-form-item>
      <n-form-item label="Preview">
        <pre mt-2>{{ serviceData }}</pre>
      </n-form-item>
    </n-form>
  </div>
</template>

<style lang="less" scoped>
.table {
  th,
  td {
    border: 1px solid black;
    padding: 0 8px;
  }
}

.dark .table {
  th,
  td {
    border: 1px solid white;
    padding: 0 8px;
  }
}
</style>
