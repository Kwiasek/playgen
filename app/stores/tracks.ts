import { defineStore } from "pinia"
import type { TrackObject } from "~/types/response"


export const useTracksStore = defineStore('tracks', () => {
  const tracks: Ref<TrackObject[]> = ref([])

  function addTrack(track: TrackObject) {
    tracks.value.push(track)
  }

  function removeTrack(trackId: string) {
    tracks.value = tracks.value.filter((track) => track.id !== trackId)
  }

  return {
    tracks,
    addTrack,
    removeTrack
  }
})