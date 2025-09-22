import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Home />
      </main>
    </div>
  );
}

export default App;
