/* let askText = document.querySelector('.int-1')
let btnResult = document.querySelector('.btn-1')

askText.addEventListener('input', function(){
    btnResult.innerText = askText.value
}) 


let img = document.querySelector('hi')
let text = document.querySelector('hiImg')

img.src = "nin-stark-nin-stark-ghost-runner-color.jpg" 


let inptUrl = document.querySelector('.urlG')
let inptImg = document.querySelector('.urlG')

inptUrl.href = 'https://www.twitch.tv/'
inptImg.alt = 'Runner' 


let lisT = document.querySelectorAll('.item')[1]
lisT.textContent = 'brooo'
 */

let eMail = document.querySelector('.form__email')
let paSs = document.querySelector('.form__password')
let buTt = document.querySelector('.form__btn')
let cheCk = document.querySelector('.form__check')

eMail.addEventListener('input', function(){
    let emailValue = eMail.value
    if(emailValue.length > 5){
        buTt.disabiled = false
        eMail.classList.add('active')
        eMail.classList.remove('unactive')
    }

    else if (emailValue.length === 0) {
        eMail.classList.remove('active')
        eMail.classList.remove('unactive')
    }

    else{
        eMail.classList.remove('active')
        eMail.classList.add('unactive')
        buTt.disabiled = true
    }
})


paSs.addEventListener('input', function(){
    let passValue = paSs.value 
    if (passValue.length > 8) {
        buTt.disabiled = false
        paSs.classList.add('active')
        paSs.classList.remove('unactive')
    }
    else if (passValue.length === 0) {
        paSs.classList.remove('active')
        paSs.classList.remove('unactive')
    }

    else{
        buTt.disabiled = true
        paSs.classList.remove('active')
        paSs.classList.add('unactive')
    }
})


buTt.addEventListener('click', function(){
/*     if(buTt.disabiled === false && cheCk.checked) {
        window.location.href = '/bank.html'
    }
    else {
        alert("Заповніть будь ласка всі форми")
    } */
    let eMail = document.querySelector('.form__email')
    let paSs = document.querySelector('.form__password')
    let cheCk = document.querySelector('.form__check')
    let naMe = document.querySelector('.form__name')
    let ascNumber = document.querySelector('.form__phone')
    let emailValue = eMail.value
    let passValue = paSs.value
    let nameValue = naMe.value
    let numValue = ascNumber.value

    if (emailValue.length < 5) {
        if (modE.className === 'modalE'){
            modE.classList.add('active')
        }
        else {
            modE.classList.remove('active')
        }
    }
    else if (passValue.length < 8) {
        if (modP.className === 'modalP'){
            modP.classList.add('active')
        }
        else {
            modP.classList.remove('active')
        }
    }
    else if (nameValue.length === 0) {
        if (modN.className === 'modalN'){
            modN.classList.add('active')
        }
        else {
            modN.classList.remove('active')
        }
    }
    else if (numValue.length < 12) {
        if (modNm.className === 'modalNm'){
            modNm.classList.add('active')
        }
        else {
            modNm.classList.remove('active')
        }
    }
    else {
        window.location.href = 'bank.html'
    }
}) 

let modN = document.querySelector('.modalN')
let modNm = document.querySelector('.modalNm')
let modE = document.querySelector('.modalE')
let modP = document.querySelector('.modalP')
/* buTt.addEventListener('click', function() {

}) */

