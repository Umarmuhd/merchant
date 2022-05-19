import { useState } from "react";
import { SearchCircleIcon, ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/solid";

import { useCart } from "../hooks/useCart";
import Link from "next/link";

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.33334 13.3333C10.647 13.3333 13.3333 10.647 13.3333 7.33333C13.3333 4.01962 10.647 1.33333 7.33334 1.33333C4.01963 1.33333 1.33334 4.01962 1.33334 7.33333C1.33334 10.647 4.01963 13.3333 7.33334 13.3333Z"
      stroke="#303437"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.62 13.7932C12.9733 14.8599 13.78 14.9665 14.4 14.0332C14.9666 13.1799 14.5933 12.4799 13.5666 12.4799C12.8066 12.4732 12.38 13.0665 12.62 13.7932Z"
      stroke="#303437"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const {
    state: { totalPrice, products, isOpen },
    dispatch,
  } = useCart();

  const handleOpenMenu = () => dispatch({ type: "openMenu" });

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex grid items-center grid-cols-3 lg:grid-cols-3">
        <div className="flow-root md:hidden">
          <button onClick={handleOpenMenu} className="group -m-2 p-2 flex items-center">
            <ShoppingBagIcon
              className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
              {products?.length ?? 0}
            </span>
            <span className="sr-only">items in cart, view bag</span>
          </button>
        </div>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <div className="flex flex-row items-center justify-between mr-4">
              <button className="flex items-center justify-center bg-primary_brand_lightest hover:bg-slate-200 transition duration-150 p-3 rounded-full peer text-red-600">
                <SearchIcon />
              </button>
              <input
                type="search"
                className="border border-grey_80 px-4 h-10 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none w-full rounded-[100px] scale-x-0 origin-top-right ml-2 peer-focus:scale-x-100 focus:scale-x-100"
                style={{ transition: "all 0.15s ease 0s" }}
                id="search"
                placeholder="Search..."
              />
            </div>
          </li>
        </ul>
        <Link href="/">
          <a aria-label="Company" title="Company" className="inline-flex items-center lg:mx-auto">
            <svg
              className="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Company
            </span>
          </a>
        </Link>
        <ul className="flex items-center hidden ml-auto space-x-8 lg:flex">
          <li>
            <div className="ml-4 flow-root lg:ml-6">
              <button onClick={handleOpenMenu} className="group -m-2 p-2 flex items-center">
                <ShoppingBagIcon
                  className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                  {products?.length ?? 0}
                </span>
                <span className="sr-only">items in cart, view bag</span>
              </button>
            </div>
          </li>
        </ul>
        <div className="ml-auto lg:hidden">
          {/* <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button> */}
          <button className="flex items-center justify-center bg-primary_brand_lightest hover:bg-slate-200 transition duration-150 p-3 rounded-full peer text-red-600">
            <SearchIcon />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link href="/">
                      <a aria-label="Company" title="Company" className="inline-flex items-center">
                        <svg
                          className="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Company
                        </span>
                      </a>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/">
                        <a
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Product
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Features
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Pricing
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a
                          aria-label="Sign in"
                          title="Sign in"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Sign in
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Sign up
                        </a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
