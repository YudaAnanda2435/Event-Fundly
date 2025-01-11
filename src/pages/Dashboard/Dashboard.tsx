import { BellIcon, Settings } from "lucide-react";
import { Link, Outlet } from "react-router-dom";


const events = [
  { title: "Pernikahan", imageUrl: "https://via.placeholder.com/300x200" },
  { title: "Ulang Tahun", imageUrl: "https://via.placeholder.com/300x200" },
  { title: "Rumah Impian", imageUrl: "https://via.placeholder.com/300x200" },
  { title: "Reuni", imageUrl: "https://via.placeholder.com/300x200" },
];

const DashboardPage = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-[#FFFFFF] text-black p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          <span className="italic block">EVENT</span>
          <span className="block">FUNDLY</span>
        </h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="/dashboard" className="flex items-center space-x-2 py-2 hover:text-blue-400">
                <img src="/src/assets/dashboard-icon.png" alt="Dashboard Icon" className="w-6 h-6" />
                <span>Dashboard</span>
              </Link>
              <hr className="border-t border-gray-200 mt-2" />
            </li>
            <li>
              <Link to="/dashboard/riwayat" className="flex items-center space-x-2 py-2 hover:text-blue-400">
                <img src="/src/assets/time.png" alt="Riwayat Icon" className="w-6 h-6" />
                <span>Riwayat Tabungan</span>
              </Link>
              <hr className="border-t border-gray-200 mt-2" />
            </li>
            <li>
              <Link to="/dashboard/rencana" className="flex items-center space-x-2 py-2 hover:text-blue-400">
                <img src="/src/assets/rencana.png" alt="Rencana Icon" className="w-6 h-6" />
                <span>Rencana Baru</span>
              </Link>
              <hr className="border-t border-gray-200 mt-2" />
            </li>
            <li>
              <Link to="/dashboard/tabungan-saya" className="flex items-center space-x-2 py-2 hover:text-blue-400">
                <img src="/src/assets/target.png" alt="Target Icon" className="w-6 h-6" />
                <span>Tabungan Saya</span>
              </Link>
              <hr className="border-t border-gray-200 mt-2" />
            </li>
            <li>
              <Link to="/" className="flex items-center space-x-2 py-2 hover:text-blue-400">
                <img src="/src/assets/validasi.png" alt="Validasi Icon" className="w-6 h-6" />
                <span>Validasi</span>
              </Link>
              <hr className="border-t border-gray-200 mt-2" />
            </li>
          </ul>
        </nav>
        <div className="mt-auto">
          <Link to="/signout" className="flex items-center space-x-2 py-2 hover:text-red-400">
            <img src="/src/assets/keluar.png" alt="keluar Icon" className="w-6 h-6" />
            <span>Sign out</span>
          </Link>
          <hr className="border-t border-gray-200 mt-2" />
        </div>
      </div>


      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Search Bar */}
            <div className="flex items-center space-x-4">
              <input
                type="search"
                placeholder="Search"
                className="p-3 rounded-md border border-gray-300 w-64"
              />
            </div>

            {/* Dashboard, Notification Icon, and Settings Icon */}
            <div className="flex items-center space-x-4">
              <span className="font-semibold text-lg">Dashboard</span>
              <button className="p-2 bg-transparent text-gray-800">
                <BellIcon className="w-5 h-5" />
              </button>
              <button className="p-2 bg-transparent text-gray-800">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Sections */}
        <main className="p-6 space-y-6">
          {/* Events Section */}
          <section>
            <div className="bg-{#272847} p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">
                Berbagai Keuangan Acara Telah Di Atur Disini
              </h2>
              <p className="text-gray-500 mb-6">Pintar Dalam Mengatur Keuangan Anda</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {events.map((event) => (
                  <div key={event.title} className="bg-white p-4 rounded-lg shadow-lg text-center">
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
