// AVISO
const popup = document.getElementById('aviso')
if(popup) {
  // Popup
  scrollShot(
    '20% 0% -120%',
    'body',
    undefined,
    e => {
      const now = new Date().getTime()
      const oneWeek = 7 * 24 * 60 * 60 * 1000
      const moreThatOneWeek = now - new Date(localStorage.avisoDateClose || 0).getTime() >= oneWeek
      if (moreThatOneWeek) {
        localStorage.avisoDateClose = new Date().toISOString()
        location.hash = 'aviso'
      }
    },
    undefined
  )
}