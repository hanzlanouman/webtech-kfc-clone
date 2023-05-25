import { Link } from 'react-router-dom';
import logo from '../../resources/KFC-logo.svg';
import footerStyles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.top}>
        <div>
          <img src={logo} alt='KFC logo' className={footerStyles.logo} />
          <div className={footerStyles.social}>
            <Link to='/'>
              <i className='fab fa-facebook-f'></i>
            </Link>
            <Link to='/'>
              <i className='fab fa-twitter'></i>
            </Link>
            <Link to='/'>
              <i className='fab fa-instagram'></i>
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
