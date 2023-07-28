import { motion } from 'framer-motion';
import { FaGhost } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Header = () => {
  const navLink = [
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Education', path: '/education' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];
  return (
    <div>
      <motion.header className="w-full mb-4 flex text-white items-center justify-between p-4 rounded-lg">
        <Link to="/">
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center space-x-2 font-bold text-3xl text-teal-400"
          >
            <FaGhost />
            <span>Bayu Setiawan</span>
          </motion.div>
        </Link>
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex space-x-10"
        >
          {navLink.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-white font-bold hover:text-teal-400"
            >
              {item.name}
            </Link>
          ))}
        </motion.nav>
      </motion.header>
    </div>
  );
};
