import logo from "/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="nav-container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className="nav-btns">
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
};


export default Navbar; 