import { $ } from './dom-utils'

export function prepareAutoGenButton () {
  const profileExists = localStorage.getItem('profile') !== null
  const autogenForm = $('#form-autogen')
  if (!profileExists) {
    autogenForm.remove()
  } else {
    const profile = loadProfile()
    const profileInfos = $('#profile-infos')
    profileInfos.textContent = profileInfos.textContent.replace('{prenom}', profile.firstname)
    profileInfos.textContent = profileInfos.textContent.replace('{nom}', profile.lastname)
    const selectReason = $('#selectReason')
    selectReason.value = profile.reasons
  }
}

export function loadProfile () {
  return JSON.parse(localStorage.getItem('profile'))
}

export function saveProfile (profile) {
  localStorage.setItem('profile', JSON.stringify(profile))
}
