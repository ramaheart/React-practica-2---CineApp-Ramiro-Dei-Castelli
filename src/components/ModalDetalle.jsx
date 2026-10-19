import { useEffect } from "react";

function ModalDetalle({ pelicula, onCerrar }) {
    useEffect(() => {
        document.title = "Viendo: " + pelicula.titulo;

        return () => {
            document.title = "CineApp - Catalogo";
        };
    }, [pelicula]);
    return (
        <div className="overlay">
            <div className="modal">
                <h2>{pelicula.titulo}</h2>
                <p className="modal-meta">{pelicula.anio} · {pelicula.categoria}</p>
                <p>{pelicula.sinopsis}</p>
                <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${pelicula.youtubeId}`}
                    title={pelicula.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ border: "none", borderRadius: "8px" }}
                ></iframe>
                <button className="btn-cerrar" onClick={onCerrar}>Cerrar</button>
            </div>
        </div>

    );
}

export default ModalDetalle;