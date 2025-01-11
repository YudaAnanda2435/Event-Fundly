import { useNavigate } from 'react-router-dom';

const RencanaBaru = () => {
  const navigate = useNavigate();

  const handlePlanSavingsClick = () => {
    // Navigate to the correct route
    navigate('/dashboard/input');
  };

  return (
    <div className="flex items-center justify-center min-h-screen pt-2">
      <div className="bg-white shadow-lg rounded-lg p-8 flex items-center space-x-6">
        <div className="w-1/2">
          <img
            src="../src/assets/tabungan.png"
            alt="Saving Illustration"
            className="w-full h-auto"
          />
        </div>
        <div className="w-1/2 text-left">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Wow Cool, Looks Like You Are Already Saving For An Event, Keep It Up!!!
          </h2>
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            onClick={handlePlanSavingsClick}
          >
            Plan Savings
          </button>
        </div>
      </div>
    </div>
  );
};

export default RencanaBaru;
