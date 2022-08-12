import Navbar from './components/Navbar';


function App() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <Navbar />
        </div>
        <div className="col-span-6 ">

        </div>
        <div className="col-span-3 ">

        </div>
      </div>
    </div>
  );
}

export default App;
