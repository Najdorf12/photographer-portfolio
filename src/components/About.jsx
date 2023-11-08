import imgHome2 from "/img-home2.png";

const About = () => {
  return (
    <div className="about-wrapper">
      <article>
        <section className="profesion-about">
          <div className="line"></div>
          <h5>SOMETHING ABOUT ME</h5>
        </section>

        <section className="title-about">
          <h1>I'm a Professional Photographer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            voluptatum.
          </p>
        </section>

        <section className="info-container-about">
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

          <article className="text-about">
            AWARDS
            <ul>
              <li><i className='bx bxs-star'></i>Lorem ipsum dolor sit amet.</li>
              <li><i className='bx bxs-star'></i>Lorem ipsum dolor sit amet.</li>
              <li><i className='bx bxs-star'></i>Lorem ipsum dolor sit amet.</li>
            </ul>
          </article>
        </section>
      </article>

      <div className="img-about">
        <img src={imgHome2} alt="img-Home" />
      </div>
    
    </div>
  );
};

export default About;
