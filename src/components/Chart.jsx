import { BsCurrencyBitcoin } from "react-icons/bs";

export const Chart = () => {
  const coins = [
    { name: "Bitcoin", icon: BsCurrencyBitcoin, percent: 2.58 },
    { name: "Bitcoin", icon: BsCurrencyBitcoin, percent: -2.58 },
    { name: "Bitcoin", icon: BsCurrencyBitcoin, percent: 2.58 },
    { name: "Bitcoin", icon: BsCurrencyBitcoin, percent: 2.58 },
    { name: "Bitcoin", icon: BsCurrencyBitcoin, percent: -2.58 },
    { name: "Bitcoin", icon: BsCurrencyBitcoin, percent: 2.58 },
  ];
  return (
    <section className="py-20 flex-center gap-4 overflow-x-hidden">
      {coins.map((coin, index) => (
        <div key={index} className="flex-center bg-white rounded-full shadow-lg shadow-purple-500/5 px-10 py-7 gap-4">
          <coin.icon className="text-purple-500 h-10 w-10" />
          <span className="font-bold whitespace-nowrap text-2xl">{coin.name}</span>
          <span className="border-2 border-gray-500 rounded-full px-2 py-1 font-josefin text-lg">
            {coin.percent > 0 ? `+${coin.percent}` : `${coin.percent}`}%
          </span>
        </div>
      ))}
    </section>
  );
};
