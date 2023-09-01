import { Phone } from "../assets";
import { BiLogoGoogle, BiLogoApple } from "react-icons/bi";

export const BestWay = () => {
  return (
    <section className="container py-20">
      <h1 className="text-7xl col-span-8 font-bold leading-tight mb-16">
        <span className="inline-block">
          <span>Best way to buy </span>
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
            />
          </svg>
        </span>
        <span className="ml-48 inline-block">
          <span>trade </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 32 32"
            className="w-16 h-16 inline-block text-purple-500"
          >
            <g>
              <path
                d="M5 20h1v3a1 1 0 1 0 2 0v-3h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H8V5a1 1 0 1 0-2 0v3H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1zm1-10h2v8H6zM14 26h1v3a1 1 0 1 0 2 0v-3h1a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-1v-3a1 1 0 1 0-2 0v3h-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1zm1-7h2v5h-2zM23 22h1v3a1 1 0 1 0 2 0v-3h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1V3a1 1 0 1 0-2 0v3h-1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zm1-14h2v12h-2z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
          <span> crypto</span>
        </span>
      </h1>
      <div className="flex gap-16">
        <div className="flex-1 h-[600px]">
          <img src={Phone} alt="" className="h-full mx-auto" />
        </div>

        <div className="flex-1 space-y-10">
          <p className="font-josefin text-2xl text-gray-600">
            The world&rsquo;s fastest crypto-matching engine
            <br />
            built by traders for traders.
          </p>
          <p className="font-josefin text-2xl text-gray-600">
            Increased purchasing power means up to 5
            <br /> times more profit.
          </p>
          <div className="flex gap-10">
            <button className="flex-center bg-gray-900 text-white px-7 py-3 rounded-xl gap-2">
              <BiLogoApple className="w-9 h-9" />
              <div className="flex flex-col font-josefin gap-1 items-start text-gray-200">
                <span className="text-xs">Get app on the</span>
                <span className="text-xl">Apple Store</span>
              </div>
            </button>
            <button className="flex-center bg-gray-900 text-white px-7 py-3 rounded-xl gap-2">
              <BiLogoGoogle className="w-9 h-9" />
              <div className="flex flex-col font-josefin gap-1 items-start text-gray-200">
                <span className="text-xs">Get app on the</span>
                <span className="text-xl">Google Store</span>
              </div>
            </button>
          </div>
          <div className="flex gap-10">
            <div className="bg-white rounded-3xl flex-1 border-2 border-gray-900">
              <img src="" alt="" className="flex-1 h-56" />
            </div>
            <div className="bg-white rounded-xl flex-1 border-2 border-gray-900">
              <img src="" alt="" className="flex-1 h-56" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
