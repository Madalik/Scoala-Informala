import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
     
      <Header/>
         <Navbar />
      <section className="py-5">
        <div className="container">
          <h2 className="fw-light">Page Content</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus ab nulla dolorum autem nisi officiis blanditiis
            voluptatem hic, assumenda aspernatur facere ipsam nemo ratione
            cumque magnam enim fugiat reprehenderit expedita.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
