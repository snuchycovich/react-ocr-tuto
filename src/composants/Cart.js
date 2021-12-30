import '../styles/Cart.css'

function Cart() {
  const monsteraPrice = 8
  const ivyPrice = 10
  const flowersPrice = 15
  
  return (
    <div className="lmj-cart">
      <ul>
        <li>Monstera: {monsteraPrice}€</li>
        <li>Lierre: {ivyPrice}€</li>
        <li>Fleurs: {flowersPrice}€</li>
      </ul>
      <p>Total: {monsteraPrice + ivyPrice + flowersPrice}</p>
    </div>
  );
}

export default Cart