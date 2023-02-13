const mainDiv = document.querySelector('.sketch-pad')
const colorChoice = document.querySelector('#color-picker')
const sketchPad = document.querySelector('.sketch-pad')
const eraser = document.getElementById('#eraser')
const settingsBtns = document.querySelector('.settings')

for (let i = 0; i<256; i++)
{
    const divTiles = document.createElement('div')
    
    divTiles.style.height = '20px'
    divTiles.style.width = '20px'
    divTiles.style.backgroundColor = 'white'
    mainDiv.appendChild(divTiles)
    divTiles.addEventListener('mouseover', () => {
        divTiles.style.opacity = '0'
    }) 
    window.newDiv = divTiles
}

sketchPad.style.backgroundColor = 'black'

colorChoice.addEventListener('click', () => {
    let color = colorChoice.value
    sketchPad.style.backgroundColor = color
})



const clrBtn = document.querySelector("#clear")

clrBtn.addEventListener('click', () => {
    location.reload()
})



settingsBtns.addEventListener('click', () => {
    settingsBtns.style.backgroundColor = 'black'
})



const canvas = document.getElementById('#myCanvas')
let ctx = canvas.getContext("2d")
ctx.moveTo(0,0)
ctx.lineTo(200, 100);
ctx.stroke();
