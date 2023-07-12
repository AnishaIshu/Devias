import React from 'react';

const Transition = () => {
  const transitionData = [
    {
      id: 1,
      date: '11',
      name: 'Devias',
      p: 'Payment received',
      hold: 'ON_HOLD',
      bgColor: 'bg-[#FAE8DB]',
      text: 'text-[#d25e17f1]',
      price: '+ $25,000.00',
      priceColor: 'text-[#15a776]',
    },
    {
      id: 2,
      date: '10',
      name: 'Zimbru',
      p: 'Payment sent',
      hold: 'CONFIRMED',
      bgColor: 'bg-[#ddfce6]',
      text: 'text-[#106a47]',
      price: '- $6,843.00',
      priceColor: 'text-[#e4554d]',
    },
    {
      id: 3,
      date: '10',
      name: 'Vertical Jelly',
      p: 'Payment sent',
      hold: 'FAILED',
      bgColor: 'bg-[#fadbdb]',
      text: 'text-[#cb1414]',
      price: '- $91,823.00',
      priceColor: 'text-[#e4554d]',
    },
    {
      id: 4,
      date: '8',
      name: 'Devias',
      p: 'Payment received',
      hold: 'CONFIRMED',
      bgColor: 'bg-[#ddfce6]',
      text: 'text-[#016a47]',
      price: '+ $49,550.00',
      priceColor: 'text-[#15a776]',
    },
  ];

  return (
    <>
      <div className="md:w-[60%] h-[100%] mx-3 bg-[#fff] mt-8 pt-5 rounded-3xl boxShadow">
        <h1 className="text-[17px] font-bold text-slate-800 pl-8 pt-4">
          Latest Transition
        </h1>
        <p className="text-[15px] font-medium text-slate-500 pl-8 pb-3">
          Based on the selected period
        </p>
        <div className="flex items-center gap-6 text-[14px] font-semibold text-slate-600 mt-4 pl-8 mb-3">
          <h2 className="text-[#7375f3] border-b border-b-[#888afd] cursor-pointer">
            All
          </h2>
          <h2 className="cursor-pointer">Confirmed</h2>
          <h2 className="cursor-pointer">Pending</h2>
        </div>




        <div className="w-[100%] overflow-auto">
          {transitionData.map((data, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between w-[100%] border-t py-3  px-3 md:px-10  cursor-pointer hover:bg-zinc-100"
              >
                <div className="flex items-center gap-4 md:gap-10">
                  <div className="bg-zinc-100 w-10 text-center rounded-2xl px-1 sm:px-2 py-2">
                    <h1 className="text-[13px]">JUL</h1>
                    <h1 className="font-bold sm:text-[16px] text-[12px]">{data.date}</h1>
                  </div>
                  <div>
                    <h1 className="text-[13px] sm:text-[15px] font-semibold text-slate-700">
                      {data.name}
                    </h1>
                    <p className="text-[13px] sm:text-[14px] font-medium text-slate-500">
                      {data.p}
                    </p>
                  </div>
                </div>

                <div
                  className={`${data.bgColor} ${data.text} px-2 py-1 text-center text-[8px] sm:text-[12px] rounded-full font-bold`}
                >
                  {data.hold}
                </div>

                <div
                  className={`${data.priceColor} w-28 text-center text-[8px] sm:text-[14px] rounded-full font-semibold`}
                >
                  {data.price}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Transition;
