import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className="w-screen min-h-screen bg-gray-200 font-poppins">
      <Header />
      {children}
    </div>
  );
}
