import globe from "/images/globe.svg";

function Header() {
  return (
    <div className="header">
      <img src={globe} alt="logo" />
      <h1>My Travel Journal</h1>
    </div>
  );
}

export default Header;
