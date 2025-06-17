import { Route, Routes } from "react-router";
import RuletaView from "../layouts/RuletaView.tsx";
import NotFound from "../layouts/NotFound.tsx";
import Inicio from "../layouts/Inicio.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/ruleta" element={<RuletaView />} />
      
      { /* not found */}
      <Route path="*" element={<NotFound />} />
      
    </Routes>
  )
}