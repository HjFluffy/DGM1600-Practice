import { people } from '../Data/people.js'

const mainContent = document.querySelector('#main')

people.forEach(Element => {
    const charFigure = document.createElement('figure')
    const charImg = document.createElement('img')
    charImg.src = `https://starwars-visualguide.com/assets/img/characters/1.jpg`
    charFigure.appendChild(charImg)
    mainContent.appendChild(charFigure)
})

