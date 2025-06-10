import Carrusel from "../components/Carrusel/Carrusel"
import Descripcion from "../ui/App/Descripcion"
import Navegacion from "../ui/App/Navegacion"
import Social from "../ui/App/Social"
import Video from "../ui/App/Video"

function App() {
  return (
    <>
      <Navegacion />
      <main>
        <div className="flex justify-center bg-[#F4EDE6]">
          <Carrusel />
        </div>
        <Descripcion />
        <Video />
      </main>
      <footer className="">
        <h1 className="bg-[#E3CBAF] text-center text-3xl font-bold p-3">CONTACTANOS</h1>
        <Social />
      </footer>
    </>
  )
}

export default App
