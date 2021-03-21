import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/homepage/Homepage.component';
import BookRoom from './components/book-room/BookRoom.component';
import Contact from './components/contact/Contact.component';
import Footer from './components/footer/Footer.component';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <BookRoom />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
