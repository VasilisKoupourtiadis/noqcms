import logo from '../../../assets/images/logo.png';
import SmallButtonComponent from './SmallButtonComponent';
import { Link } from 'react-router-dom';
import { auth } from '../../../services/firebase.config';

/* todo: nav links from dummydata -> firebase */

const Navbar = () => {
  const currentUser = auth.currentUser;
  console.log('currUser' + currentUser);
  return (
    <nav className="bg-white w-full mb-4 mt-2">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex ">
          <div className="flex items-center sm:pr-10">
            <Link to="/">
              <img className="block h-10 w-auto" src={logo} alt="Logo på NoQ" />
            </Link>
          </div>
          <div className="flex justify-between w-3/4 mx-10">
            <div className="hidden sm:ml-6 sm:flex sm:space-x-10 sm:px-10">
              {/* Navigation Links */}
              <Link
                to="/"
                className="text-acc-blue inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
              >
                Hem
              </Link>
              {currentUser && (
                <Link
                  to="/cmsDashboard"
                  className="text-acc-blue inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  CMS Dashboard
                </Link>
              )}
              <Link
                to="#"
                className="text-acc-blue inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
              >
                Bli vår partner
              </Link>
              <a
                href="#"
                className="text-acc-blue inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
              >
                Jobba med oss
              </a>
              <a
                href="#"
                className="text-acc-blue inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
              >
                Om Oss
              </a>
              <a
                href="#"
                className="text-acc-blue inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
              >
                Teamet
              </a>
            </div>
            <Link to="/loginCms" className="flex items-center justify-center">
              <SmallButtonComponent title={'Logga in'}></SmallButtonComponent>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
