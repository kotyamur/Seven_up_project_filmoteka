const watchedBtn = document.querySelector('button[data-type="watched"]')
const queueBtn = document.querySelector('button[data-type="queue"]')

const watchedFilms = {}

watchedBtn.addEventListener('click', onWatchedFilmsToSaveBtn)

function onWatchedFilmsToSaveBtn (evt) {
 evt.preventDefault()
 watchedBtn.textContent='remove from watched'
}