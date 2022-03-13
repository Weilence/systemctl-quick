<script lang="ts" setup>
import { isArray } from 'lodash'
import type { FormInst } from 'naive-ui'

const form = $ref<FormInst | null>(null)
const formValue = $ref({
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
  },
  install: {
    wantedBy: ['multi-user.target'],
    requiredBy: [],
  },
})
const rules = {
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
    service += `[${upperFirst(section)}]\n`
    for (const [key, value] of Object.entries<string | string[]>(sectionValue)) {
      if ((isArray(value) && !value.length))
        continue
      if (!isArray(value) && !value)
        continue
      service += `${upperFirst(key)}=${generateValue(value)}\n`
    }
    service += '\n'
  }
  return service
}

function upperFirst(name: string) {
  return name[0].toUpperCase() + name.slice(1)
}

function generateValue(value: string | string[]) {
  if (isArray(value))
    return value.join(' ')
  else
    return value
}
</script>

<template>
  <div m-auto w-700px>
    <n-form ref="form" :label-width="120" label-placement="left" :model="formValue" :rules="rules">
      <n-h2 text-center>
        Unit
      </n-h2>
      <n-form-item label="Description" path="unit.description">
        <n-input v-model:value="formValue.unit.description" placeholder="输入描述" />
      </n-form-item>
      <n-h2 text-center>
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
        <n-input v-model:value="formValue.services.workingDirectory" placeholder="输入工作目录" />
      </n-form-item>
      <n-form-item label="ExecStart" path="services.execStart">
        <n-input v-model:value="formValue.services.execStart" placeholder="输入启动命令" />
      </n-form-item>
      <n-form-item label="ExecStop" path="services.execStop">
        <n-input v-model:value="formValue.services.execStop" placeholder="输入停止命令" />
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
        <n-input v-model:value="formValue.services.restartSec" placeholder="输入重启时间间隔，不填时默认为100ms" />
      </n-form-item>
      <n-h2 text-center>
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
</style>
