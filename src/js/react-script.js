const root = ReactDOM.createRoot(document.getElementById('root'));

function ProductCard({ id, title, price, imgUrl, onAddCart, addCart }) {
  const [isAdd, setIsAdd] = React.useState(addCart);
  React.useEffect(() => {
    setIsAdd(addCart);
  }, [addCart]);
  return (
    <div className="shop__item">
      <img src={imgUrl} alt="" className="shop__item-img" />

      <span className="shop__item-title">{title}</span>
      <p className="shop__item-price">
        Price:
        <span className="shop__item-price_big"> ${price} </span>
      </p>
      <p className="shop__item-cart">
        Add to cart:
        <img
          style={{ width: '32px', height: '32px', cursor: 'pointer' }}
          src={
            !isAdd ? '/i/shop/add-to-cart-3046.svg' : '/i/shop/btn-checked.svg'
          }
          alt=""
          onClick={() => {
            setIsAdd(!isAdd);
            onAddCart({ title, imgUrl, price, id });
          }}
        />
      </p>
    </div>
  );
}

function CartIcon({ data, openCart }) {
  return (
    <div className="cart-icon" onClick={openCart}>
      <i className="icon-cart cart-icon__img"></i>
      <span className="cart-icon__count">{data.length}</span>
    </div>
  );
}
function Cart({ closeCart, opened, data, onRemoveItem }) {
  const totalPrice = data.reduce((sum, item) => (sum += item.price), 0);
  return (
    <div className={`cart ${opened ? '' : 'hidden'}`}>
      <div className="cart__wrapper">
        <img
          className="cart__close-btn"
          src="i/shop/btn-remove.svg"
          alt="Close cart"
          onClick={closeCart}
        />
        <h3 className="cart__title">Cart</h3>
        {data.length > 0 ? (
          <>
            <div className="cart__items">
              {data.map((obj) => {
                return (
                  <div key={obj.id} className="cart__item">
                    <div className="cart__item-del">
                      <img
                        onClick={() => onRemoveItem(obj.id)}
                        className="cart__item-del-btn"
                        src="i/shop/btn-remove.svg"
                        alt="Delete product"
                      />
                    </div>
                    <img src={obj.imgUrl} alt="" className="cart__item-img" />
                    <div className="">
                      <p className="cart__item-title">{obj.title}</p>
                      <span className="cart__item-price">{`$${obj.price}`}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <p className="cart__price">
                <span>Total price:</span>
                <span>{` $${totalPrice.toFixed(2)}`}</span>
              </p>
              <button className="cart__order">Go to order</button>
            </div>
          </>
        ) : (
          <div className="cart__empty">
            <img
              src="i/shop/empty-cart.jpg"
              alt="Empty cart"
              className="cart__empty-img"
            />
            <p className="cart__empty-title">
              Your cart is empty. Please, add product to cart{' '}
            </p>
            <button onClick={closeCart} className="cart__empty-btn-close">
              Go back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://633857b2937ea77bfdbe8b5e.mockapi.io/sneakers'
        );
        const shopItems = await response.json();
        setItems(shopItems);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (obj) => {
    if (cartItems.find((item) => item.id === obj.id)) {
      onRemoveItem(obj.id);
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, obj]);
    }
  };

  const onRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div id="shop">
      <h2 className="shop__title">Shop</h2>
      <div className="shop__wrapper">
        <CartIcon data={cartItems} openCart={() => setCartOpened(true)} />
        {cartOpened && (
          <Cart
            closeCart={() => setCartOpened(false)}
            opened={cartOpened}
            data={cartItems}
            onRemoveItem={onRemoveItem}
          />
        )}

        {items.map((item) => {
          return (
            <ProductCard
              key={+item.id}
              id={+item.id}
              title={item.title}
              price={item.price}
              imgUrl={item.imageUrl}
              onAddCart={(obj) => addToCart(obj)}
              addCart={cartItems.find((prod) => +prod.id === +item.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

root.render(<App />);
