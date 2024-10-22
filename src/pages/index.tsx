import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className=" min-h-screen text-gray-300">
      <div className="container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
        <div className="flex justify-between">
          <h1 className="font-serif text-3xl font-medium">Sistema de Peluquería</h1>
          <a
            href="#"
            className="self-start px-3 py-2 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black"
          >
            Ver más detalles
          </a>
        </div>

        <div className="h-32 md:h-40"></div>

        <p className="font-sans text-4xl font-bold text-gray-200 max-w-5xl lg:text-7xl lg:pr-24 md:text-6xl">
          Pasa menos tiempo gestionando y más tiempo con tus clientes
        </p>

        <div className="h-10"></div>

        <p className="max-w-2xl font-serif text-xl text-gray-400 md:text-2xl">
          Imagina poder dedicar más tiempo a tus clientes mientras un sistema eficiente se encarga de gestionar tus citas, empleados y servicios.
        </p>

        <div className="h-32 md:h-40"></div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <p className="self-start inline font-sans text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600">
              Simple y eficiente
            </p>
            <h2 className="text-4xl font-bold">Hecho para estilistas y dueños de salones</h2>
            <div className="h-6"></div>
            <p className="font-serif text-xl text-gray-400 md:pr-10">
              Con nuestro sistema, podrás gestionar citas, llevar un control de tu inventario, empleados, y ofrecer a tus clientes una experiencia inolvidable.
            </p>
            <div className="h-8"></div>
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-800">
              <div>
                <p className="font-semibold text-gray-400">Cuidado y atención</p>
                <div className="h-4"></div>
                <p className="font-serif text-gray-400">
                  Cada detalle cuenta. Nos aseguramos de que puedas ofrecer a tus clientes una experiencia personalizada.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-400">Fácil de usar</p>
                <div className="h-4"></div>
                <p className="font-serif text-gray-400">
                  Diseñado pensando en ti, nuestro sistema es intuitivo y fácil de usar, para que puedas enfocarte en lo más importante.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="-mr-24 rounded-lg md:rounded-l-full bg-gradient-to-br from-gray-900 to-black h-96"></div>
          </div>
        </div>

        <div className="h-32 md:h-40"></div>

        <p className="font-serif text-4xl">
          <span className="text-gray-400">Trabajemos juntos,</span>
          <span className="text-gray-600">
            podemos elevar tu salón a un nuevo nivel de profesionalismo y eficiencia.
          </span>
        </p>

        <div className="h-32 md:h-40"></div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-br from-gray-900 to-black">
            <p className="flex items-center justify-center text-4xl font-semibold text-green-400 bg-green-800 rounded-full shadow-lg w-14 h-14">
              1
            </p>
            <div className="h-6"></div>
            <p className="font-serif text-3xl">Organiza tus citas de manera efectiva</p>
          </div>
          <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-b from-gray-900 to-black">
            <p className="flex items-center justify-center text-4xl font-semibold text-indigo-400 bg-indigo-800 rounded-full shadow-lg w-14 h-14">
              2
            </p>
            <div className="h-6"></div>
            <p className="font-serif text-3xl">
              Ofrece a tus clientes una atención personalizada
            </p>
          </div>
          <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-bl from-gray-900 to-black">
            <p className="flex items-center justify-center text-4xl font-semibold text-teal-400 bg-teal-800 rounded-full shadow-lg w-14 h-14">
              3
            </p>
            <div className="h-6"></div>
            <p className="font-serif text-3xl">Todo en un solo lugar, fácil y rápido</p>
          </div>
        </div>

        <div className="h-40"></div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col justify-center md:col-span-2">
            <p className="self-start inline font-sans text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-teal-600">
              Nos importa tu éxito
            </p>
            <h2 className="text-4xl font-bold">Crecemos contigo</h2>
            <div className="h-6"></div>
            <p className="font-serif text-xl text-gray-400 md:pr-10">
              Con nuestras herramientas, podrás automatizar tareas, gestionar a tus empleados y mantener un control total sobre tu negocio.
            </p>
            <div className="h-8"></div>
            <div className="grid gap-6 pt-8 border-t border-gray-800 lg:grid-cols-3">
              <div>
                <p className="font-semibold text-gray-400">Soporte constante</p>
                <div className="h-4"></div>
                <p className="font-serif text-gray-400">
                  Siempre estamos aquí para brindarte el soporte que necesitas.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-400">Optimización continua</p>
                <div className="h-4"></div>
                <p className="font-serif text-gray-400">
                  Trabajamos constantemente en mejorar nuestro sistema para ofrecerte las mejores soluciones.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-400">Fácil de usar</p>
                <div className="h-4"></div>
                <p className="font-serif text-gray-400">
                  La simplicidad es clave, para que puedas concentrarte en lo que mejor haces.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="-mr-24 rounded-lg md:rounded-l-full bg-gradient-to-br from-gray-900 to-black h-96"></div>
          </div>
        </div>

        <div className="h-10 md:h-40"></div>

        <div className="grid gap-4 md:grid-cols-4">
          <ul className="space-y-1 text-gray-400">
            <li className="pb-4 font-serif text-gray-400">Redes sociales</li>
            <li>
              <a href="#" className="hover:underline">Instagram</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Facebook</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Twitter</a>
            </li>
          </ul>
          <ul className="space-y-1 text-gray-400">
            <li className="pb-4 font-serif text-gray-400">Sucursales</li>
            <li>
              <a href="#" className="hover:underline">Madrid</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Barcelona</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Valencia</a>
            </li>
          </ul>
          <ul className="space-y-1 text-gray-400">
            <li className="pb-4 font-serif text-gray-400">Empresa</li>
            <li>
              <a href="#" className="hover:underline">El equipo</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Sobre nosotros</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Nuestra visión</a>
            </li>
          </ul>
          <ul className="space-y-1 text-gray-400">
            <li className="pb-4 font-serif text-gray-400">Únete</li>
            <li>
              <a
                href="#"
                className="self-start px-3 py-2 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black"
              >
                Contacta con nosotros
              </a>
            </li>
          </ul>
        </div>

        <div className="h-12"></div>
      </div>
    </div>
  );
};

export default LandingPage;
