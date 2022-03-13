<template>
  <n-message-provider>
    <main font-sans p="x-4 y-10">
      <router-view />
      <div text="center gray-700 dark:gray-200">
        <Footer />
      </div>
    </main>
  </n-message-provider>
</template>
