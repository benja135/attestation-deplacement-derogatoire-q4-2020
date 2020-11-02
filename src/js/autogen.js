import { $ } from './dom-utils'

export function prepareAutoGenButton () {
  const profileExists = localStorage.getItem('profile') !== null
  const autogen = $('#autogen-btn')
  if (!profileExists) {
    autogen.remove()
  } else {
    const profile = loadProfile()
    let newBtnContent = autogen.textContent.replace('{name}', profile.firstname)
    newBtnContent = newBtnContent.replace('{reasons}', profile.reasons)
    autogen.textContent = newBtnContent
  }
}

export function loadProfile () {
  return JSON.parse(localStorage.getItem('profile'))
}

export function saveProfile (profile) {
  localStorage.setItem('profile', JSON.stringify(profile))
}
