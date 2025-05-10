
import { useDispatch } from "react-redux";
import { addToCart } from "../store/features/cartSlice";

const products = [
  { id: 1, name: "Burger", price: 23 },
  { id: 2, name: "Pizza", price: 3 },
  { id: 3, name: "Cola", price: 53 }
];


const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>Products</p>
      {products.map(p => (
        <div key={p.id}>
          <p>{p.name} - {p.price}</p>
          <button onClick={() => dispatch(addToCart(p))}>add to cart</button>
        </div>
      ))}
    </div>
  )
}

export default ProductList