import { useNavigate } from 'react-router-dom';

const TabunganSaya = () => {
  const navigate = useNavigate(); 

  const handleTopUp = () => {
    navigate('/dashboard/payment'); 
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-4xl flex flex-col sm:flex-row gap-6">
        {/* Bagian Kiri: Event */}
        <div className="flex-1 bg-blue-900 text-white rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">Birthday Event</h2>
          <img
            src="../src/assets/britday.png" 
            alt="Birthday Event"
            className="w-full rounded-lg object-cover"
          />
        </div>

        {/* Bagian Kanan: Informasi Tabungan */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Tabungan */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">Tabungan</h3>
            <div className="flex justify-between text-gray-700">
              <p className="font-medium">Rp200.000</p>
              <p className="text-green-600">Terkumpul</p>
            </div>
            <div className="flex justify-between text-gray-700">
              <p className="font-medium">Rp800.000</p>
              <p className="text-red-600">Sisa Target</p>
            </div>
          </div>

          {/* Progress */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">Progress</h3>
            <div className="flex justify-between text-gray-700">
              <p className="font-medium">Rp1.000.000</p>
              <p className="text-gray-500">Target</p>
            </div>
            <div className="flex justify-between text-gray-700">
              <p className="font-medium">20%</p>
              <p className="text-yellow-600">Persentase</p>
            </div>
          </div>

          {/* Komitmen */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">Commit</h3>
            <div className="flex items-center gap-2">
              <div className="w-1/3 h-4 bg-green-500 rounded"></div>
              <div className="w-1/3 h-4 bg-yellow-500 rounded"></div>
              <div className="w-1/3 h-4 bg-red-500 rounded"></div>
            </div>
            <div className="flex justify-between text-gray-700 mt-2">
              <p>Tabungan Terlewat</p>
              <p className="text-red-600">Rp0,00</p>
            </div>
          </div>

          {/* Tombol Top Up */}
          <button 
            onClick={handleTopUp} // Menambahkan event onClick untuk tombol
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Top Up Your Savings
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabunganSaya;
