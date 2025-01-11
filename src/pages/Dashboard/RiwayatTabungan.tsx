import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define the type for the data items
type TabunganItem = {
  id: number;
  event_name: string;
  image_path: string;
  start_date: string;
  saving_amount: number;
};

const RiwayatTabungan = () => {
  const [data, setData] = useState<TabunganItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch data from API
    axios
      .get('http://localhost:5000/api/rencana-tabungan')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const filteredData = data.filter((item) =>
    item.event_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <label htmlFor="filter" className="text-sm font-medium">Tampilkan</label>
          <select id="filter" className="border border-gray-300 rounded px-2 py-1 text-sm">
            <option value="7hr">7 Hr</option>
            <option value="30hr">30 Hr</option>
            <option value="all">Semua</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded px-3 py-2 text-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="w-full bg-white border border-gray-300">
        <thead className="bg-gray-200 text-left">
          <tr>
            <th className="px-4 py-2">Nama Acara</th>
            <th className="px-4 py-2">Tanggal Menabung</th>
            <th className="px-4 py-2">Jumlah Menabung</th>
            <th className="px-4 py-2">Jumlah Tabungan</th>
            <th className="px-4 py-2">Keterangan</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="px-4 py-2 flex items-center space-x-2">
                <img
                  src={`http://localhost:5000/${item.image_path}`}
                  alt={item.event_name}
                  className="w-10 h-10 object-cover rounded"
                />
                <span>{item.event_name}</span>
              </td>
              <td className="px-4 py-2">{new Date(item.start_date).toLocaleDateString()}</td>
              <td className="px-4 py-2">Rp {parseInt(item.saving_amount.toString()).toLocaleString()}</td>
              <td className="px-4 py-2">Rp {parseInt(item.saving_amount.toString()).toLocaleString()}</td>
              <td className="px-4 py-2">Lunas</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Cetak
        </button>
      </div>
    </div>
  );
};

export default RiwayatTabungan;
