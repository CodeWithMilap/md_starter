import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    // Link to the home page with padding and a responsive logo
    <Link href='/' className='-m-1.5  p-1.5 text-3xl font-semibold'>
      <span className='sr-only'>Logo</span>{' '}
      Logo
    </Link>
  );
};

export default Logo;
