export function ListaCompras({ inventario, manejarSeleccionProducto }) {
    return (
      <div>
        <h2>Selecciona productos</h2>
        <select onChange={(e) => manejarSeleccionProducto(Number(e.target.value))}>
          <option value="">Seleccione un producto</option>
          {inventario.map((producto) => (
            <option key={producto.codigo} value={producto.codigo}>
              {producto.producto} - {producto.marca} ({producto.color})
            </option>
          ))}
        </select>
      </div>
    );
  }