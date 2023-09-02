import { PiBank } from "react-icons/pi";
import { FiArrowUpRight } from "react-icons/fi";
import { BsMortarboard, BsCurrencyDollar } from "react-icons/bs";
import { Image } from "../assets";

export const Institutional = () => {
  return (
    <section className="container py-20 space-y-40">
      <div className="bg-white p-20 rounded-3xl flex-center gap-14">
        <div className="flex-1 space-y-10">
          <div className="bg-purple-50 px-6 py-3 flex-center w-fit rounded-full gap-2">
            <PiBank className="text-purple-500 w-6 h-6" />
            <span className="font-bold text-xl">Institutional</span>
          </div>
          <h2 className="text-5xl font-bold leading-snug">
            Borrowing, Trading And Custodial Operations To Individual Needs
          </h2>
          <p className="font-josefin text-xl leading-normal text-gray-600">
            Blockchain.com Institutional Markets is a full-featured cryptocurrency services platform designed to connect
            with companies with their own crypto assets and institutional clients to lead, trade, and custodial
            activities tailored to your needs
          </p>
          <button className="flex-center font-bold text-xl">
            <div className="border-gray-900 rounded-full p-2 border inline-block mr-5">
              <FiArrowUpRight className="w-7 h-7" />
            </div>
            Become a customer
          </button>
        </div>
        <div className="w-2/5">
          <img src={Image} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-12 grid-rows-2 gap-10">
        <div className="col-start-1 col-end-6 rounded-3xl row-start-1 row-end-1 bg-yellow-200 flex-center flex-col px-10 py-8 border-2 border-gray-900">
          <span className="text-9xl font-bold font-josefin">
            100<span className="text-5xl font-medium font-josefin ml-1">%</span>
          </span>
          <span className="text-3xl font-bold ml-4">Original materials</span>
        </div>
        <div className="col-start-1 col-end-6 rounded-3xl row-start-2 row-end-2 bg-white flex items-center border-2 border-gray-900 px-10 py-4">
          <span className="text-9xl font-bold font-josefin">
            45<span className="text-5xl font-medium font-josefin ml-1">%</span>
          </span>

          <span className="text-3xl font-bold ml-4">Discount for our clients</span>
        </div>
        <div className="col-start-6 col-end-13 rounded-3xl row-span-2 bg-white border-2 border-gray-900 flex flex-col p-14 items-start justify-between">
          <div className="bg-purple-50 px-6 py-3 flex-center w-fit rounded-full gap-2 ">
            <BsMortarboard className="text-purple-500 w-7 h-7" />
            <span className="font-bold text-lg">Learn</span>
          </div>
          <h2 className="text-4xl font-bold leading-snug">Blockchain Data Is In Our DNA</h2>
          <p className="font-josefin font-medium text-xl max-w-xl text-gray-600 leading-relaxed">
            Confirm transactions, analyze the market, or simply learn more about cryptocurrencies. Form hash rate and
            block information to mining information and more.
          </p>
          <button className="flex-center font-bold text-xl">
            <div className="border-gray-900 rounded-full p-2 border inline-block mr-5">
              <FiArrowUpRight className="w-7 h-7" />
            </div>
            Explore library
          </button>
        </div>
      </div>
      <div className="bg-white rounded-full p-32 flex-center flex-col">
        <h2 className="text-7xl font-bold leading-tight mb-16">
          <span className="inline-block">
            <span>From Zero </span>
            <BsCurrencyDollar className="w-16 h-16 inline-block text-purple-500" />
            <span> to</span>
          </span>
          <span className="ml-48 inline-block">
            <span>Crypto </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 512 512"
              className="w-16 h-16 inline-block text-purple-500"
            >
              <g>
                <g data-name="Layer 2">
                  <path
                    d="M256 23a233.07 233.07 0 0 1 90.69 447.7A233.07 233.07 0 0 1 165.31 41.3 231.61 231.61 0 0 1 256 23m0-23C114.62 0 0 114.62 0 256s114.62 256 256 256 256-114.62 256-256S397.38 0 256 0z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M335.53 249.05a62.69 62.69 0 0 0 25.58-50.51 55.45 55.45 0 0 0-47.18-54.76v-31.56a12.22 12.22 0 0 0-24.44 0v31h-42.8v-31a12.22 12.22 0 0 0-24.44 0v31h-59.13a12.22 12.22 0 1 0 0 24.44h32.54v176.72h-32.54a12.22 12.22 0 1 0 0 24.44h59.13v31a12.22 12.22 0 0 0 24.44 0v-31h42.8v31a12.22 12.22 0 0 0 24.44 0v-31.6a55.45 55.45 0 0 0 47.18-54.76v-13.89a62.71 62.71 0 0 0-25.58-50.52zm-29.79-81.43a31 31 0 0 1 30.92 30.92 38.34 38.34 0 0 1-38.29 38.29h-78.26v-69.21zm30.92 145.84a31 31 0 0 1-30.92 30.92h-85.63v-83.11h78.26a38.34 38.34 0 0 1 38.29 38.3z"
                    fill="currentColor"
                  ></path>
                </g>
              </g>
            </svg>
            <span> in Minutes</span>
          </span>
        </h2>
        <div className="flex-center gap-12">
          <p className="font-josefin text-2xl text-gray-600 ml-16">
            Blockchain.com Institutional Markets is a full-featured cryptocurrency services platform designed to connect
          </p>
          <div className="w-1/3">
            <button className="px-7 py-3 rounded-full bg-gray-900 text-white whitespace-nowrap">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};
