import { Link } from 'react-router-dom';
import logo from '../../resources/KFC-logo.svg';
import footerStyles from './Footer.module.css';
import fblogo from '../../resources/facebook-circular-logo.png';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.top}>
        <div className={footerStyles.logoLinks}>
          <Link to='/'>
            <img src={logo} alt='KFC logo' className={footerStyles.logo} />
          </Link>
          <div className={footerStyles.social}>
            <Link to='/'>
              <img src={fblogo} />
            </Link>
            <Link to='/'>
              <img src={fblogo} />
            </Link>
            <Link to='/'>
              <img src={fblogo} />
            </Link>
          </div>
        </div>
        <div className={footerStyles.links}>
          <div>
            <h3>Information</h3>
            <Link to='/'>About Us</Link>
            <Link to='/'>Mitao Bhook</Link>
            <Link to='/'>Mitao Bhook - Scholarship</Link>
            <Link to='/'>Privacy Policy</Link>
            <Link to='/'>Careers</Link>
          </div>
          <div>
            <h3>Location</h3>
            <Link to='/'>Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
