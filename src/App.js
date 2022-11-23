import { BrowserRouter, Link } from 'react-router-dom';

import './styles/App.css';
import AppRoutes from './routes';

export default function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <nav>
          {/* O elemento Link sempre deve ser usado dentro do elemento BrowserRouter */}
          <Link to="/">Meu feed</Link>
          <Link to="/most-viwed">Mais Vistos</Link>
        </nav>

        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}
