import {
  HeartIcon,
  ShoppingBagIcon,
  MenuIcon,
  SearchIcon,
} from '@heroicons/react/outline';

export default function Nav() {
  return (
    <nav className="h-full flex items-center gap-2">
      <SearchIcon className="h-9 w-9 text-gray-50 cursor-pointer hover:bg-gray-800 rounded-md p-0.5" />
      <HeartIcon className="h-9 w-9 text-gray-50 cursor-pointer hover:bg-gray-800 rounded-md p-0.5" />
      <ShoppingBagIcon className="h-9 w-9 text-gray-50 cursor-pointer hover:bg-gray-800 rounded-md p-0.5" />
      <MenuIcon className="h-9 w-9 text-gray-50 cursor-pointer hover:bg-gray-800 rounded-md p-0.5" />
    </nav>
  );
}
