<template>
  <div>
    <nav id="nav">
      <ul>
        <li><router-link :to="{ name: 'home' }"> Home</router-link></li>
        <li>
          <router-link :to="{ name: 'jobPosting' }">Job Posting </router-link>
        </li>
        <li><a href="#" @click="signOut">Sair</a></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { signOut } from './plugins/firebase'

export default {
  name: 'App',
  methods: {
    signOut,
  },
}
</script>
