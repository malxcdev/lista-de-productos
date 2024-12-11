import Product from "./components/Product";
import products from "./data/products";
import YouCart from "./components/YouCart";
import OrderConfirmationModal from "./components/OrderConfirmationModal";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddOne = (product) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((p) => p.id === product.id);
      if (index !== -1) {
        // Si ya existe en el carrito, incrementamos la cantidad
        const updatedCart = [...prevCart];
        updatedCart[index] = { ...updatedCart[index], quantity: updatedCart[index].quantity + 1 };
        return updatedCart;
      } else {
        // Si no existe, lo agregamos con cantidad 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveOne = (product) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((p) => p.id === product.id);
      if (index !== -1) {
        const updatedCart = [...prevCart];
        const newQuantity = updatedCart[index].quantity - 1;
        if (newQuantity <= 0) {
          // Si la cantidad llega a 0, eliminamos el producto del carrito
          updatedCart.splice(index, 1);
        } else {
          updatedCart[index] = { ...updatedCart[index], quantity: newQuantity };
        }
        return updatedCart;
      }
      // Si no está en el carrito, no hacemos nada
      return prevCart;
    });
  };

  // Obtener el total dinámico del carrito
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const open = true;
  const close = false;


  return (
    <div className="p-8 bg-rose-100">
      <h2 className="font-bold text-5xl mb-10 text-rose-900">Desserts</h2>
      {products.map((prod) => {
        const cartItem = cart.find((item) => item.id === prod.id);
        const quantity = cartItem ? cartItem.quantity : 0;
        return (
          <Product
            key={prod.id}
            id={prod.id}
            category={prod.category}
            name={prod.name}
            price={prod.price}
            url={prod.url}
            quantity={quantity}
            onAddOne={() => handleAddOne(prod)}
            onRemoveOne={() => handleRemoveOne(prod)}
          />
        );
      })}
      <h2 className="font-bold text-4xl text-red mb-10">
        You Cart <span>({cart.length})</span>
      </h2>
      <YouCart cart={cart} />
      <section>
        <div>
          <div className="flex items-center justify-between bg-white pl-5 pr-7 py-5 rounded-lg border-b border-rose-100">
            <h2 className="text-xl">Order Total</h2>
            <p className="font-bold text-4xl text-rose-900">${total.toFixed(2)}</p>
          </div>
        </div>
      </section>
      <section className="flex justify-center bg-red rounded-3xl py-5 mt-8 hover:bg-opacity-75 cursor-pointer">
        <button className="text-white font-semibold text-xl ">
          Confirm Order
        </button>
      </section>
      <OrderConfirmationModal  isOpen={open} onClose={close} orderNumber="1111" total={total} />
    </div>
  );
}

export default App;
