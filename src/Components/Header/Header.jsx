import logo from '../../resources/KFC-logo.svg';
import Navigation from './Navigation';
const Header = () => {
  return (
    <header>
      <img src={logo} alt='KFC logo' width={71} className='logo' />
      <Navigation />
    </header>
  );
};

export default Header;
