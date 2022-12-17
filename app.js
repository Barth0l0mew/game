const board = document.querySelector('#board')
const SQUARES_NUMBER = 500
// const color = ['red','blue', 'green', 'yellow', 'purple']
const color = ['#e74c3c', '#8e44ad', '#3490db', '#e67e22', '#2ecc71']
for (let i = 0; i<SQUARES_NUMBER; i++){
  const square = document.createElement('div')
  square.classList.add('square')
  square.addEventListener('mouseover',()=>{
    setColor(square)
  })
  square.addEventListener('mouseleave',()=>{
    removeColor(square)
  })
  board.append(square)
}
function setColor(element){
  // const color = getColor()
  const font = randomColor();
  element.style.background = font
  element.style.boxShadow = `0 0 2px ${font}, 0 0 10px ${font}`
}
function removeColor(element){
  element.style.background = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`

}
// function getColor (){
//  const index = Math.floor(Math.random() * color.length)
//  return color[index]
// }
function randomColor(){

  const indexs = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

  let color = '#'
  for (let i=0; i<6; i++){
    const index = Math.floor(Math.random()*indexs.length)
    
    color += indexs[index]
  }
  
  return color
}