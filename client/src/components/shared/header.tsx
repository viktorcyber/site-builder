import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useAuth, useClerk, UserButton } from '@clerk/clerk-react';
import { BookMarked } from 'lucide-react';

import { assets } from '@/assets/assets';
import { menu } from '@/utils/constants';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openSignIn } = useClerk();
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  return (
    <header>
      <nav className="z-50 flex items-center justify-between w-full py-4 px-4 md:px-16 lg:px-24 xl:px-32 backdrop-blur border-b text-white border-slate-800">
        <Link to="/" className="flex items-center gap-1">
          <img src={assets.logo} alt="YoBuilder 🕸️" className="h-5 sm:h-7" />
          <strong className="text-2xl font-black">
            <span className="text-blue-500">YoB</span>uilder
          </strong>
        </Link>

        <nav className="hidden md:flex items-center gap-8 transition duration-500">
          {menu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="hover:text-slate-300 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center justify-end min-w-20 sm:min-w-27.5">
            {isSignedIn ? (
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: 'size-9',
                  },
                }}
              >
                <UserButton.MenuItems>
                  <UserButton.Action
                    label="Projects"
                    labelIcon={<BookMarked width={15} />}
                    onClick={() => navigate('/projects/')}
                  />
                </UserButton.MenuItems>
              </UserButton>
            ) : (
              <button
                onClick={() =>
                  openSignIn({
                    redirectUrl: '/',
                  })
                }
                className="flex items-center justify-center font-medium px-4 py-1 sm:px-7 sm:py-2 max-sm:text-sm bg-indigo-600 cursor-pointer active:scale-95 hover:bg-indigo-700 transition rounded-full"
              >
                Login
              </button>
            )}
          </div>

          <button
            id="open-menu"
            className="md:hidden active:scale-90 transition"
            onClick={() => setMenuOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-100 bg-black/60 text-white backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300">
          {menu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <button
            className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-slate-100 hover:bg-slate-200 transition text-black rounded-md flex"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
