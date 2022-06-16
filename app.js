const foxImage = document.querySelector('#cat-result')
const dogImage = document.querySelector('#dog-result')
const foxBtn = document.querySelector('#cat-btn')
const dogBtn = document.querySelector('#dog-btn')


foxBtn.addEventListener('click', getRandomFox)
dogBtn.addEventListener('click', getRandomDog)