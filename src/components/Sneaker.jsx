import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Sneaker({ sneaker, addToBag }) {
  const { id, name, image, description, price } = sneaker;

  function successAlert() {
    toast.success("Added to your bag successfully.");
  }

  return (
    <>
      <div className="h-auto mx-auto m-5 p-5">
        <img src={`./img/${image}.png`} alt={`Sneaker ${name}`} />
        <div className="mt-5">
          <p className="text-xl font-bold">{name}</p>
          <p className="text-gray-500 font-semibold">{description}</p>
          <p className="text-md font-bold">${price}</p>
        </div>
        <div className="flex justify-center lg:justify-center mt-4">
          <button
            className="mt-6 bg-black text-white rounded-2xl py-4 px-10 hover:bg-zinc-800"
            onClick={() => addToBag(sneaker, successAlert())}
          >
            Add to shopping bag
          </button>
        </div>
      </div>
    </>
  );
}
