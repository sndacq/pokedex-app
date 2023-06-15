import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => (
  <nav className="bg-white border-gray-200 flex">
    <div className="max-w-screen-xl flex mx-auto p-4">
      <Link href="/">
        <Image src="/pokeapi.png" width={100} height={50} alt="logo" />
      </Link>
    </div>
  </nav>
);

export default NavBar;
