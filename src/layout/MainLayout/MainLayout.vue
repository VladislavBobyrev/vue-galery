<template>
  <h2>title</h2>
  <HomeView/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomeView from '@/views/HomeView.vue'

export default defineComponent({
  components: { HomeView },
})
</script>