import React from "react";

const Navbar = () => {
  return (
    <header className="header">
      <div className="container">

        <div className="left-content">

          <div className="logo">
              <img src="./logo.png" alt="Website Logo" />
          </div>

          <nav className="navbar">
            <ul>
              <li>
                <a href="#courses">
                  Courses
                  <img src="./arrow_down.svg" alt="Arrow down Logo" />
                </a>
              </li>

              <li>
                <a href="#programs">
                  Programs
                    <img src="./arrow_down.svg" alt="Arrow down Logo"  />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="right-content">
          <div className="search-icon">
            <img src="./search.svg" alt="Search Icon" />
          </div>

          <p className="login-text">Log in</p>
           <button className="btn">
               Join Now
           </button>
        </div>

      </div>
    
    </header>
  );
};

export default Navbar;
