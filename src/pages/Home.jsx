import React from 'react';
import biruh from "../assets/biruh.png";
function Home() {
  return (
    <section
    className="hero"
      style={{ backgroundImage: `url(${biruh})` }}
    >

      <button>
        Shop Now
      </button>
    </section>
  );
}

export default Home;