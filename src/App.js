import 'bootstrap/dist/css/bootstrap.min.css';
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <div className="App">
      <PageTitle>Task</PageTitle>
      <AppHeader/>
      <AppContent/>
    </div>
          <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              fontSize: '1.4rem',
            },
          }}
        />
      </>
  );
}

export default App;
