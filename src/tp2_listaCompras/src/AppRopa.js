import React, { useState } from 'react';
import './AppRopa.css';
import { ListaCompras } from './ListaCompras';
import ItemCompra from './itemCompra'; 

export function AppRopa(props) {
  const inventario = [
    {
      categoria: 'prenda',
      codigo: 12346,
      producto: 'Camisa',
      marca: 'Kiva',
      estilo: 'rayada',
      color: 'azul',
      cant_max: 3,
    },
    {
      categoria: 'prenda',
      codigo: 12347,
      producto: 'Pantalón',
      marca: 'Oshira',
      estilo: 'skinny',
      color: 'negro',
      cant_max: 10,
    },
    {
      categoria: 'prenda',
      codigo: 12348,
      producto: 'Falda',
      marca: 'Zafia',
      estilo: 'plisada',
      color: 'roja',
      cant_max: 7,
    },
    {
      categoria: 'zapatos',
      codigo: 22345,
      producto: 'Zapatillas',
      marca: 'Nike',
      estilo: 'deportivas',
      color: 'blanco',
      cant_max: 8,
    },
    {
      categoria: 'zapatos',
      codigo: 22346,
      producto: 'Botines',
      marca: 'Timberland',
      estilo: 'casual',
      color: 'marrón',
      cant_max: 4,
    },
    {
      categoria: 'zapatos',
      codigo: 22347,
      producto: 'Sandalias',
      marca: 'Havaianas',
      estilo: 'playeras',
      color: 'rosado',
      cant_max: 15,
    },
    {
      categoria: 'accesorios',
      codigo: 32345,
      producto: 'Reloj',
      marca: 'Casio',
      estilo: 'clásico',
      color: 'negro',
      cant_max: 20,
    },
    {
      categoria: 'accesorios',
      codigo: 32346,
      producto: 'Collar',
      marca: 'Pandora',
      estilo: 'minimalista',
      color: 'plata',
      cant_max: 10,
    },
    {
      categoria: 'accesorios',
      codigo: 32347,
      producto: 'Gafas de sol',
      marca: 'Ray-Ban',
      estilo: 'aviador',
      color: 'negro',
      cant_max: 12,
    },
  ];

  const [productosSeleccionados, setProductosSeleccionados] = useState([]);
  //Selección de productos
  const manejarSeleccionProducto = (codigo) => {
    const productoSeleccionado = inventario.find((producto) => producto.codigo === codigo);
    setProductosSeleccionados((prevSeleccionados) => {
     
      if (prevSeleccionados.some((item) => item.codigo === codigo)) {
        return prevSeleccionados.filter((item) => item.codigo !== codigo);
      }
      
      return [...prevSeleccionados, {...productoSeleccionado, cantidad: 0}];
    });
  };

  // Registrar cantidad 
  const registrarCantidad = (codigo, cantidad) => {
    setProductosSeleccionados((prevSeleccionados) =>
      prevSeleccionados.map((item) =>
        item.codigo === codigo ? { ...item, cantidad: cantidad } : item
      )
    );
  };

  const finalizarCompra = (e) => {
    e.preventDefault();
    console.log('Códigos seleccionados:', productosSeleccionados);
    
  };

   // Función para eliminar un producto
   const eliminarProducto = (codigo) => {
    setProductosSeleccionados((prevSeleccionados) =>
      prevSeleccionados.filter((item) => item.codigo !== codigo)
    );
  };

  return (
    <div className="container">
      <h1>Carrito de Compras</h1>
      <form onSubmit={finalizarCompra}>
        <ListaCompras
          inventario={inventario}
          manejarSeleccionProducto={manejarSeleccionProducto}
        />
       
      </form>
      <div>
        <h2>Productos Seleccionados</h2>
         <ul>
          {productosSeleccionados.map((producto) => (
            <li class="container_flex" key={producto.codigo}>
            Código: {producto.codigo} - {producto.producto} {producto.marca}
            <ItemCompra
                maxValue={producto.cant_max}
                registrarCantidad={(cantidad) => registrarCantidad(producto.codigo, cantidad)}
              />
              <button class="button_elim" onClick={() => eliminarProducto(producto.codigo)}>Eliminar</button> {/* Botón eliminar */}
          </li>
          ))}
        </ul>
      
      </div>
      <button class="button_finalizar" type="submit">Finalizar Compra</button>
    </div>
  );

}
export default AppRopa;

