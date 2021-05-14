import "./App.css";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
import RouterURL from "./routerURL/RouterURL";
function App() {
  return (
    <div className="App">
      <Menu />
      <RouterURL />
      <Footer />
    </div>
  );
}

export default App;
