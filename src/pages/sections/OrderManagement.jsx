import { useEffect, useState } from "react";
import { db } from "@/firebase/firebaseConfig";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

export default function OrderManagement() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const snapshot = await getDocs(collection(db, "orders"));
      const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setOrders(list);
    };

    fetchOrders();
  }, []);

 const updateStatus = async (orderId, newStatus) => {
  try {
    const orderRef = doc(db, "orders", orderId);
    await updateDoc(orderRef, { status: newStatus });

    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  } catch (err) {
    console.error("Error updating status:", err);
    alert("Failed to update order status.");
  }
};

  const handlePrint = (order) => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>Invoice</title>
          <style>
            body { font-family: Arial; padding: 20px; }
            .invoice { border: 1px solid #ddd; padding: 20px; max-width: 600px; margin: auto; }
            h2 { margin-top: 0; }
            p { margin: 8px 0; }
          </style>
        </head>
        <body>
          <div class="invoice">
            <h2>Invoice</h2>
            <p><strong>Order ID:</strong> ${order.id}</p>
            <p><strong>Customer:</strong> ${order.firstName}</p>
            <p><strong>City:</strong> ${order.city}</p>
            <p><strong>Total:</strong> ₹${order.total?.toLocaleString()}</p>
            <p><strong>Status:</strong> ${order.status}</p>
            <p><strong>Date:</strong> ${order.createdAt
              ?.toDate()
              .toLocaleDateString()}</p>
          </div>
          <script>window.print();</script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  const statusBadge = (status) => {
    const base = "px-2 py-1 rounded text-xs font-semibold";
    switch (status?.toLowerCase()) {
      case "processing":
        return (
          <span className={`${base} bg-yellow-100 text-yellow-800`}>
            Processing
          </span>
        );
      case "shipped":
        return (
          <span className={`${base} bg-blue-100 text-blue-800`}>Shipped</span>
        );
      case "delivered":
        return (
          <span className={`${base} bg-green-100 text-green-800`}>
            Delivered
          </span>
        );
      default:
        return (
          <span className={`${base} bg-gray-100 text-gray-800`}>Pending</span>
        );
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">📦 Order Management</h2>
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr className="border-b">
              <th className="p-3">Date</th>
              <th className="p-3">Customer</th>
              <th className="p-3">City</th>
              <th className="p-3">Total</th>
              <th className="p-3">Status</th>
              <th className="p-3">Update</th>
              <th className="p-3">Invoice</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="p-3">
                  {order.createdAt?.toDate().toLocaleDateString()}
                </td>
                <td className="p-3">{order.firstName}</td>
                <td className="p-3">{order.city}</td>
                <td className="p-3 font-medium text-gray-900">
                  ₹{order.total?.toLocaleString()}
                </td>
                <td className="p-3">{statusBadge(order.status)}</td>
                <td className="p-3">
                  <select
                    value={order.status}
                    onChange={(e) => updateStatus(order.id, e.target.value)}
                    className="bg-white border border-gray-300 rounded px-2 py-1 text-sm shadow-sm focus:outline-none focus:ring focus:border-blue-400"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>

                <td className="p-3">
                  <button
                    onClick={() => handlePrint(order)}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Print
                  </button>
                </td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
