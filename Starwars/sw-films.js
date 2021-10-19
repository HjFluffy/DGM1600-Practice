import { films } from '../data/films.js'

let filmList = document.querySelector('#filmlist')

for (let i = 0; i < films.length; i++)  {
let figure = document.createElement('figure')
let figImg = document.createElement('img')
let figCaption = document.createElement('figcaption')
let myImg = document.createElement ('img')
figImg.src = `https://starwars-visualguide.com/assest/img/films/1${i + 1}.jpg`
figCaption.textContent = films [i].tittle

figure.appendChild(figImg)
figure.appendChild(figCaption)
filmlist.appendChild(figure)
}