import { useState, useEffect } from "react";
import listadopeliculas from "./data/peliculas.json";
import FiltroCategorias from "./components/FiltroCategorias";
import PeliculaCard from "./components/PeliculaCard";
import ModalDetalle from "./components/ModalDetalle";
import "./App.css"

const categorias = ["Todas", "Acción", "Ciencia Ficción", "Comedia", "Drama"];


function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setPeliculas(listadopeliculas);
      setCargando(false);
    }, 1500);
  }, []);

  const peliculasFiltradas =
    categoriaSeleccionada === "Todas"
      ? peliculas
      : peliculas.filter((p) => p.categoria === categoriaSeleccionada);
  return (
    <div className="app" >
      <h1>CineApp</h1>
      <FiltroCategorias
        categorias={categorias}
        categoriaActiva={categoriaSeleccionada}
        onSeleccionar={setCategoriaSeleccionada}
      />
      {cargando ? (
        <p className="cargando">Cargando...</p>
      ) : (
        <div className="grilla">
          {peliculasFiltradas.map((p) => (
            <PeliculaCard
              key={p.id}
              pelicula={p}
              onVerDetalles={setPeliculaSeleccionada}
            />
          ))}
        </div>
      )}

      {peliculaSeleccionada !== null && (
        <ModalDetalle
          pelicula={peliculaSeleccionada}
          onCerrar={() => setPeliculaSeleccionada(null)}
        />
      )}
    </div>
  );
}
export default App;