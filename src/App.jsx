import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'
const App = () => {

  return (
    <BrowserRouter> {/* Will allow us to route */}
      {/* https://getbootstrap.com/docs/5.0/utilities/position/ */}
      <div className="relative z-0 bg-primary"> {/* tailwind css allows us to apply styles inside HTML in this way */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works /> {/* learning experience */}
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
