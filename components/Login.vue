<template>
  <button @click="signIn">Login com Google</button>
</template>

<script>
import { signIn } from '../plugins/firebase'

export default {
  methods: {
    signIn,
  },
}
</script>
