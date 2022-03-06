import Heading from "../components/Heading"
import Nav from "../components/Nav"
import List from "../components/List"

function Portfolio() {
  return (<>
  <Nav />
    <main>
        <Heading content="This is the portfolio page"/>
        <List one="First list item" two="Second list item" three="Third list item"/>
    </main>
    </>
  )
}

export default Portfolio