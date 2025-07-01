import { useEffect, useState } from "react";
import { db, storage } from "@/firebase/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

export default function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    id: null,
    name: "",
    description: "",
    stock: 0,
    variants: "",
    files: [],
  });

  const fetchProducts = async () => {
    const snapshot = await getDocs(collection(db, "products"));
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const lowStock = products.filter((p) => p.stock < 5);
    if (lowStock.length > 0) {
      console.warn("Low stock:", lowStock.map((p) => p.name).join(", "));
    }
  }, [products]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? Array.from(files) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const uploadedUrls = await Promise.all(
      form.files.map(async (file) => {
        const folder = file.type.startsWith("video") ? "videos" : "images";
        const fileRef = ref(storage, `product_${folder}/${uuidv4()}_${file.name}`);
        await uploadBytes(fileRef, file);
        return await getDownloadURL(fileRef);
      })
    );

    const data = {
      name: form.name,
      description: form.description,
      stock: parseInt(form.stock),
      variants: form.variants,
      mediaUrls: uploadedUrls,
      updatedAt: new Date(),
    };

    if (form.id) {
      const docRef = doc(db, "products", form.id);
      await updateDoc(docRef, data);
    } else {
      await addDoc(collection(db, "products"), {
        ...data,
        createdAt: new Date(),
      });
    }

    setForm({
      id: null,
      name: "",
      description: "",
      stock: 0,
      variants: "",
      files: [],
    });
    fetchProducts();
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "products", id));
    fetchProducts();
  };

  const handleEdit = (product) => {
    setForm({ ...product, files: [] });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Manage Products</h2>

      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow space-y-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          type="text"
          placeholder="Product Name"
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="variants"
          value={form.variants}
          onChange={handleChange}
          type="text"
          placeholder="Variants (e.g. Black, Heated)"
          className="w-full border p-2 rounded"
        />
        <input
          name="stock"
          value={form.stock}
          onChange={handleChange}
          type="number"
          placeholder="Stock Quantity"
          className="w-full border p-2 rounded"
          min="0"
          required
        />
        <input
          name="files"
          onChange={handleChange}
          type="file"
          multiple
          accept="image/*,video/*"
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {form.id ? "Update Product" : "Add Product"}
        </button>
      </form>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Current Listings</h3>
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold text-lg">{product.name}</p>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="text-sm">Variants: {product.variants}</p>
                <p
                  className={`text-sm ${
                    product.stock < 5 ? "text-red-600 font-bold" : ""
                  }`}
                >
                  Stock: {product.stock} {product.stock < 5 ? "(Low Stock!)" : ""}
                </p>
                {product.mediaUrls?.length > 0 && (
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {product.mediaUrls.map((url, i) =>
                      url.includes(".mp4") || url.includes("video")
                        ? (
                          <video
                            key={i}
                            src={url}
                            controls
                            className="w-32 h-20 object-cover rounded border"
                          />
                        ) : (
                          <img
                            key={i}
                            src={url}
                            alt="media"
                            className="w-20 h-20 object-cover rounded border"
                          />
                        )
                    )}
                  </div>
                )}
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(product)}
                  className="text-blue-600 font-semibold"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="text-red-600 font-semibold"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
