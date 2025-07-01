import { useSelector, useDispatch } from "react-redux";
import { incrementQty, decrementQty, removeFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getNumericPrice = (price) => parseInt(price.replace(/[₹,]/g, ""));
  const subtotal = cart.reduce((sum, item) => sum + getNumericPrice(item.price) * item.quantity, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-10">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Cart Left Section */}
        <div className="lg:col-span-2">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-300 text-gray-500 uppercase text-xs">
                <th className="py-3">Product</th>
                <th className="py-3">Price</th>
                <th className="py-3 text-center">Quantity</th>
                <th className="py-3 text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-b last:border-none">
                  <td className="py-4 flex items-center gap-4">
                    <button
                      className="text-gray-400 text-xl hover:text-red-500"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      ×
                    </button>
                    <img src={item.image} alt={item.title} className="w-20 h-20 object-contain border" />
                    <span className="text-sm font-medium text-gray-700">{item.title}</span>
                  </td>
                  <td className="py-4">₹{getNumericPrice(item.price)}</td>
                  <td className="py-4">
                    <div className="flex justify-center items-center border border-gray-300 rounded w-fit">
                      <button
                        onClick={() => dispatch(decrementQty(item.id))}
                        className="px-2 py-1 text-lg"
                      >
                        -
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        onClick={() => dispatch(incrementQty(item.id))}
                        className="px-2 py-1 text-lg"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-4 text-right font-semibold">
                    ₹{getNumericPrice(item.price) * item.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Coupon Code */}
          {/* Coupon Code */}
<div className="flex items-center gap-4 mt-6">
  <input
    type="text"
    placeholder="Coupon code"
    className="border border-gray-300 px-4 py-2 rounded w-60"
  />
  <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900">
    Apply Coupon
  </button>
</div>

{/* Clear Cart Button */}
<div className="mt-4">
 <div className="mt-4">
  <button
    onClick={() => dispatch({ type: "cart/clearCart" })}
    className="bg-black px-4 py-2 rounded hover:bg-gray-500 text-white hover:text-red-600 hover:underline text-sm"
  >
    Clear Cart
  </button>
</div>
</div>
        </div>

        {/* Cart Totals Section */}
        <div className="bg-gray-50 p-6 border rounded shadow-sm">
          <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between border-b pb-3">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-bold text-base pt-2">
              <span>Total</span>
              <span>₹{subtotal}</span>
            </div>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="w-full mt-6 bg-black text-white py-3 rounded font-medium hover:bg-gray-900"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
