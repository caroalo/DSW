const eliminarProducto = (codigo) => {
    setProductosSeleccionados((prevSeleccionados) =>
      prevSeleccionados.filter((item) => item.codigo !== codigo)
    );
  };
  