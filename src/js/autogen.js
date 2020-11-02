import { $ } from './dom-utils'

export function prepareAutoGenButton () {
    const cookieExists = document.cookie.length != 0
    var autogen = $('#autogen-btn')
    if (!cookieExists) {
        autogen.remove()
    } else {
        var profile = loadProfile()
        var newBtnContent = autogen.textContent.replace("{name}", profile.firstname)
        newBtnContent = newBtnContent.replace("{reasons}", profile.reasons)
        autogen.textContent = newBtnContent
    }
}

export function loadProfile () {
    var cookieArray = document.cookie.split(';')
    var profile = JSON.parse(cookieArray[0])
    return profile
}

export function saveProfile (profile) {
    var value = JSON.stringify(profile)
    var samesite = "samesite=STRICT"
    var expireDate = new Date();
    var expireTime = expireDate.getTime() + 1000*60*60*24*30;
    expireDate.setTime(expireTime);
    var expires = "expires=" + expireDate.toGMTString()
    document.cookie = [value, samesite, expires].join(';')
}
