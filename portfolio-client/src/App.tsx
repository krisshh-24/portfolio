
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/ui/Footer'

function App() {


  return (
    <div className="dark bg-background text-foreground">
      <Navbar></Navbar>
      <main>
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
        <Footer />
      </main>
    </div>
  )
}

export default App
