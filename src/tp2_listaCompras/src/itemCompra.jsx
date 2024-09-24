import { useState } from 'react';
export default function ItemCompra({
  text = '',
  maxValue,
  registrarCantidad,
}) {
  const [count, setCount] = useState(0);

  function sumarUno() {
    setCount(count + 1);
    registrarCantidad(text, count + 1);
  }

  function restarUno() {
    setCount(count - 1);
    registrarCantidad(text, count - 1);
  }

  return (
    <div className={'my-input'}>
      <label>{text}</label>
      <button class="button_cant" disabled={count === 0} onClick={restarUno}>
        -
      </button>
      <input  style={{ width: '50px', textAlign: 'center' }} name={text} value={count} />
      <button class="button_cant" disabled={count >= maxValue} onClick={sumarUno}>
        +
      </button>
    </div>
  );
}
