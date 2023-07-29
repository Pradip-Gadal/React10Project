import './App.css'
import AboutContactUs from './conmponent/body/bodyHead/aboutContactUs'
import Navbar from './conmponent/navbar/navbar'
import FormSection from './conmponent/body/bodyTail/formSection'

function App() {
  return (
    <div className='container'>
        <Navbar />
        <AboutContactUs />
        <FormSection />
    </div>
  )
}

export default App
