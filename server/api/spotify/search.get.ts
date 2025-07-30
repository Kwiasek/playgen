interface Tokens {
  access_token: string,
  token_type: string,
  expires_in: number,
  refresh_token: string
}

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  const tokens = session.tokens! as Tokens
  const access_token = tokens.access_token
  if (!access_token) {
    throw new Error('No access token')
  }
  if (!session.user) {
    throw new Error('No user logged in')
  }
  const query = getQuery(event).q as string

  const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=10`
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
  if (!response.ok) {
    throw new Error('Spotify API error: ' + response.status + response.statusText)
  }
  return await response.json()
})