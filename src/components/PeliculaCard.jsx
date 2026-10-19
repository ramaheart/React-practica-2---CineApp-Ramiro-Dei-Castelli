function PeliculaCard({ pelicula, onVerDetalles }) {
    return (
        <div className="card">
            <img src={pelicula.posterUrl} alt={pelicula.titulo} />
            <div className="card-info">
                <h2>{pelicula.titulo} ({pelicula.anio})</h2>
                <span className="badge">{pelicula.categoria}</span>
                <button className="btn-trailer" onClick={() => onVerDetalles(pelicula)}>
                    Ver trailer y detalles
                </button>
            </div>
        </div>
    );
}

export default PeliculaCard;