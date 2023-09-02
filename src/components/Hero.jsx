import { Wallet, Logo } from "../assets";
import { FiArrowUpRight } from "react-icons/fi";

export const Hero = () => {
  return (
    <header className="h-fit">
      <nav className="container flex items-center justify-between py-4">
        <div className="flex-center gap-12">
          <a href="#">
            <img src={Logo} alt="logo" className="h-24 w-24" />
          </a>
          <div className="flex-center gap-7 font-josefin font-medium">
            <a href="#" className="px-4 py-2">
              Wallet
            </a>
            <a href="#" className="px-4 py-2">
              Exchange
            </a>
            <a href="#" className="px-4 py-2">
              Explore
            </a>
            <a href="#" className="px-4 py-2">
              Institutional
            </a>
          </div>
        </div>
        <div className="font-semibold gap-4 flex">
          <a href="#" className="px-4 py-2">
            Log in
          </a>
          <a href="#" className="px-4 py-2 border rounded-full border-gray-900">
            Sign Up
          </a>
        </div>
      </nav>

      <div className="container grid grid-cols-12 pt-14 pb-24">
        <h2 className="text-7xl col-span-8 font-bold leading-tight">
          <span className="inline-block">The best lightning</span>
          <span className="ml-36 inline-block">
            <span>crypto </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 24 24"
              xmlSpace="preserve"
              className="w-16 h-16 inline-block text-purple-500"
            >
              <path
                d="M17 11.5c-3.032 0-5.5 2.467-5.5 5.5s2.468 5.5 5.5 5.5 5.5-2.467 5.5-5.5-2.468-5.5-5.5-5.5zm0 10c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5 4.5 2.019 4.5 4.5-2.019 4.5-4.5 4.5zM16 16a.5.5 0 0 0 .5.5h1c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5v.5a.5.5 0 1 1-1 0v-.5h-1a.5.5 0 1 1 0-1h2a.5.5 0 0 0 0-1h-1c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5V14a.5.5 0 1 1 1 0v.5h1a.5.5 0 1 1 0 1h-2a.5.5 0 0 0-.5.5zM7 1.5C3.968 1.5 1.5 3.967 1.5 7s2.468 5.5 5.5 5.5 5.5-2.467 5.5-5.5S10.032 1.5 7 1.5zm0 10c-2.481 0-4.5-2.019-4.5-4.5S4.519 2.5 7 2.5s4.5 2.019 4.5 4.5-2.019 4.5-4.5 4.5zm1.1-7.095V4a.5.5 0 1 0-1 0v.4h-.2V4a.5.5 0 1 0-1 0v.4h-1a.5.5 0 1 0 0 1H5v3.2h-.1a.5.5 0 1 0 0 1h1v.4a.5.5 0 1 0 1 0v-.4h.2v.4a.5.5 0 1 0 1 0v-.405A1.549 1.549 0 0 0 9.6 8.05c0-.406-.16-.773-.417-1.05A1.54 1.54 0 0 0 9.6 5.95c0-.838-.67-1.518-1.5-1.545zM8.05 8.6H6V7.5h2.05a.55.55 0 0 1 0 1.1zm0-2.1H6V5.4h2.05a.551.551 0 0 1 0 1.1zM22.5 8v2a.5.5 0 1 1-1 0V8c0-.827-.673-1.5-1.5-1.5h-2.793l1.147 1.147a.5.5 0 1 1-.707.707l-2-2a.5.5 0 0 1 0-.707l2-2a.5.5 0 1 1 .707.707L17.207 5.5H20c1.379 0 2.5 1.122 2.5 2.5zM8.354 17.647a.5.5 0 0 1 0 .707l-2 2a.498.498 0 0 1-.708 0 .5.5 0 0 1 0-.707L6.793 18.5H4A2.503 2.503 0 0 1 1.5 16v-2a.5.5 0 1 1 1 0v2c0 .827.673 1.5 1.5 1.5h2.793l-1.147-1.146a.5.5 0 1 1 .707-.707z"
                fill="currentColor"
              ></path>
            </svg>
            <span> trading</span>
          </span>
        </h2>
        <div className="col-span-4 space-y-8 mx-12">
          <p className="font-josefin font-medium text-gray-600 text-xl tracking-wide">
            Trusted by milions since 2011 with over $1 Trillion in crypto transactions.
          </p>
          <div className="flex items-center justify-between">
            <button className="px-7 py-3 rounded-full bg-gray-900 text-white whitespace-nowrap">Get Started</button>
            <button className="flex-center">
              <div className="border-gray-900 rounded-full p-3 border inline-block mr-3">
                <FiArrowUpRight className="w-6 h-6" />
              </div>
              Explore
            </button>
          </div>
        </div>
      </div>

      <div className="relative container h-[450px]">
        <div className="transform scale-90 absolute -top-12 left-20 right-20 h-full rounded-3xl border-2 border-gray-300"></div>
        <div className="transform scale-95 absolute -top-6 left-20 right-20 h-full rounded-3xl border-2 border-gray-300 bg-purple-50"></div>
        <div className="absolute top-0 left-20 right-20 rounded-3xl border-2 border-gray-900 bg-white p-7 grid grid-cols-12">
          <div className="col-span-7 flex flex-col justify-between items-start p-12">
            <h2 className="text-4xl font-bold leading-normal">
              The Most Trusted <br /> Crypto Platform
            </h2>
            <p className="font-josefin text-xl text-gray-600 leading-normal">
              Blockchain is the easiest place to buy and sell cryptocurrency. <br /> Sign up and get started today.
            </p>
            <button className="flex-center font-bold">
              <div className="border-gray-900 rounded-full p-2 border inline-block mr-3">
                <FiArrowUpRight className="w-6 h-6" />
              </div>
              Get started now
            </button>
          </div>
          <div className="col-span-5 h-96 flex-center">
            <img src={Wallet} alt="" className="h-full" />
          </div>
        </div>
      </div>
    </header>
  );
};
