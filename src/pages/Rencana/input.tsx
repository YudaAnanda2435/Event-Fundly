import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Input: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<{
    event_name: string;
    saving_amount: string;
    currency: string;
    start_date: string;
    end_date: string;
    image: File | null;
  }>({
    event_name: "",
    saving_amount: "",
    currency: "IDR",
    start_date: "",
    end_date: "",
    image: null,
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      if (selectedFile.type.startsWith("image/")) {
        setFormData((prev) => ({ ...prev, image: selectedFile }));
      } else {
        alert("Please select a valid image file.");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");

    const token = localStorage.getItem("token");
    if (!token) {
      alert("You need to log in first.");
      navigate("/login");
      setLoading(false);
      return;
    }

    const user_id = localStorage.getItem("user_id");
    if (!user_id) {
      alert("User ID not found. Please log in again.");
      navigate("/login");
      setLoading(false);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("user_id", user_id);
    formDataToSend.append("event_name", formData.event_name);
    formDataToSend.append("saving_amount", formData.saving_amount);
    formDataToSend.append("currency", formData.currency);
    formDataToSend.append("start_date", formData.start_date);
    formDataToSend.append("end_date", formData.end_date);
    if (formData.image) {
      formDataToSend.append("image", formData.image);
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/rencana-tabungan",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formDataToSend,
        }
      );

      if (response.ok) {
        setSuccessMessage("Rencana tabungan berhasil disimpan!");
        // Ubah rute ke /dashboard/riwayat
        setTimeout(() => navigate("/dashboard/riwayat"), 1500);
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (err) {
      console.error("Terjadi kesalahan saat menyimpan data:", err);
      alert("Terjadi kesalahan saat menyimpan data. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-gray-800">Rencana Tabungan Baru</h1>

        {/* Input Gambar */}
        <div className="flex items-center space-x-2">
          <label htmlFor="image" className="cursor-pointer">
            <div className="w-16 h-16 border rounded flex items-center justify-center text-gray-500">
              +
            </div>
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
          {formData.image ? (
            <p className="text-sm text-gray-600">{formData.image.name}</p>
          ) : (
            <p className="text-sm text-gray-500">No file selected</p>
          )}
        </div>

        {/* Input Nama Event */}
        <input
          type="text"
          name="event_name"
          placeholder="Nama Tabungan Acara"
          value={formData.event_name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
        />

        {/* Input Jumlah Tabungan */}
        <input
          type="number"
          name="saving_amount"
          placeholder="Target Tabungan Acara"
          value={formData.saving_amount}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
        />

        {/* Pilihan Mata Uang */}
        <select
          name="currency"
          value={formData.currency}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
        >
          <option value="IDR">Indonesia Rupiah (Rp)</option>
          <option value="USD">US Dollar ($)</option>
          <option value="EUR">Euro (€)</option>
        </select>

        {/* Input Tanggal Mulai */}
        <input
          type="date"
          name="start_date"
          value={formData.start_date}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
        />

        {/* Input Tanggal Akhir */}
        <input
          type="date"
          name="end_date"
          value={formData.end_date}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
        />

        {/* Tombol Submit */}
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Plan"}
        </button>

        {/* Success Message */}
        {successMessage && (
          <div
            className="mt-4 text-green-600 text-center p-2 rounded bg-green-100 animate-fadeIn"
            style={{ animation: "fadeIn 1s ease-out" }}
          >
            {successMessage}
          </div>
        )}

        {/* Link Ke Halaman Lain */}
        <p className="text-center text-sm text-gray-500">
          <a href="/savings-calculation" className="underline">
            Continue to savings calculation?
          </a>
        </p>
      </form>
    </div>
  );
};

export default Input;
