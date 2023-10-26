const text = document.querySelector(".joke__text");

fetch("https://api.chucknorris.io/jokes/random")
.then((res) => res.json())
.then((data) => {
    text.textContent = data.value;
})

