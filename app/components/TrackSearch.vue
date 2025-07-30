<template>

  <UInput v-model="value" placeholder="Search..." icon="i-lucide-search" size="xl" type="search" class="w-full"/>
    <ul v-if="response" class="flex flex-col gap-1 p-1 bg-gray-800">
      <li v-for="item in response.tracks.items" :key="item.id" class="flex gap-2 hover:bg-gray-700 hover:cursor-pointer" @click="handleAddTrack(item)">
        <NuxtImg v-if="item.album.images[0]" height="64" width="64" :src="item.album.images[0].url" />
        <div class="flex flex-col">
          <h1 class="text-xl">{{ item.name }}</h1>
          <p>{{ item.artists.map(a => a.name).join(', ') }}</p>
        </div>
      </li>
    </ul>

    <ul v-if="tracksStore.tracks.length > 0" class="mt-2 flex flex-col gap-1 p-1 bg-black">
      <li v-for="track in tracksStore.tracks" :key="track.id" class="flex justify-between items-center hover:bg-gray-800">
        <div class="flex gap-2">
          <NuxtImg v-if="track.album.images[0]" height="64" width="64" :src="track.album.images[0].url" />
          <div class="flex flex-col">
            <h1 class="text-xl">{{ track.name }}</h1>
            <p>{{ track.artists.map(a => a.name).join(', ') }}</p>
          </div>
        </div>
        <UButton icon="lucide:trash-2" color="error" class="mr-2 cursor-pointer" @click="tracksStore.removeTrack(track.id)"/>
      </li>
    </ul>
</template>

<script setup lang="tsx">
import type { ResponseData, TrackObject } from "~/types/response"

const value = ref('')
const response: Ref<ResponseData | null> = ref(null)

watch(value, async () => {
  const result = await useSearch(value.value)
  response.value = result
})

const tracksStore = useTracksStore()

const handleAddTrack = (track: TrackObject) => {
  tracksStore.addTrack(track)
  value.value = ''
}
</script>