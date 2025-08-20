import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="bg-gray-800 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {!isHome && (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/" className="text-emerald-500 hover:text-emerald-400">
              <ArrowLeft size={24} />
            </Link>
          </motion.div>
        )}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            90+ Quiz
          </span>
        </Link>
      </div>
      
      <nav className="flex items-center space-x-4">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/" className="text-emerald-500 hover:text-emerald-400">
            <Home size={24} />
          </Link>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
