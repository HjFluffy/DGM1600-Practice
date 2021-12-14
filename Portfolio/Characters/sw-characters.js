import { people } from '../Data/people.js'

const header = document.createElement('header')
const maleButton = document.createElement('button')
maleButton.textContent = 'Male Characters'
const femaleButton = document.createElement('button')
femaleButton.textContent = 'Female Characters'
header.appendChild(maleButton)
header.appendChild(femaleButton)

const mainContent = document.querySelector('#main')

document.body.insertBefore(header, mainContent)

const maleCharacters = people.filter(person => person.gender === 'male')
const femaleCharacters = people.filter(person => person.gender === 'female')

console.log(maleCharacters)

people.forEach((Element, index) => {
    
    const charFigure = document.createElement('figure')
    const charImg = document.createElement('img')
    const charNum = getLastNumber(Element.url)
    charImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
    
    const charCaption = document.createElement('figcaption')
    charCaption.textContent = `${Element.name}`

    charFigure.appendChild(charImg)
    charFigure.appendChild(charCaption)
    mainContent.appendChild(charFigure)
})

function getLastNumber(url){
    let end = url.lastIndexOf('/')
    let start = end - 2
    if(url.charAt(start) === '/') {
        start++
    }
    return  url.slice(start, end)
}
