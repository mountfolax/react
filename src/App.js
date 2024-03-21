import React from 'react'
import Project from './component/Project'

const App = () => {
    const image2 = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/6404072/1.jpg?3679"
    const image = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/0008722/1.jpg?6238"
  return (

    <div>
       <Project image={image} title="Solar Pannel" text= "Buy Now"/>
       <Project image= {image2} title="Laptop" text= "Add To Cart"/>
    </div>
  )
}

export default App
