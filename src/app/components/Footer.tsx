"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-main-100 text-white p-4 text-center">
      <p className="text-sm sm:text-base">&copy; 2025 Coding Ferpa. Todos os direitos reservados.</p>
      <p className="text-sm sm:text-base mt-2">
        Desenvolvido com <FontAwesomeIcon icon={faHeart}/> da comunidade para a comunidade.
      </p>
    </footer>
  );
}
