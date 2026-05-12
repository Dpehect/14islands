import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/index.js';
import { toggleMenu } from '../store/uiSlice.js';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state: RootState) => state.ui.isMenuOpen);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      padding: '30px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000,
      mixBlendMode: 'difference',
      color: 'white'
    }}>
      <div style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.05em' }}>
        14ISLANDS
      </div>
      
      <nav style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        <button 
          onClick={() => dispatch(toggleMenu())}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
