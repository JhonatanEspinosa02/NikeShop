import { useState } from "react";
import { categories } from "../data/db";
import { SiNike } from "react-icons/si";
import ShoppingCartModal from "./ShoppingCartModal";

export default function Header({
  bag,
  bagQuantityIncrease,
  badQuantityDecrease,
  emptyBag,
  deleteSneakerBag,
}) {
  const [modal, setModal] = useState(false);

  function isOpen() {
    setModal(!modal);
  }

  return (
    <nav className="flex justify-around p-4 m-4 items-center bg-white">
      <SiNike className="text-6xl" />

      <div className="flex justify-between gap-10">
        <div className="flex space-x-8">
          {categories.map(cat => (
            <a key={cat.category} href="#" className="relative group">
            <p className="text-black text-lg font-semibold">{cat.category}</p>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
          ))}
        </div>
      </div>

      <ShoppingCartModal
        className="cursor:pointer"
        isOpen={isOpen}
        modal={modal}
        bag={bag}
        bagQuantityIncrease={bagQuantityIncrease}
        badQuantityDecrease={badQuantityDecrease}
        emptyBag={emptyBag}
        deleteSneakerBag={deleteSneakerBag}
      />
    </nav>
  );
}
