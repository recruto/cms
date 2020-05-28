<template>
  <div class="text-center">
    <h1>Home</h1>
    <h2>Loading:</h2>
    <code>{{ loading }}</code>
    <h2>companies:</h2>
    <code>{{ companies }}</code>
    <h2>CUSTOM_ENV_VARIABLE:</h2>
    <code>{{ CUSTOM_ENV_VARIABLE }}</code>
  </div>
</template>

<script>
import { getCompanies } from '../api'

export default {
  data() {
    return {
      loading: false,
      companies: [],
      CUSTOM_ENV_VARIABLE: process.env,
    }
  },
  async created() {
    this.loading = true
    this.companies = await getCompanies()
    this.loading = false
  },
}
</script>
