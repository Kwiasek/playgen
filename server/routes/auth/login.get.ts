export default defineOAuthSpotifyEventHandler({
  async onSuccess(event, {user, tokens}) {
    await setUserSession(event, { user, tokens })
    return sendRedirect(event, '/')
  }
})
