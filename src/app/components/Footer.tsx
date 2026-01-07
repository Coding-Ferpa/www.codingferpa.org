"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-main-100 text-white p-4 text-center">
      <div className="flex justify-center w-full gap-2">
        <p className="text-sm sm:text-base">&copy; 2026 Coding Ferpa. Todos os direitos reservados |</p>
        <Link href="/CODE_OF_CONDUCT">
          <p className="text-sm sm:text-base hover:underline transition duration-75">Código de conduta</p>
        </Link>
      </div>
        <p className="text-sm sm:text-base">
          Desenvolvido com <FontAwesomeIcon icon={faHeart}/> da comunidade para a comunidade.
        </p>
    </footer>
  );
}
