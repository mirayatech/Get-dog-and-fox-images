const foxImage = document.querySelector("#fox-result");
const dogImage = document.querySelector("#dog-result");
const foxBtn = document.querySelector("#fox-btn");
const dogBtn = document.querySelector("#dog-btn");

foxBtn.addEventListener("click", getRandomFox);
dogBtn.addEventListener("click", getRandomDog);

function getRandomFox() {
  foxBtn.innerText = 'Loading...'
  fetch("https://randomfox.ca/floof/")
    .then((res) => res.json())
    .then((data) => {
      foxImage.innerHTML = `<img src="${data.image}"/>`;
      foxBtn.innerText = 'Get Fox'

    });
}

function getRandomDog() {
  dogBtn.innerText = 'Loading...'
  fetch("https://random.dog/woof.json")
    .then((res) => res.json())
    .then((data) => {
      if (data.url.includes(".mp4")) {
        getRandomDog();
        dogBtn.innerText = 'Get Dog'

      } else {
        dogImage.innerHTML = `<img src="${data.url}"/>`;
        dogBtn.innerText = 'Get Dog'
      }
    });
}
