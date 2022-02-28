import React from "react";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { BsGraphDown } from "react-icons/bs";
import { SiFsecure } from "react-icons/si";

import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl font-bold sm:text-5xl py-2 text-gradient ">
          We are always on
          <br />
          top of the game
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          {/* The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer */}
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Fastest transactions"
          icon={<BsFillLightningChargeFill fontSize={21} className="text-white" />}
          subtitle="Our systems allows transactions to happen at lightning speeds"
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Lowest Transaction Fees"
          icon={<BsGraphDown fontSize={21} className="text-white" />}
          subtitle="Transact Crypto at the lowest transaction fee possible  "
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="High Security"
          icon={<SiFsecure fontSize={21} className="text-white" />}
          subtitle="You never have to worry about your crypto getting lost ever again. We guarantee a 100% success rate."
        />
      </div>
    </div>
  </div>
);

export default Services;
