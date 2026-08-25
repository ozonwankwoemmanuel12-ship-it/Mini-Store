import { useParams, useNavigate, Link } from "react-router";
import { products } from "../data/products";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // id is the STRING "3", so convert before comparing
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div>
        <p className="text-slate-600">That product does not exist.</p>
        <Link to="/products" className="text-blue-600 underline">
          Back to products
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-white rounded-xl shadow p-6 max-w-2xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="text-slate-500 hover:text-slate-800 mb-4"
      >
        ← Back
      </button>

      <img
        src={product.image}
        alt={product.name}
        className="w-full aspect-video object-cover rounded-lg"
      />

      <h1 className="mt-4 text-2xl font-bold text-slate-800">
        {product.name}
      </h1>
      <p className="mt-2 text-slate-600">{product.description}</p>
      <p className="mt-4 text-xl font-semibold text-blue-600">
        N{product.price.toLocaleString()}
      </p>
    </article>
  );
}

export default ProductDetail;