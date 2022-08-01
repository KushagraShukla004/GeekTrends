import { Container, Row, Col } from 'react-bootstrap';
// import { MailchimpForm } from './MailchimpForm';
import logo1 from '../public/logo/logo1.svg';
import navIcon1 from '../public/svg/nav-icon1.svg';
import navIcon2 from '../public/svg/nav-icon2.svg';
import navIcon3 from '../public/svg/nav-icon3.svg';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='container mx-auto mt-10 px-50 mb-5'>
      <div className='sm:flex sm:items-center sm:justify-between'>
        <Link href='/'>
          <a className='flex items-center mb-4 sm:mb-0'>
            <>
              <Image
                src={logo1.src}
                className='mr-3 h-8'
                alt='Logo'
                height='35px'
                width='35px'
              />
              <span className='ml-3 self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
                Geek Trends
              </span>
            </>
          </a>
        </Link>
        <div className='social-icon'>
          <ul className='flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400'>
            <li>
              <a href='#' className='mr-4 hover:underline md:mr-6'>
                <Image
                  src={navIcon1.src}
                  alt='Icon'
                  height='20px'
                  width='20px'
                />
              </a>
            </li>
            <li>
              <a href='#' className='mr-4 hover:underline md:mr-6'>
                <Image
                  src={navIcon2.src}
                  alt='Icon'
                  height='20px'
                  width='20px'
                />
              </a>
            </li>
            <li>
              <a href='#' className='mr-4 hover:underline md:mr-6'>
                <Image
                  src={navIcon3.src}
                  alt='Icon'
                  height='20px'
                  width='20px'
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
      <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
        © 2022{' '}
        <Link href='/'>
          <a className='hover:underline'>Geek Trends™</a>
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
