import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}
