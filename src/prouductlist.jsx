
import PropTypes from 'prop-types';

const products = [
  { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 10 },
  { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 20 },
  { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 30 },
];

function ProductList({ addToCart }) {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((product) => (
            <div key={product.id} className="col mb-5">
              <div className="card h-100">
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">{product.name}</h5>
                    <p>{product.description}</p>
                    <span>${product.price}</span>
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button className="btn btn-outline-dark mt-auto" onClick={() => addToCart(product)}>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
ProductList.propTypes = {
    addToCart: PropTypes.func.isRequired,
  };
  
  export default ProductList;
