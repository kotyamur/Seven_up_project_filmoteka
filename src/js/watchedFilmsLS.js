const watchedBtn = document.querySelector('button[data-type="watched"]')
const queueBtn = document.querySelector('button[data-type="queue"]')

watchedBtn.addEventListener('click', onWatchedFilmsToSaveBtn)
queueBtn.addEventListener('click', onQueueFilmsToSaveBtn)

function onWatchedFilmsToSaveBtn (evt) {
    evt.preventDefault()
    watchedBtn.classList.toggle('active')
    btnWatchedTextContentToChange()
}

function onQueueFilmsToSaveBtn (evt) {
    evt.preventDefault()
    queueBtn.classList.toggle('active')
    btnQueueTextContentToChange()
}

function btnWatchedTextContentToChange() {
    watchedBtn.classList.contains('active') ?
    watchedBtn.textContent='remove from watched' :
    watchedBtn.textContent='add to watched'
}

function btnQueueTextContentToChange() {
    queueBtn.classList.contains('active') ?
    queueBtn.textContent='remove from watched' :
    queueBtn.textContent='add to queue'
}

    