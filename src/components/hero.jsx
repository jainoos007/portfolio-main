import pfpImg from "../assets/pfp.png";

export default function Hero() {
  return (
    <header className="hero-container">
      <img src={pfpImg} className="profile-img" alt="Avatar" />
      <div className="hero-info">
        <h1>Hi, I'm Jainoos</h1>
        {/* <p className="tagline">I mess with code, break stuff, and make it better</p> */}
        <a
          href="resume_jainoos.pdf"
          target="_blank"
          rel="noreferrer"
          className="command-bar"
        >
          <span className="neural-nodes"></span>
          <code className="outlier-text">Download Resume</code>
        </a>
      </div>
    </header>
  );
}
