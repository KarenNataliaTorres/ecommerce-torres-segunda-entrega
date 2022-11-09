import CartWidget from "./CartWidget";
const NavBar = () => {
  return (
    <>
      <nav  className="navbar navbar-expand-lg bg-dark ">
        <div className="container-fluid ">
          <a id="logo" className="navbar-brand " href="#">
           <svg id="iconMueble" xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
           </svg>
            DecoMuebles
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav w-100">

              <a className="nav-link " href="#">
                Sofás
              </a>
              <a className="nav-link" href="#">
                Mesas
              </a>
              <a className="nav-link" href="#">
                Lámparas
              </a>
              <a className="nav-link" href="#">
                Espejos
              </a>
              
            </div>
            <CartWidget />
            
          </div>
        

          </div>
          
      </nav>
    </>
  );
};

export default NavBar;
