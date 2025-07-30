
export default async function useSearch(value: string) {
  if (value.length < 3) 
    return null

  const data = await $fetch('/api/spotify/search', {
    query: {
      q: value
    }
  })
  
  return data
}