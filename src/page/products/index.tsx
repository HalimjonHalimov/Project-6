import { useMemo, useState } from "react";
import { Link } from "react-router";
import { products } from "../../data/products";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [cartCount, setCartCount] = useState(0);

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = useMemo(() => {
    
    const result = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });

    switch (sort) {
      case "price-low":
        return result.sort((a, b) => a.price - b.price);
      case "price-high":
        return result.sort((a, b) => b.price - a.price);
      case "rating":
        return result.sort((a, b) => b.rating - a.rating);
      default:
        return result;
    }
  }, [search, category, sort]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id],
    );
  };

  return (
    <main className="products-page">
      <section className="products-hero">
        <div className="products-hero-content">
          <span className="products-eyebrow">✦ YOUR EVERYDAY ESSENTIALS</span>

          <h1>
            Discover our
            <br />
            latest <span>products.</span>
          </h1>

          <p>
            Explore a wide range of high-quality products designed to make your
            everyday life better.
          </p>

          <a href="#product-list" className="products-hero-button">
            Explore products <span>↓</span>
          </a>
        </div>

        <div className="products-hero-art">
          <div className="hero-circle" />
          <div className="hero-bag hero-bag-back">
            <span />
          </div>
          <div className="hero-bag hero-bag-front">
            <span />
          </div>
          <div className="hero-heart">♥</div>
          <div className="hero-sparkle">✦</div>
        </div>
      </section>

      <section className="products-content" id="product-list">
        <div className="products-heading">
          <div>
            <span className="products-eyebrow">OUR COLLECTION</span>
            <h2>Explore products</h2>
            <p>Find something you'll love.</p>
          </div>

          <div className="cart-indicator">
            <span>🛒</span>
            Cart
            <strong>{cartCount}</strong>
          </div>
        </div>

        <div className="products-toolbar">
          <label className="products-search">
            <span>⌕</span>
            <input
              type="search"
              placeholder="Search products..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>

          <select
            aria-label="Filter by category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item === "All" ? "All Categories" : item}
              </option>
            ))}
          </select>

          <select
            aria-label="Sort products"
            value={sort}
            onChange={(event) => setSort(event.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        <div className="products-results">
          <p>
            Showing <strong>{filteredProducts.length}</strong> products
          </p>
          <span>{favorites.length} saved favorites ♡</span>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product, index) => {
              const isFavorite = favorites.includes(product.id);

              return (
                <article className="product-card" key={product.id}>
                  <div className="product-card-image">
                    <Link
                      to={`/products/${product.id}`}
                      className="product-image-link"
                      aria-label={`View ${product.name}`}
                    >
                      <img src={product.image} alt={product.name} />
                    </Link>

                    <span
                      className={`product-card-badge ${
                        index === 0 ? "sale-badge" : ""
                      }`}
                    >
                      {index === 0 ? "SALE" : index === 1 ? "NEW" : "POPULAR"}
                    </span>

                    <button
                      type="button"
                      className={`favorite-button ${
                        isFavorite ? "is-favorite" : ""
                      }`}
                      onClick={() => toggleFavorite(product.id)}
                      aria-label={
                        isFavorite
                          ? "Remove from favorites"
                          : "Add to favorites"
                      }
                    >
                      {isFavorite ? "♥" : "♡"}
                    </button>
                  </div>

                  <div className="product-card-body">
                    <span className="product-card-category">
                      {product.category}
                    </span>

                    <Link
                      to={`/products/${product.id}`}
                      className="product-card-title"
                    >
                      {product.name}
                    </Link>

                    <div className="product-card-rating">
                      <span>★</span>
                      <strong>{product.rating}</strong>
                      <small>({product.reviews})</small>
                    </div>

                    <div className="product-card-price">
                      <strong>${product.price.toFixed(2)}</strong>
                      <del>${product.oldPrice.toFixed(2)}</del>
                    </div>

                    <div className="product-card-actions">
                      <Link
                        to={`/products/${product.id}`}
                        className="view-product-button"
                      >
                        View details <span>→</span>
                      </Link>

                      <button
                        type="button"
                        className="quick-cart-button"
                        onClick={() => setCartCount((prev) => prev + 1)}
                        aria-label={`Add ${product.name} to cart`}
                        title="Add to cart"
                      >
                        ♧
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="products-empty">
            <span>⌕</span>
            <h3>No products found</h3>
            <p>Try another search or select a different category.</p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default Products;
