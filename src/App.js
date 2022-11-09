import "./App.css";
import NavBar from "./components/NavBar";
import ItemsListContainer from "./components/ItemsListContainer";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemsListContainer text="Sofá" />
      <ItemsListContainer text="Mesa"/>
      <ItemsListContainer text="Lámpara"/>
      <ItemsListContainer text="Espejo"/>
      <Footer/>
    </>
  );
};
export default App;
