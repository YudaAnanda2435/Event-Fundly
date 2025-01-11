import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Menyimpan ID section aktif
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Membuat observer untuk mendeteksi elemen yang muncul di layar
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Menetapkan ID yang terlihat sebagai aktif
        }
      });
    });

    // Daftar ID elemen yang ingin di-observe
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    // Cleanup observer saat komponen unmount
    return () => observer.disconnect();
  }, []);

  // Fungsi untuk memeriksa apakah section aktif
  const isActive = (sectionId) =>
    activeSection === sectionId ? "text-blue-500" : "";

  return (
    <div className="bg-black  text-white z-50 fixed top-0 right-0 left-0 w-full">
      <header className="container mx-auto px-6 md:px-20 py-4">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold text-center font-fontJakarta">
            <a href="#">
              {" "}
              <span className="italic">
                E<span className="text-blue-500 not-italic">V</span>ENT
              </span>
              <br />
              <span className="text-lg tracking-tighter">FUNDLY</span>
            </a>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a
              href="#hero"
              className={`text-sm font-fontJakarta hover:underline hover:text-Tertiary transition-all duration-300 font-semibold ${isActive(
                "hero"
              )}`}
            >
              Home
            </a>
            <a
              href="#feature"
              className={`text-sm hover:underline hover:text-Tertiary transition-all duration-300 font-fontJakarta font-semibold ${isActive(
                "feature"
              )}`}
            >
              Fitur Utama
            </a>
            <a
              href="#tentang-kami"
              className={`text-sm hover:underline hover:text-Tertiary transition-all duration-300 font-fontJakarta font-semibold ${isActive(
                "tentang-kami"
              )}`}
            >
              Tentang Kami
            </a>
            <a
              href="#faq"
              className={`text-sm hover:text-Tertiary transition-all duration-300 font-fontJakarta font-semibold hover:underline ${isActive(
                "faq"
              )}`}
            >
              Bantuan
            </a>
          </nav>
          <div className="hidden md:flex space-x-6">
            <Link to="/signin">
              <button className="font-fontJakarta bg-transparent border-transparent rounded-l-lg hover:text-white border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className="text-blue-700 font-fontJakarta hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                Sign Up
              </button>
            </Link>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#hero"
                className={`hover:text-Tertiary transition-all duration-300 ${isActive(
                  "hero"
                )}`}
              >
                Home
              </a>
              <a
                href="#fitur-utama"
                className={`hover:text-Tertiary transition-all duration-300 ${isActive(
                  "feature"
                )}`}
              >
                Fitur Utama
              </a>
              <a
                href="#tentang-kami"
                className={`hover:text-Tertiary transition-all duration-300 ${isActive(
                  "tentang-kami"
                )}`}
              >
                Tentang Kami
              </a>
              <a
                href="#bantuan"
                className={`hover:text-Tertiary transition-all duration-300 ${isActive(
                  "faq"
                )}`}
              >
                Bantuan
              </a>
            </nav>
            <div className="mt-4 space-y-2 flex flex-col">
              <Link to="/signin">
                <button className="text-start">Sign In</button>
              </Link>
              <Link to="/signup">
                <button className="mt-2 text-start">Sign Up</button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
