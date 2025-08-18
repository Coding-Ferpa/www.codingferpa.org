import Image from "next/image";
import icon from "../assets/talk.jpeg";

export default function Events() {
  return (
    <section id="events" className="bg-black overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center mb-4 md:mb-0">
        <div className="md:w-1/2 w-full md:order-2 order-1">
          <Image
            src={icon}
            alt="Encontro da Comunidade"
            className="w-full shadow-lg"
            layout="responsive"
            width={500}
            height={500}
          />
        </div>

        <div className="md:w-1/2 w-full md:pl-12 mt-8 md:mt-0 text-left md:order-1 order-2">
          <h2 className="text-4xl font-bold text-white mb-4 uppercase">
            Nossos Encontros
          </h2>
          <p className="text-lg text-white mb-4">
            Participe dos nossos encontros e faça parte da nossa comunidade!
            Venha trocar experiências, aprender e evoluir junto a outros
            apaixonados por tecnologia.
          </p>
          <p className="text-lg text-white mb-4">
            Os encontros acontecem no {" "}
            <a
              href="https://www.google.com/maps/dir//Av.+dos+Arnaldos,+2316+-+Jardim+Res.+Por+do+Sol,+Fernand%C3%B3polis+-+SP,+15600-348/@-20.2902767,-50.3821587,11.82z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9497f767ebeef459:0x2b5a901e9aa0d1fe!2m2!1d-50.2571331!2d-20.291178?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-main-50 underline"
            >
              Dog King
            </a>
            . Fique ligado nos nossos eventos mensais e venha construir o futuro
            com a gente!
          </p>

          <p className="text-lg text-white">
            Para se manter informado sobre os eventos,{" "}
            <span className="font-bold text-main-50">
              entre no nosso grupo do WhatsApp!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
