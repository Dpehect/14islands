import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/index.js';
import { useSmoothScroll } from './hooks/useSmoothScroll.js';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Experience from './components/Experience.js';
import './styles/global.scss';

const AppContent: React.FC = () => {
  useSmoothScroll();

  return (
    <main>
      <Experience />
      <Header />
      <Hero />
      <section className="container">
        <h2>Our Projects</h2>
        <p>This will be populated from the content-service.</p>
      </section>
    </main>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;
