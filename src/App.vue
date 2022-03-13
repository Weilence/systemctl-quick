<template>
  <n-config-provider :theme="isDark ? darkTheme : undefined">
    <n-message-provider>
      <main font-sans p="y-10">
        <router-view />
        <div text="center">
          <Footer />
        </div>
      </main>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import { isDark } from './composables'
</script>
