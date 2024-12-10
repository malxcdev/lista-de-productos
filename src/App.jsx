import Product from "./components/Product";
import products from "./data/products";
import YouCart from "./components/YouCart";
import { useState } from "react";

function App() {

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    // Actualiza el carrito con el nuevo producto
    setCart((carritoAnterior) => {
      // 1. Buscar si el producto ya existe en el carrito
      let productoExistente = false;
      let carritoActualizado = carritoAnterior.map((item) => {
        if (item.id === product.id) {
          // Si el producto existe, aumentar la cantidad
          productoExistente = true;
          return { ...item, quantity: item.quantity + 1 }; // Aumentamos la cantidad en 1
        }
        return item; 
      });
  
      // 2. Si el producto no existe, agregarlo al carrito con quantity: 1
      if (!productoExistente) {
        carritoActualizado = [...carritoActualizado, { ...product, quantity: 1 }];
      }
  
      // 3. Retornar el carrito actualizado
      return carritoActualizado;
    });
  };
  
  return (
    <>

      <div className="p-8 bg-rose-100">
        <h2 className="font-bold text-5xl mb-10 text-rose-900">Desserts</h2>
        {products.map((products) => (
          <Product
            key={products.id}
            category={products.category}
            name={products.name}
            price={products.price}
            url={products.url}
            onAddToCart={() => handleAddToCart(products)}
          />
        ))}
        <h2 className="font-bold text-4xl text-red mb-10">
          You Cart <span>(7)</span>
        </h2>
        <YouCart cart={cart}></YouCart>
        <section>
          <div>
            <div className="flex items-center justify-between bg-white pl-5 pr-7 py-5 rounded-lg border-b border-rose-100">
              <h2 className="text-xl">Order Total</h2>
              <p className="font-bold text-4xl text-rose-900">$46.50</p>
            </div>
          </div>
        </section>
        <section className="flex justify-center bg-red rounded-3xl py-5 mt-8 hover:bg-opacity-85 cursor-pointer">
          <button className="text-white font-semibold text-xl ">
            Confirm Order
          </button>
        </section>
      </div>
    </>
  );
}

export default App;
