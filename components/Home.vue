<template>
  <div class="text-center">
    <h1>Home</h1>
    <h2>Loading:</h2>
    <code>{{ loading }}</code>
    <h2>companies:</h2>
    <code>{{ companies }}</code>
    <h2>positions:</h2>
    <code>{{ positions }}</code>
    <h2>CUSTOM_ENV_VARIABLE:</h2>
    <code>{{ CUSTOM_ENV_VARIABLE }}</code>
  </div>
</template>

<script>
import { getCompanies, getPositionsByCompany } from '../api'

export default {
  data() {
    return {
      loading: false,
      companies: [],
      positions: [],
      CUSTOM_ENV_VARIABLE: process.env,
    }
  },
  async created() {
    this.loading = true
    this.companies = await getCompanies()
    this.positions = await getPositionsByCompany('diegoleme')
    this.loading = false
  },
}
</script>
