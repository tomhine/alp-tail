import Logo from '../Brand/Logo';
import Nav from '../UI/Nav';

export default function Header() {
  return (
    <header className="w-full h-16 bg-gray-900 flex items-center justify-center border-b-2 border-gray-100">
      <div className="w-11/12 flex justify-between">
        <Logo />
        <Nav />
      </div>
    </header>
  );
}
