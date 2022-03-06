// import React from 'react'
import Heading from "../components/Heading"
import Nav from "../components/Nav"
import Paragraph from "../components/Paragraph"

function About() {
  return (<>
  <Nav />
    <main>
        <Heading content="This is the about page"/>
        <Paragraph content="Dost thou even hoist?"/>
    </main>
    </>
  )
}

export default About