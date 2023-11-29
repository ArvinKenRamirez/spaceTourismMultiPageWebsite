import Pages from './Pages/Pages';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
