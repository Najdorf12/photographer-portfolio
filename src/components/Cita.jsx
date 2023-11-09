import firma from "/firma.png"

const Cita = () => {
  return (
    <>
      <article className="cita-wrapper">
        <h5>
        “The best images are the ones that retain their 
        strength and impact over the years, regardless of the number of times they
       are viewed.”
       </h5>
       <div className="line3"></div>
       <img src={firma} alt="" />
      </article>
    </>
  );
};
export default Cita;
