import React from 'react'

function Home() {
    const result={
        color:"white",
        background:"purple"

    }
  return (
    //<div> This is an Home</div>
    //<h1 style={{color:"red"}}>Text colored </h1>
   <h1 style={result}>Change the text color and background </h1>

  )
}

export default Home