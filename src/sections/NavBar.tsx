export default function NavBar() {
  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-sm rounded-b-lg w-full max-w-[390px] md:max-w-[500px] lg:max-w-[600px]">
      <div className="bg-gray-800 text-white py-2 px-4 rounded-t-lg">
        <div className="flex justify-between items-center text-xs">
          <div className="flex items-center">
            <span className="flex items-center">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Великий Новгород, ул. Троицкая, 3
            </span>
          </div>
          <div className="flex items-center">
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <a href="tel:+79116006066" className="hover:text-gray-300">
              +7(911)6006066
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-xs px-4 py-2">
        <div className="flex items-center">
          <div className="w-11 h-12 mr-4">
            <img src="/images/brand/group0.svg" alt="Логотип" loading="eager" />
          </div>
        </div>
        <div className="flex space-x-3">
          <a href="#menu" className="text-black hover:text-gray-600">
            МЕНЮ
          </a>
          <a
            href="https://yandex.ru/maps/24/veliky-novgorod/?ll=31.273868%2C58.516037&mode=poi&poi%5Bpoint%5D=31.273999%2C58.516561&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D215421611704&tab=reviews&z=17"
            className="text-black hover:text-gray-600"
          >
            ОТЗЫВЫ
          </a>
          <a href="#lunch" className="text-black hover:text-gray-600">
            ОБЕД
          </a>
          <a href="https://831437.restoplace.ws" className="text-black hover:text-gray-600">
            БРОНЬ
          </a>
        </div>
      </div>
    </nav>
  );
}
