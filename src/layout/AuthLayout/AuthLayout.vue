<template>
  <h2>{{this.$route.meta.title}}</h2>
  <AuthView/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AuthView from '@/views/AuthView/AuthView.vue'

export default defineComponent({
  components: { AuthView },
})
</script>