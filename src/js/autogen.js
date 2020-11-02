import { $ } from './dom-utils'

export function prepareAutoGenButton () {
  const cookieExists = document.cookie.length !== 0
  const autogen = $('#autogen-btn')
  if (!cookieExists) {
    autogen.remove()
  } else {
    const profile = loadProfile()
    let newBtnContent = autogen.textContent.replace('{name}', profile.firstname)
    newBtnContent = newBtnContent.replace('{reasons}', profile.reasons)
    autogen.textContent = newBtnContent
  }
}

export function loadProfile () {
  const cookieArray = document.cookie.split(';')
  return JSON.parse(cookieArray[0])
}

export function saveProfile (profile) {
  const value = JSON.stringify(profile)
  const samesite = 'samesite=STRICT'
  const expireDate = new Date()
  const expireTime = expireDate.getTime() + 1000 * 60 * 60 * 24 * 30
  expireDate.setTime(expireTime)
  const expires = 'expires=' + expireDate.toGMTString()
  document.cookie = [value, samesite, expires].join(';')
}
