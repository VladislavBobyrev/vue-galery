<template>
  <component :is="layout + '-layout'"/>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from '@/layout/MainLayout/MainLayout.vue'
import AuthLayout from '@/layout/AuthLayout/AuthLayout.vue'
import { useStore } from 'vuex'

export default {
  components: { AuthLayout, MainLayout },
  setup()
  {
    const route = useRoute()

    const store = useStore()
    store.dispatch('auth/login')
    return {
      layout: computed(() => route.meta.layout),
    }
  },
}
</script>