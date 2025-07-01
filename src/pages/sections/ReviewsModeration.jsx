import { useEffect, useState } from "react";
import { db } from "@/firebase/firebaseConfig";
import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";

export default function ReviewsModeration() {
  const [reviews, setReviews] = useState([]);
  const [filter, setFilter] = useState("all");

  const fetchReviews = async () => {
    const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setReviews(list);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const filteredReviews =
    filter === "all"
      ? reviews
      : reviews.filter((r) => r.status === filter);

  const updateReviewStatus = async (id, status) => {
    await updateDoc(doc(db, "reviews", id), { status });
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status } : r))
    );
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "reviews", id));
    setReviews((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">📝 Reviews & Ratings</h2>

      {/* Filter */}
      <div className="flex gap-4">
        {["all", "pending", "approved", "spam"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-3 py-1 rounded text-sm ${
              filter === status
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Review List */}
      <div className="space-y-4">
        {filteredReviews.length === 0 ? (
          <p className="text-gray-500 text-sm">No reviews to display.</p>
        ) : (
          filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-4 rounded shadow border space-y-2"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold">
                    {review.user} on <span className="text-blue-600">{review.product}</span>
                  </p>
                  <p className="text-sm text-gray-700">Rating: ⭐ {review.rating}</p>
                  <p className="text-sm mt-1">{review.comment}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {review.createdAt?.toDate().toLocaleString()}
                  </p>
                  <p className="text-xs mt-1 text-gray-500 capitalize">
                    Status: {review.status}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  {review.status !== "approved" && (
                    <button
                      onClick={() => updateReviewStatus(review.id, "approved")}
                      className="text-green-600 text-sm hover:underline"
                    >
                      Approve
                    </button>
                  )}
                  {review.status !== "spam" && (
                    <button
                      onClick={() => updateReviewStatus(review.id, "spam")}
                      className="text-yellow-600 text-sm hover:underline"
                    >
                      Mark as Spam
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(review.id)}
                    className="text-red-600 text-sm hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
