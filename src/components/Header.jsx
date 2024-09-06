import { useState } from "react";
import { SiNike } from "react-icons/si";
import ShoppingCartModal from "./ShoppingCartModal";

export default function Header() {

  const [modal, setModal] = useState(false)

  function isOpen() {
    setModal(!modal)
  }

  return (
    <nav className="flex justify-around p-4 m-4 items-center bg-white">
        <SiNike className="text-6xl"/>
        <ShoppingCartModal className="cursor:pointer" isOpen={isOpen} modal={modal}/>
    </nav>
  )
}
