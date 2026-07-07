import pfpImg from "../assets/DSC09290~2-pass.jpg";

export default function Hero() {
  return (
    <header className="hero-container">
      <img src={pfpImg} className="profile-img" alt="Avatar" />
      <div className="hero-info">
        <h1>Hi, I'm Jainoos</h1>
        {/* <p className="tagline">I mess with code, break stuff, and make it better</p> */}
        <a
          href="/Jainoos_Developer.pdf"
          download="Jainoos_Developer.pdf"
          target="_blank"
          rel="noreferrer"
          className="command-bar"
        >
          <span className="neural-nodes"></span>
          <code className="outlier-text">curl resume</code>
        </a>
      </div>
    </header>
  );
}
