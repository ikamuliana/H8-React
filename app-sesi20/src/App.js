import logo from './logo.svg';
// import './App.css';
import React from 'react';
import "bootstrap"; //import js
import "bootstrap/dist/css/bootstrap.min.css"; //import css

function Header() {
  return (
    // <header className="header">
    //   <h1>My First React App</h1>
    // </header>

    <>
      <nav className="py-2 bg-light border-buttom">
        <div className="container d-flex flex-wrap">
          <ul className="nev me-auto">
            <li className="nav-item">
              <a href="/" className="nav-link link-dark px-2 active" aria-current="page">Home</a>
            </li>
            <li className="nav-item"><a href="/" className="nav-link link-dark px-2">Features</a></li>
            <li className="nav-item"><a href="/" className="nav-link link-dark px-2">FAQs</a></li>
            <li className="nav-item"><a href="/" className="nav-link link-dark px-2">About</a></li>
          </ul>
          <ul className="nav">
            <li className="nav-item"><a href="/" className="nav-link link-dark px-2">Login</a></li>
            <li className="nav-item"><a href="/" className="nav-link link-dark px-2">Sign up</a></li>
          </ul>
        </div>
      </nav>

      <header className="py-3 mb-4 border-buttom">
        <div className="container d-flex flex-wrap justify-content-center">
        <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
          <span className="fs-4">My First React App</span>
        </a>
        <form className="col-12 col-lg-auto mb-3 mb-lg-0">
          <input type="search" className="form-control" placeholder="Search ..." aria-label="Search" />
        </form>
        </div>
      </header>
    </>
  )
}

function Content() {
  return (
    // <div className="content">
    //   <p>
    //    Silahkan isikan dengan paragraf yang kamu kehendaki
    //   </p>
    // </div>

    <>
    <div className="p-5 mb-4 bg-light rounded-3 border">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">First Paragraph in Jumbotron</h1>
        <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
        <button className="btn btn-primary btn-lg" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Example button</button>
      </div>
    </div>

    {/* Modal */}
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            This is my first modal box
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

function Footer() {
  return (
    // <div className="footer">
    //   <p>&copy; My Self - 2022</p>
    // </div>

    <footer className="text-muted py-5 border-top">
      <div className="container">
        <p className="mb-1">This is my first react app in bootstrap</p>
        <p className="mb-0">New to react? <a href="https://reactjs.org/">Visit the homepage</a></p>
      </div>
    </footer>
  )
}

function App() {
  return (
    // <div className="App">
    //   <Header />
    //   <hr />
    //   <Content />
    //   <hr />
    //   <Footer />
    // </div>

    <>
      <Header />
      <div className="container">
        <Content />
      </div>
      <Footer />
    </>
  );
}


export default App;

// Hooks - useState
// function Counter({initialCount}) {
//   const [count, setCount] = useState(initialCount);
//   return (
//     <>
//       Count: {count}
//       <button onClick={() => setCount(initialCount)}>Reset</button>
//       <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
//       <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
//     </>
//   )
// }