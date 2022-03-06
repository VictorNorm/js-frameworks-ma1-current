import Heading from "../components/Heading"
import Nav from "../components/Nav"
import List from "../components/List"

function Contact() {
  return (<>
  <Nav />
    <main>
        <Heading content="This is the contact page"/>
        <List one="Street: Rocky road" two="Post number: 1337" three="City: Oslo"/>
    </main>
    </>
  )
}

export default Contact