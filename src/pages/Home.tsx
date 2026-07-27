import biruh from "../assets/biruh.png";
import "./Home.css";

function Home(): JSX.Element {
  return (
    <section className="hero" style={{ backgroundImage: `url(${biruh})` }}>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">
            Where <span className="highlight">Luxury</span> Meets
            <br />
            Craftsmanship
          </h1>
          <p className="hero-description">
            Discover our exclusive collection of handcrafted fine jewelry,
            <br />
            designed for those who appreciate the extraordinary.
          </p>
          <button className="hero-btn">
            Explore Collection
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
