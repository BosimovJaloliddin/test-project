import Faq from "./components/FAQ";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "30px",
          marginTop: "42px",
        }}
      >
        <div style={{ width: "25%" }}>
          <Filter />
        </div>
        <div style={{ width: "75%" }} className="comments">
          <Faq />
        </div>
      </div>
      <div className="footer">Footer</div>
    </>
  );
}

export default App;
