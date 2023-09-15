import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopNavbar from './Components/TopNavbar/TopNavbar';
import Pages from './Pages/Pages';

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Pages />
    </div>
  );
}

export default App;
