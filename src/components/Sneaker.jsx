import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Sneaker({ sneaker, addToBag }) {
  const { id, name, image, description, price } = sneaker;

  function successAlert() {
    toast.success("Added to your bag successfully.");
  }

  return (
    <>
      <div className="h-auto mx-auto">
        <img src={`./img/${image}.png`} alt={`Sneaker ${name}`} />
        <div className="mt-5">
          <p className="text-xl font-bold">{name}</p>
          <p className="text-gray-500 font-semibold">{description}</p>
          <p className="text-md font-bold">${price}</p>
        </div>
        <div className="flex justify-center items-center lg:justify-center mt-10">
          <button
            className="bg-black text-white h-10 px-4 rounded-2xl hover:bg-zinc-800"
            onClick={() => addToBag(sneaker, successAlert())}
          >
            Add to shopping bag
          </button>
        </div>
      </div>
    </>
  );
}
