import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import SearchPage from './pages/SearchPage';
// import ArticlePage from './pages/ArticlePage';
// import SourcesPage from './pages/SourcesPage';
// import LoginPage from './pages/LoginPage';
// import ProfilePage from './pages/ProfilePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
      <Provider store={store}>
        <ThemeProvider>
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  {/*<Route path="/search" element={<SearchPage />} />*/}
                  {/*<Route path="/sources" element={<SourcesPage />} />*/}
                  {/*<Route path="/article/:title" element={<ArticlePage />} />*/}
                  {/*<Route path="/login" element={<LoginPage />} />*/}
                  {/*<Route path="/profile" element={*/}
                  {/*  <PrivateRoute>*/}
                  {/*    <ProfilePage />*/}
                  {/*  </PrivateRoute>*/}
                  {/*} />*/}
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
  );
}

export default App;