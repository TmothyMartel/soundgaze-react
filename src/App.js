import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/homepage/Homepage.component';
import BookRoom from './components/book-room/BookRoom.component';
import Footer from './components/footer/Footer.component'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <BookRoom />
      <Footer />
    </div>
  );
}

export default App;
