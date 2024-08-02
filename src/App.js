import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Migrations from './components/Migrations/Migrations';
import Options from './components/Options/Options';
import Receipt from './components/Receipt/Receipt';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Routes, Route} from "react-router-dom";


library.add(fab, faBars )

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/migration" element={<Migrations />} />
          <Route path="/options" element={<Options />} />
          <Route path="/receipt" element={<Receipt />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
