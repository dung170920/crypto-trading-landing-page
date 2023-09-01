import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { IoWalletOutline } from "react-icons/io5";

export const Products = () => {
  return (
    <section className="py-20 container">
      <div className="flex items-center justify-between mb-14">
        <h2 className="text-6xl font-bold">Our Products</h2>
        <div className="flex">
          <button className="flex-center font-bold border-gray-900 rounded-full p-3 border mr-10">
            <FiArrowLeft className="w-6 h-6" />
          </button>
          <button className="flex-center font-bold border-gray-900 rounded-full p-3 border mr-10">
            <FiArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 grid-rows-2 gap-10">
        <div className="col-start-1 col-end-8 rounded-3xl row-span-2 bg-gray-900 flex flex-col p-10 gap-8 items-start">
          <div className="bg-pink-200 px-6 py-3 flex-center w-fit rounded-full gap-2 ">
            <IoWalletOutline className="text-purple-500 w-7 h-7" />
            <span className="font-josefin font-medium text-lg">Wallet</span>
          </div>
          <h2 className="text-4xl font-bold text-white leading-snug tracking-wide">
            The Easiest and Most Powerful Crypto Wallet
          </h2>
          <p className="text-gray-200 font-josefin font-light text-xl max-w-sm">
            Buy Bitcoin instantly with a credit card, debit card, or by linking bank
          </p>
          <button className="flex-center text-pink-200">
            <div className="border-pink-200 rounded-full p-2 border inline-block mr-3">
              <FiArrowUpRight className="w-6 h-6" />
            </div>
            Start
          </button>
        </div>
        <div className="col-start-8 col-end-13 rounded-3xl row-start-1 row-end-1 bg-white flex items-center border-2 border-gray-900 pl-10 py-6 pr-16">
          <span className="text-9xl font-bold font-josefin">
            10<span className="text-5xl font-medium font-josefin ml-1">%</span>
          </span>

          <span className="text-3xl font-bold ml-4">Earn with us in rewards</span>
        </div>
        <div className="col-start-8 col-end-13 rounded-3xl row-start-2 row-end-2 bg-pink-200 flex-center flex-col px-10 py-8 border-2 border-gray-900">
          <span className="text-9xl font-bold font-josefin">
            100<span className="text-5xl font-medium font-josefin ml-1">%</span>
          </span>
          <span className="text-3xl font-bold ml-4">your crypto in one place</span>
        </div>
      </div>
    </section>
  );
};
