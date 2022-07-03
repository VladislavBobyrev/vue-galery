<template>
  <component :is="layout + '-layout'"/>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from '@/layout/MainLayout/MainLayout.vue'
import AuthLayout from '@/layout/AuthLayout/AuthLayout.vue'


export default {
  components: { AuthLayout, MainLayout },
  setup()
  {
    const route = useRoute()

    return {
      layout: computed(() => route.meta.layout),
    }
  },
}
</script>