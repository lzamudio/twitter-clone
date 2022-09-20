import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3" >
          <Navbar />
        </div>
        <div className="col-span-6 ">

        </div>
        <div className="col-span-3 ">
          <Card title={'Qué esta pasando'}>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </Card>
          <Card title={'A quién seguir'} >
            <ul>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
