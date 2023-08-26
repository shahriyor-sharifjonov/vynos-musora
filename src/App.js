import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Intro from "./components/Intro/Intro";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Intro />
        <Info />
      </main>
      <Footer />
    </div>
  );
}

export default App;
