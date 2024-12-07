import Product from "./components/Product"
import products from "./data/products"
import waffle from "./assets/images/image-waffle-mobile.jpg"

function App() {

  return (
    <>
      <div className="p-8">
        <h2 className="font-bold text-5xl mb-10 text-rose-900">Desserts</h2>
        <Product category="Waffle" name="Waffle with Berries" price="6.50" url={waffle} />
        {
          products.map((products) => (
            <Product key={products.id} category={products.category} name={products.name} price={products.price} url={products.url} />
          ))
        }

      </div>

    </>
  )
}

export default App
