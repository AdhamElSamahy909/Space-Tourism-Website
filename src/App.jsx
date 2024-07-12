import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import DestinationPage from './pages/DestinationPage';
import CrewPage from './pages/CrewPage';
import TechnologyPage from './pages/TechnologyPage';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './components/AppLayout';
import { DataProvider } from './contexts/DataContext';

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Homepage />} />
            <Route path="destinations/" element={<DestinationPage />} />
            <Route path="crew" element={<CrewPage />} />
            <Route path="technology" element={<TechnologyPage />} />
          </Route>
          <Route path="/adham" element={<h1>Adham</h1>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
