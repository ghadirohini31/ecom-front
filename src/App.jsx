
import './App.css'
import Lists from './components/Fifth'
import First from './components/First'
import Fourth from './components/Fourth'
import Second from './components/Second'
import Seventh from './components/Seventh'
import Sixth from './components/Sixth'
import Third from './components/Third'

function App() {
  
  return (
    <>
     <First/>
     <Second/>
     <Third/>
     <Fourth isLoggedin={false}/>
     <Lists/>
     <Sixth/>
     {/*<Seventh/>*/}
    </>
  )
}

export default App
