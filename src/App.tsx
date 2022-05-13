import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/Routes'
import './App.css'
import StickyFooter from './components/dashboard/StickyFooter'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <StickyFooter />
    </div>
  );
}

export default App;
