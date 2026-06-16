export default function Hero() {
  return (
    <section className="relative h-[577px] mt-16 mx-3 rounded-xl overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src="/images/hero/head-30.png"
        alt="СЕО БАР Интерьер"
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl leading-tight mb-8 font-light">
          Сео Бар - стильный<br />
          коктейльный бар-клуб<br />
          <br />
          Работаем ежедневно<br />
          с 18:00
        </h1>
        <div className="space-y-4 w-full max-w-sm">
          <a
            href="/files/menu_shapka.pdf"
            target="_blank"
            rel="noreferrer"
            className="block bg-[#e3deda] text-[#2e2c2f] py-3 px-8 rounded-lg font-semibold hover:bg-[#d6cfca] transition duration-200"
          >
            Смотреть меню
          </a>
          <a
            href="https://831437.restoplace.ws"
            target="_blank"
            rel="noreferrer"
            className="block bg-[#e3deda] text-[#2e2c2f] py-3 px-8 rounded-lg font-semibold hover:bg-[#d6cfca] transition duration-200"
          >
            Забронировать стол
          </a>
        </div>
      </div>
    </section>
  );
}
