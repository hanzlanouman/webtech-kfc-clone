import logo from '../../resources/KFC-logo.svg';
import delivery from '../../resources/1.png';
import pickup from '../../resources/2.png';
const Navigation = () => {
  return (
    <nav>
      <div className='left-head'>
        <div className='channel'>
          <button>
            <img src={delivery} alt='' />
            <h4>DELIVERY</h4>
          </button>
          <button>
            <img src={pickup} alt='' />
            <h4>PICKUP</h4>
          </button>
        </div>
      </div>
      <div className='right-head'>
        <button className='locate-btn'>
          <svg
            height='24'
            width='24'
            focusable='false'
            viewBox='0 0 24 24'
            aria-hidden='true'
          >
            <path d='M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z'></path>
          </svg>
          Select Location
        </button>

        <button className='register-btn'>Register / Sign in</button>
      </div>
    </nav>
  );
};

export default Navigation;
