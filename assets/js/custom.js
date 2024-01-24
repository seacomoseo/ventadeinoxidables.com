// AVISO
const popup = document.getElementById('aviso')
if (popup) {
  // Popup
  // eslint-disable-next-line
  scrollShot({
    rootMargin: '20% 0% -120%',
    query: 'body',
    doStart: e => {
      const now = new Date().getTime()
      const oneWeek = 7 * 24 * 60 * 60 * 1000
      const moreThatOneWeek = now - new Date(window.localStorage.avisoDateClose || 0).getTime() >= oneWeek
      if (moreThatOneWeek) {
        window.localStorage.avisoDateClose = new Date().toISOString()
        window.location.hash = 'aviso'
      }
    }
  })
}
