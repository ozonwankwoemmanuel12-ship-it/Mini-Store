import { Outlet, Link } from "react-router";

function Layout() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
      : "text-slate-600 hover:text-blue-500 pb-1";

  return (
    <div className="min-h-screen bg-slate-50">
      {/* this header shows on every page */}
      <header className="bg-white px-6 py-4 shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <h1 className="text-lg font-bold text-slate-800">Mini Store</h1>
          <nav className="flex gap-6">
            <Link to="/" end className={linkClass}>
              Home
            </Link>
            <Link to="/products" className={linkClass}>
              Products
            </Link>
          </nav>
        </div>
      </header>

      {/* the matched page renders right here */}
      <main className="p-6 max-w-5xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;