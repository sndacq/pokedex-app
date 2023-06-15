import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => (
  <nav className="bg-white border-gray-200 flex">
    <div className="max-w-screen-xl flex mx-auto p-4">
      <Link href="/" data-testid="navbar-home-link">
        <Image
          src="/pokeapi.png"
          width={100}
          height={50}
          alt="logo"
          data-testid="navbar-image"
        />
      </Link>
    </div>
  </nav>
);

export default NavBar;
