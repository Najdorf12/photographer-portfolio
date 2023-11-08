import Navbar from "./components/Navbar";
import Cita from "./components/Cita";
import imgHome from "/img-home.png";
import imgHome2 from "/img-home4.png";
import About from "./components/About";
import Carousel from "./components/Carousel";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main className="home-wrapper">
        <header>
          <section className="profesion">
            <div className="line"></div>
            <h5>PROFESIONAL POTHOGRAPER</h5>
          </section>

          <section className="title">
            <h1>ALEXANDER DURAHM</h1>
          </section>

          <section className="info-container">
            <div className="line2"></div>
            <ul className="social-icons">
              <li>
                <i className="bx bxl-instagram-alt"></i>
              </li>
              <li>
                <i className="bx bxl-twitter"></i>
              </li>
              <li>
                <i className="bx bxl-github"></i>
              </li>
              <li>
                <i className="bx bxl-linkedin-square"></i>
              </li>
            </ul>

            <article className="text">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                iure fugiat perferendis sequi tempore illum! Lorem ipsum, dolor
                sit amet consectetur adipisicing elit.
              </p>
              <button>VIEW PORTFOLIO</button>
            </article>
          </section>
        </header>

        <div className="img-home">
          <img src={imgHome2} alt="img-Home" />
        </div>
      </main>

      <Cita />
      <About />
      <Carousel/>
    </>
  );
}

export default App;
