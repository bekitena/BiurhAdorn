import { Link } from "react-router-dom";
import biruh from "../assets/biruh.png";
import "./Home.css";

function Home() {
  return (
    
    <section
      className="relative flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${biruh})` }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-black/35">
        <div className="mx-5 max-w-[800px] text-center [animation:fadeInUp_1.2s_ease_forwards]">
          <h1
            className="mb-5 text-[3rem] font-bold leading-[1.1] text-white sm:text-[2.5rem] md:text-[2rem] max-[480px]:text-[1.6rem]"
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            Where <span className="relative text-[#c9a96e]">Luxury</span> Meets
            <br />
            Craftsmanship
          </h1>
          <p
            className="mb-10 text-[1.1rem] font-light leading-[1.6] text-white/85 sm:text-[1rem] md:text-[0.95rem] max-[480px]:text-[0.85rem]"
            style={{
              fontFamily: "'Inter', sans-serif",
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            Discover our exclusive collection of handcrafted fine jewelry,
            <br />
            designed for those who appreciate the extraordinary.
          </p>
          <Link
            to="/products"
            className="group relative inline-flex items-center gap-3 overflow-hidden border-none bg-[#c9a96e] px-12 py-4 font-['Inter',sans-serif] text-[0.95rem] font-medium uppercase tracking-[2px] text-[#0a0a0a] transition-all duration-400 hover:shadow-[0_0_30px_rgba(201,169,110,0.3)] sm:px-9 sm:py-3.5 sm:text-[0.85rem] md:px-8 md:py-3 md:text-[0.8rem] max-[480px]:px-6 max-[480px]:py-2.5 max-[480px]:text-[0.75rem]"
          >
            <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-400 group-hover:scale-x-100" />
            <span className="relative z-10 transition-all duration-400 group-hover:text-[#c9a96e]">
              Explore Collection
            </span>
            <span className="relative z-10 inline-block transition-transform duration-400 group-hover:translate-x-1.5">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
