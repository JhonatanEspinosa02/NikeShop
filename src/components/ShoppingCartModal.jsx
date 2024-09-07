import { IoBagAddOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

export default function ShoppingCartModal({
  isOpen,
  modal,
  bag,
  bagQuantityIncrease,
  badQuantityDecrease,
  emptyBag,
}) {
  return (
    <>
      <div>
        <button onClick={isOpen}>
          <IoBagAddOutline className="text-4xl" />
        </button>

        <div
          className={`fixed inset-y-0 right-0 w-1/3 bg-white shadow-lg transform ${
            modal ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-10 scroll-m-0 overflow-auto`}
        >
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Shopping Bag</h2>
              <button className="text-3xl " onClick={isOpen}>
                <IoCloseSharp />
              </button>
            </div>

            {bag.map((sneak) => (
              <div
                key={sneak.id}
                className="flex justify-around items-start my-10 last-of-type:border-b-2 last-of-type:border-gray-200 pb-6"
              >
                <div className="w-1/3">
                  <img src={`./img/${sneak.image}.png`} alt={`${sneak.id}`} />
                </div>

                <div>
                  <p className="text-xl font-bold">{sneak.name}</p>
                  <p className="text-gray-400">{sneak.description}</p>
                  <p className="text-gray-400">${sneak.price}</p>

                  <div className="flex justify-around my-5 bg-gray-100 p-2 rounded-xl">
                    <button onClick={() => badQuantityDecrease(sneak.id)}>
                      <FaMinus />
                    </button>
                    {sneak.quantity}
                    <button onClick={() => bagQuantityIncrease(sneak.id)}>
                      <FaPlus />
                    </button>
                  </div>

                  <div className="flex justify-between">
                    <p className="font-semibold">SubTotal: $12,995</p>
                    <button onClick={() => emptyBag(sneak.id)}>
                      <FaRegTrashAlt />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <p className="font-semibold text-xl">Total: $20,000</p>
          </div>

          <div className="grid grid-cols-1 items-center m-8">
            <button className="bg-black text-white mx-10 p-4 rounded-2xl">Buy</button>
            <button className="bg-red-600 text-white my-5 mx-10 p-4 rounded-2xl">Clean Bag</button>

          </div>
        </div>

        {modal && (
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={isOpen}
          ></div>
        )}
      </div>
    </>
  );
}
