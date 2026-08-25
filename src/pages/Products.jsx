import { Link } from "react-router";
import { products } from "../data/products";

function Products() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden block"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-square object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h2 className="font-semibold text-slate-800">
                {product.name}
              </h2>
              <p className="text-slate-500 text-sm mt-1 line-clamp-2">
                {product.description}
              </p>
              <p className="mt-3 font-bold text-blue-600">
                N{product.price.toLocaleString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;