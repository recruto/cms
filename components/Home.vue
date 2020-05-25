<template>
  <div class="text-center">
    <h1>Home</h1>
    <code>{{ loading }}</code>
    <code>{{ companies }}</code>
  </div>
</template>

<script>
import { getCompanies } from '../api'

export default {
  data() {
    return {
      loading: false,
      companies: [],
    }
  },
  async created() {
    this.loading = true
    this.companies = await getCompanies()
    this.loading = false
  },
}
</script>
