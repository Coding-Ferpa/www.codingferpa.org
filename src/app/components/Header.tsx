"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Header() {
  const handleClick = () => {
    window.open("https://chat.whatsapp.com/KgO1mbD0JFWJk6OWjlNQd2", "_blank");
  };


  return (
    <header className="bg-black text-white p-4 sm:bg-black">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <Link href="/">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-4 sm:mb-0">
            <img src="../assets/icon.png" alt="Logo" className="h-14 w-auto" />
            <span className="text-center sm:text-left sm:border-l sm:border-gray-500 sm:pl-4">
              Comunidade de tecnologia em Fernandópolis
            </span>
          </div>
        </Link>

        <nav>
          <button
            onClick={handleClick}
            className="flex items-center space-x-2 bg-transparent text-white border-2 border-main-100 rounded-full px-4 py-2 hover:bg-main-100 hover:text-white transition"
          >
            <figure>
            <FontAwesomeIcon icon={faSignIn} className="w-4 h-4" />
            </figure>
            <span className="border-l border-gray-500 pl-4">Participe</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
