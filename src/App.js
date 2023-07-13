// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.scss";
// import { Home, About, Career } from "./components/Project1/Project1";

// function App() {
//   return ( <Task data=""/>);
// }
//   <BrowserRouter>
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/career">Career</Link>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/" component={Home} exact/>
//         <Route path="/about" component={About} />
//         <Route path="/career" component={Career} />
//       </Routes>
//     </div>
//   </BrowserRouter>
// );

// export default App;

import React, { Component } from "react";
import NavBar from "./components/Project/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Project/Home/Home";
import About from "./components/Project/About/About";
import Gallery from "./components/Project/Gallery/Gallery";
import Contact from "./components/Project/Contact/Contact";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="layout">
          <NavBar />
          <div className="content-section">
            <Routes>
              <Route path="/" Component={Home} exact />
              <Route path="/about" Component={About} />
              <Route path="/gallery" Component={Gallery} />
              <Route path="/contact" Component={Contact} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
