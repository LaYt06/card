let numCard = document.querySelector('.cifry')

let numForm = document.querySelector('.form__block-number')

numForm.addEventListener('click', function(){
    event.preventDefault();
    let rand1 = Math.floor(Math.random() * 9000) + 1000
    let rand2 = Math.floor(Math.random() * 9000) + 1000
    let rand3 = Math.floor(Math.random() * 9000) + 1000
    let rand4 = Math.floor(Math.random() * 9000) + 1000
    numCard.textContent = rand1 + ' ' + rand2 + ' ' + rand3 + ' ' + rand4;
})




let myName = document.querySelector('.name')
let nameInp = document.querySelector('.form__block-name')

nameInp.addEventListener('input', function(){
    let newTextName = nameInp.value
    myName.textContent = newTextName
})




let mySurename = document.querySelector('.surname')
let surenameInp = document.querySelector('.form__block-surname')

surenameInp.addEventListener('input', function(){
    let newTextSure = surenameInp.value
    mySurename.textContent = newTextSure
})



let myDate = document.querySelector('.date')
let dateInp = document.querySelector('.form__block-date')

dateInp.addEventListener('change', function(){
    let newInpDate = dateInp.value;
    let inputTreeNumber = newInpDate.split('-')
    if (inputTreeNumber.length === 3) {
        let year = inputTreeNumber[0]
        let mounth = inputTreeNumber[1]
        let day = inputTreeNumber[2]

        myDate.textContent = mounth + '/' + year
    }
})

let nameValue = sessionStorage.getItem


