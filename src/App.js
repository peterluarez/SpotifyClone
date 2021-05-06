import './css/App.css'
import Navbar from './components/NavbarComp';
import LandingContent from './components/LandingContent';
import Plan from './components/Plan';
import Download from './components/Download';

function App() {
  return (
    <>
      <Navbar />
      <LandingContent />
      <Plan />
      <Download />
    </>
  );
}

export default App;