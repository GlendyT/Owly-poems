import Poems from "./components/Poems"
import { PoemProvider } from "./context/PoemPorivider"


function App() {
  return (
    <PoemProvider>
      <header>
        <h1>A Universe of Poems for BTS</h1>
      </header>
      <Poems/>
    </PoemProvider>
    
  )
}

export default App
