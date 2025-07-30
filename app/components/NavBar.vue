<template>
  <div class="flex justify-between p-3">
    <h1 class="text-2xl">PlayGen</h1>
    <div v-if="!loggedIn">
      <UButton size="lg" external to="/auth/login">Login</UButton>
    </div>
    <div v-else class="flex items-center gap-2">
      <p>{{ user?.display_name }}</p>
      <UAvatar v-if="user.images && user.images[0]" :src="user.images[0].url || ''"/>
      <UButton color="error" @click="clear">Logout</UButton>
    </div>
  </div>
</template>

<script setup lang="tsx">
import type { SpotifyUser } from '~/types/user'

const {user: sessionUser, loggedIn, clear } = useUserSession()

const user = sessionUser.value as SpotifyUser

</script>