import { Logo } from "../assets";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

export const Footer = () => {
  return (
    <section className="container flex pb-36 gap-40">
      <div className="w-2/5 space-y-32">
        <div className="space-y-3">
          <a href="#">
            <img src={Logo} alt="logo" className="h-24 w-24" />
          </a>
          <div className="flex gap-6 font-josefin text-xl text-gray-700">
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">Medium</a>
          </div>
        </div>
        <div className="font-josefin text-xl text-gray-600 space-y-8">
          <p className="">
            For further details see our Legal Disclosures. By using this website, you accept our Term of Use and Privacy
            Policy.
          </p>
          <span className="flex items-center gap-2">
            <AiOutlineCopyrightCircle />
            Copyright 2023. Blockchain LLC. All rights reserved.
          </span>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-3 mt-20">
        <div className="space-y-7">
          <h4 className="text-2xl font-bold">Products</h4>
          <ul className="list-none font-josefin text-x space-y-4">
            <li>
              <a href="#">Wallet</a>
            </li>
            <li>
              <a href="#">Exchange</a>
            </li>
            <li>
              <a href="#">Explorer</a>
            </li>
            <li>
              <a href="#" className="flex gap-3">
                Learn
                <span className="uppercase bg-purple-100 rounded-full text-purple-500 text-xs px-2 pt-1 flex-center font-bold">
                  new
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-7">
          <h4 className="text-2xl font-bold">Resources</h4>
          <ul className="list-none font-josefin text-x space-y-4">
            <li>
              <a href="#">APIs</a>
            </li>
            <li>
              <a href="#">Status</a>
            </li>
            <li>
              <a href="#" className="flex gap-3">
                Open Source
                <span className="uppercase bg-purple-100 rounded-full text-purple-500 text-xs px-2 pt-1 flex-center font-bold">
                  new
                </span>
              </a>
            </li>
            <li>
              <a href="#">Research</a>
            </li>
            <li>
              <a href="#">Wallet support</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="space-y-7">
          <h4 className="text-2xl font-bold">Company</h4>
          <ul className="list-none font-josefin text-x space-y-4">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#" className="flex gap-3">
                Careers
                <span className="uppercase bg-purple-100 rounded-full text-purple-500 text-xs px-2 pt-1 flex-center font-bold">
                  new
                </span>
              </a>
            </li>
            <li>
              <a href="#">Press Center</a>
            </li>
            <li>
              <a href="#">Prime</a>
            </li>
            <li>
              <a href="#">Ventures</a>
            </li>
            <li>
              <a href="#">BCAM</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
