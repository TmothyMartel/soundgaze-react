import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main.component';
import Footer from './components/footer/Footer.component';



function App() {
  return (
    <BrowserRouter>
          <div className="App">
            <Navbar />
            <Main />
           <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
