import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

export default function App() {
  return (
    <div>
      <div className="overflow-x-hidden antialiased">

        {/* background gradient */}
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          </div>
        </div>

        {/* content */}

        <div className="container mx-auto px-8">
          <Header />
          <Hero />
          <Technologies />
          <Projects />
          <Footer />
        </div>

      </div>
    </div>
  )
}