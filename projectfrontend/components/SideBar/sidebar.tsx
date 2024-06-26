import React from "react";
import Link from "next/link";
import { LuWarehouse } from "react-icons/lu";
import { HiHome } from "react-icons/hi2";
import { MdInventory } from "react-icons/md";
import { FaGear } from "react-icons/fa6";
import { GiStockpiles, GiNotebook } from "react-icons/gi";
import { FaUserNinja } from "react-icons/fa";

const Sidebar = () => {
  const links = [
    { href: "/supplier", text: "Suppliers", icon: <FaUserNinja /> },
    { href: "/inventory", text: "Inventory", icon: <MdInventory /> },
    { href: "/logs", text: "Logs", icon: <GiNotebook /> },
    { href: "/process", text: "Processes", icon: <FaGear /> },
    { href: "/stock", text: "Stock", icon: <GiStockpiles /> },
  ];

  return (
    <div className="bg-zinc-300 fixed h-full inset-y-0 flex flex-col">
      <div className="h-[8vh] flex items-center justify-center gap-2 text-xl border-2 border-zinc-600 border-b-0">
        T.W.M.S. <LuWarehouse />
      </div>
      <div className="px-16 pt-4 h-full flex flex-col gap-4 border-2 border-zinc-600">
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            <h3 className="hover:text-zinc-600 transition-all duration-300 text-slate-950 w-24 gap-2 flex justify-start items-center">
              {link.icon} {link.text}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
