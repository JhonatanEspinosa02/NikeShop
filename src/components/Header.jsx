import { IoBagAddOutline } from "react-icons/io5";
import { SiNike } from "react-icons/si";

export default function Header() {
  return (
    <nav className="flex justify-around p-4 m-4 items-center bg-white">
        <SiNike className="text-6xl"/>
        <IoBagAddOutline className="text-4xl"/>
    </nav>
  )
}
