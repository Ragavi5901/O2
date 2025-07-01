import { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function CheckoutPage() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    apt: "",
    city: "",
    postalCode: "",
  });

  const [errors, setErrors] = useState({});
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [applied, setApplied] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.firstName) newErrors.firstName = "First name is required";
    if (!form.lastName) newErrors.lastName = "Last name is required";
    if (!form.address) newErrors.address = "Address is required";
    if (!form.city) newErrors.city = "City is required";
    if (!form.postalCode) newErrors.postalCode = "Postal code is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const applyPromo = () => {
    if (promoCode === "SAVE10") {
      setDiscount(10);
      setApplied(true);
    } else {
      alert("Invalid promo code");
    }
  };

  const getNumericPrice = (priceString) =>
    parseInt(priceString.replace(/[^0-9]/g, ""), 10);

  const calculateTotal = () => {
    const subtotal = cart.reduce(
      (sum, item) => sum + getNumericPrice(item.price) * item.quantity,
      0
    );
    const discounted = subtotal * (1 - discount / 100);
    return { subtotal, total: discounted.toFixed(2) };
  };

  const { subtotal, total } = calculateTotal();

  const handlePlaceOrder = async () => {
  if (!user) {
    alert("Please sign in to place an order.");
    navigate("/login"); // Or show a modal instead if you prefer
    return;
  }

  if (!validateForm()) return;
  if (cart.length === 0) return alert("Your cart is empty.");

  const formattedItems = cart.map((item) => ({
    id: item.id,
    title: item.title,
    price: getNumericPrice(item.price),
    quantity: item.quantity,
    image: item.image,
    type: item.type,
  }));

  try {
    await addDoc(collection(db, "orders"), {
      ...form,
      userEmail: user.email,
      promoCode: promoCode || null,
      discount,
      total: parseFloat(total),
      items: formattedItems,
      status: "Pending",
      createdAt: Timestamp.now(),
    });

    dispatch(clearCart());
    alert("Order placed successfully!");
    navigate("/");
  } catch (err) {
    console.error("Order Error:", err);
    alert("Failed to place order");
  }
};


  return (
    <div className="max-w-7xl mx-auto p-6 md:flex md:gap-10">
      {/* Shipping Address */}
      <div className="md:w-1/2 bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Shipping Address</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input name="firstName" placeholder="First Name" onChange={handleChange} className="border rounded p-2 w-full" />
            {errors.firstName && <p className="text-red-600 text-sm">{errors.firstName}</p>}
          </div>
          <div>
            <input name="lastName" placeholder="Last Name" onChange={handleChange} className="border rounded p-2 w-full" />
            {errors.lastName && <p className="text-red-600 text-sm">{errors.lastName}</p>}
          </div>
        </div>
        <div className="mt-4">
          <input name="address" placeholder="Street Address" onChange={handleChange} className="w-full border rounded p-2" />
          {errors.address && <p className="text-red-600 text-sm">{errors.address}</p>}
        </div>
        <div className="mt-4">
          <input name="apt" placeholder="Apt / Suite / Unit (Optional)" onChange={handleChange} className="w-full border rounded p-2" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <input name="city" placeholder="City" onChange={handleChange} className="border rounded p-2 w-full" />
            {errors.city && <p className="text-red-600 text-sm">{errors.city}</p>}
          </div>
          <div>
            <input name="postalCode" placeholder="Postal Code" onChange={handleChange} className="border rounded p-2 w-full" />
            {errors.postalCode && <p className="text-red-600 text-sm">{errors.postalCode}</p>}
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="md:w-1/2 bg-gray-50 p-6 rounded shadow mt-10 md:mt-0">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Order Summary</h2>
        <div className="text-sm mb-4">
          <div className="flex justify-between"><span>Subtotal</span><span>₹{subtotal.toLocaleString()}</span></div>
          <div className="flex justify-between"><span>Discount</span><span>{discount > 0 ? `-${discount}%` : "-"}</span></div>
          <div className="flex justify-between font-bold mt-2"><span>Total</span><span>₹{parseFloat(total).toLocaleString()}</span></div>
        </div>

        <div className="mt-6 mb-4">
          <label className="text-sm block mb-1">Apply a Promo Code</label>
          <div className="flex gap-2">
            <input value={promoCode} onChange={(e) => setPromoCode(e.target.value)} placeholder="Promo Code" className="border p-2 rounded w-full" />
            <button onClick={applyPromo} className="bg-black text-white px-4 py-2 rounded">APPLY</button>
          </div>
          {applied && <p className="text-green-600 text-sm mt-1">Promo applied!</p>}
        </div>

        <div className="mt-6 border-t pt-4 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-cover border" />
              <div className="text-sm">
                <p className="font-medium">{item.title}</p>
                <p className="text-gray-500 text-xs">{item.type}</p>
                <p className="text-red-600">₹{getNumericPrice(item.price).toLocaleString()} x {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        <button onClick={handlePlaceOrder} className="w-full mt-6 bg-orange-600 hover:bg-orange-700 text-white py-3 font-semibold rounded">
          Place Order
        </button>
      </div>
    </div>
  );
}
