import React from 'react';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container p-4">
        <a className="navbar-brand fs-2" href="#">Travel <span className="script-font text-warning">Blog</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Popular posts</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;