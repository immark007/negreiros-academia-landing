import { Header } from "./components/sections/Header/Header"
import { Hero } from "./components/sections/Hero/Hero"
import { About } from "./components/sections/About/About"
import { Equipment } from "./components/sections/Equipment/Equipment"
import { Pricing } from "./components/sections/Pricing/Pricing"
import { Questions } from "./components/sections/Questions/Questions"
import { Gallery } from "./components/sections/Gallery/Gallery"
import { Contact } from "./components/sections/Contact/Contact"
import { Footer } from "./components/sections/Footer/Footer"
import { WhatsAppButton } from "./components/ui/WhatsAppButton/WhatsAppButton"

function App() {

  return (
    <>
    <div className="flex flex-col min-h-screen bg-neutral-900">
    <Header />
    <main>
    <Hero />
    <About />
    <Equipment />
    <Pricing />
    <Questions />
    <Gallery />
    <Contact />
    </main>
    <Footer />
    <WhatsAppButton />
    </div>
    </>
  )
}

export default App
