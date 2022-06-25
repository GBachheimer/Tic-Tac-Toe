import React from 'react'
import ReactDom from 'react-dom'

function GenerateButtons() {
  const button = (<button class = "buttons" type = "button" className = "btn btn-outline-dark my-1 mx-1 w-25 h-25 d-inline-block">X</button>)
  const buttonsArray = []
  for (let i = 1; i < 10; ++i) {
    buttonsArray.push(button);
  }
  return buttonsArray
}

function GenerateBoard() {
  return (
    <div className = "text-center square position-absolute top-50 start-50 translate-middle">
      <GenerateButtons/>
    </div>
  )
}

ReactDom.render(
  <GenerateBoard/>,
  document.getElementById('root')
)