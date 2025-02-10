import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Landing = () => {
  return (
    <>
   
      {/* Main Landing Section */}
      <div>
        <section
          className="h-screen bg-cover bg-center relative"
          style={{ backgroundImage: 'url("https://via.placeholder.com/1500")' }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex justify-center items-center h-full">
            <div className="text-center text-white px-6">
              <h1 className="text-4xl font-bold mb-4">Welcome to TeachSpace</h1>
              <p className="text-xl mb-6">
              Effortlessly Track & Share Student Progress
              </p>
              <a href="/login">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-all">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>

     
    </>
  );
};

export default Landing;
