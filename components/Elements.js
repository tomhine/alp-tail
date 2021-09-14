export function Main({ className, children }) {
  return (
    <main className={`flex flex-col items-center p-1 ${className}`}>
      {children}
    </main>
  );
}
