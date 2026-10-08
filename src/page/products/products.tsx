import { useParams, Link } from "react-router";
// import { products } from "../../data/products";
import { useProduct } from "../../context/products/productContext";

function Product() {
  const { id } = useParams();
  const { state } = useProduct();

  const product = state.products.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found 😕</h2>
        <Link to="/products" className="product-back">
          Back to products
        </Link>
      </div>
    );
  }

  return (
    <main className="product-page">
      <Link to="/products" className="product-back">
        <span>←</span> Back to products
      </Link>

      <section className="product-detail">
        <div className="product-gallery">
          <div className="product-image">
            <span className="product-badge">Featured</span>

            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-gallery-note">
            <span>✦</span>
            Premium quality guaranteed
          </div>
        </div>

        <div className="product-info">
          <span className="product-category">{product.product_category.name}</span>

          <h1>{product.name}</h1>

          <div className="product-rating">
            <span className="rating-star">★</span>
            <strong>{product.name}</strong>
            <span className="rating-reviews">({product.manufacturer} reviews)</span>
            <span className="product-stock">
              <span className="stock-dot" />
              In stock
            </span>
          </div>

          <div className="product-price">
            <strong>${product.price.toFixed(2)}</strong>
            <del>${product.price.toFixed(2)}</del>
            <span className="product-discount">
              {Math.round((1 - product.price / product.price) * 100)}% OFF
            </span>
          </div>

          <p className="product-description">{product.description}</p>

          <div className="product-divider" />

          <h3>Product highlights</h3>

          {/* <ul className="product-features">
            {product.features.map((feature) => (
              <li key={feature}>
                <span className="feature-check">✓</span>
                {feature}
              </li>
            ))}
          </ul> */}

          <div className="product-divider" />

          <div className="product-delivery">
            <span className="delivery-icon">↗</span>
            <div>
              <strong>Fast delivery</strong>
              <p>Convenient delivery to your address.</p>
            </div>
          </div>

          <div className="product-actions">
            <button
              className="product-cart-button"
              onClick={() => alert(`${product.name} added to cart!`)}
            >
              <span>🛒</span>
              Add to cart
            </button>

            <button
              className="product-buy-button"
              onClick={() => alert(`You selected ${product.name}`)}
            >
              Buy now →
            </button>
          </div>

          <p className="product-guarantee">✓ Secure shopping · Easy returns</p>
        </div>
      </section>
    </main>
  );
}

export default Product;
