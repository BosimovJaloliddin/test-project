import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">Header</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <div>Filter</div>
        <div className="comments">Comment</div>
      </div>
      <div className="footer">Footer</div>
    </>
  );
}

export default App;
