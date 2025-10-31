import NavLinks from "../NavLinks/NavLinks";

const Navbar = () => {
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
  ];
  return (
    <nav>
      {/* logo section */}
      <div>
        <img src="https://i.ibb.co.com/RGkMHjt2/velora.png" alt="velora" />
      </div>
      {/* nav links section */}
      <div>
        <ul>
          {routes.map((route) => (
            <NavLinks key={route.id} route={route}></NavLinks>
          ))}
        </ul>
      </div>
      {/* search bar */}
      <div>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
