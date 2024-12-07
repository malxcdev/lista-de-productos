import Product from "./components/Product";
import products from "./data/products";
import YouCart from "./components/YouCart";
import waffle from "./assets/images/image-waffle-mobile.jpg";

function App() {
  return (
    <>
      <div className="p-8 bg-rose-100">
        <h2 className="font-bold text-5xl mb-10 text-rose-900">Desserts</h2>
        <Product
          category="Waffle"
          name="Waffle with Berries"
          price="6.50"
          url={waffle}
        />
        {products.map((products) => (
          <Product
            key={products.id}
            category={products.category}
            name={products.name}
            price={products.price}
            url={products.url}
          />
        ))}
        <h2 className="font-bold text-4xl text-red mb-10">
          You Cart <span>(7)</span>
        </h2>
        <YouCart></YouCart>
        <YouCart></YouCart>
        <YouCart></YouCart>
      </div>
    </>
  );
}

export default App;
