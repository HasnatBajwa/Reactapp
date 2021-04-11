
import Header from "./components/header/Header";
import Section from "./components/section/section";
import Footer from "./components/footer/footer";
var test = "some Data";
function App() {
  return (
    <div>
      <Header/>
      <Section/>
      <Footer/>
      <p>{test}</p>
    </div>
  );
}

export default App;
