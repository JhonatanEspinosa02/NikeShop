import { IoBagAddOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useMemo } from "react";
import { FaApplePay } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";

export default function ShoppingCartModal({
  isOpen,
  modal,
  bag,
  bagQuantityIncrease,
  badQuantityDecrease,
  emptyBag,
  deleteSneakerBag,
}) {
  const renderLength = useMemo(() => bag.length === 0, [bag]);
  const Total = useMemo(
    () =>
      bag.reduce(
        (total, sneaker) => total + sneaker.price * sneaker.quantity,
        0
      ),
    [bag]
  );

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
          {renderLength ? (
            <h2 className="text-xl font-bold m-5">Are you ready to order?</h2>
          ) : (
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
                      <p className="font-semibold">
                        SubTotal: ${sneak.quantity * sneak.price}
                      </p>
                      <button onClick={() => emptyBag(sneak.id)}>
                        <FaRegTrashAlt />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <p className="font-semibold text-xl">Total: ${Total}</p>
            </div>
          )}
          <div className="grid grid-cols-1 items-center m-8">
            <button className= {`${renderLength ? "bg-black text-white hover:bg-zinc-800 opacity-40 cursor-not-allowed" : "bg-black text-white hover:bg-zinc-800"}  mx-10 p-4 rounded-2xl`}>
              Buy as Guest
            </button>
            <button className={`flex justify-center ${renderLength ? "bg-gray-100 hover:bg-white opacity-40 cursor-not-allowed" : "bg-gray-100 hover:bg-white"} text-5xl mx-10 my-5 border border-gray-300 rounded-2xl`}>
              <FaApplePay />
            </button>

            <button className={`flex justify-center ${renderLength ? "bg-gray-100 hover:bg-white opacity-40 cursor-not-allowed" : "bg-gray-100 hover:bg-white"} text-5xl mx-10  border border-gray-300 rounded-2xl`}>
              <FaGooglePay />
            </button>
            <button
              onClick={() => deleteSneakerBag()}
              className=" text-red-600 hover:text-white my-16 mx-10 p-4 rounded-2xl hover:bg-red-500"
            >
              Clean Bag
            </button>
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
