function FiltroCategorias({ categorias, categoriaActiva, onSeleccionar }) {
    return (
        <div className="filtros">
            {categorias.map((categoria) => (
                <button
                    key={categoria}
                    onClick={() => onSeleccionar(categoria)}
                    className={categoria === categoriaActiva ? "activo" : ""}
                >
                    {categoria}
                </button>
                
            ))}
        </div>
    );
}

export default FiltroCategorias;