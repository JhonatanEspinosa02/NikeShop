import { IoBagAddOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";

export default function ShoppingCartModal({ isOpen, modal }) {
  return (
    <>
      <div>
        <button onClick={isOpen}>
          <IoBagAddOutline className="text-4xl" />
        </button>

        <div
          className={`fixed inset-y-0 right-0 w-1/3 bg-white shadow-lg transform ${
            modal ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-10`}
        >
          <div className="p-4">
            <h2 className="text-xl font-bold">Shopping Bag</h2>

            <div className="flex justify-around items-start my-10 last-of-type:border-b-2 last-of-type:border-gray-200 pb-6">
              <div className="w-1/3">
                <img src="./img/Sneaker_02.png" alt="02" />
              </div>

              <div>
                <p className="text-xl font-bold">Nike Air Force 1 '07</p>
                <p className="text-gray-400">Men's sneakers</p>
                <p className="text-gray-400">$2599</p>

                <div className="flex justify-around my-5 bg-gray-100 p-2 rounded-xl">
                  <button>
                    <FaMinus />
                  </button>
                  5
                  <button>
                    <FaPlus />
                  </button>
                </div>

                <div className="flex justify-between">
                  <p className="font-semibold">SubTotal: $12995</p>
                  <button>
                    <FaRegTrashAlt />
                  </button>
                </div>
              </div>
            </div>

            <button
              className="mt-4 bg-black text-white px-4 py-2 rounded"
              onClick={isOpen}
            >
              Cerrar Modal
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
