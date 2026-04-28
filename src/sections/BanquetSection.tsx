import SectionHeader from '../components/SectionHeader';

export default function BanquetSection() {
  return (
    <section className="relative mx-3 my-6 rounded-xl overflow-hidden">
      <img
        src="/images/sections/mask-group21.svg"
        alt="Банкеты и мероприятия"
        className="absolute inset-0 w-full h-full object-cover lazy"
        loading="lazy"
      />
      <div className="relative z-10 flex flex-col h-full p-4 gap-4">
        <SectionHeader title="БАНКЕТЫ И МЕРОПРИЯТИЯ" className="!mb-0 !bg-[#2e2c2f]/70" />
        <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4">
          <p className="text-[#e3deda] text-sm leading-relaxed">
            - Банкетное предложение действует для компаний от 10 человек
            <br />
            - Индивидуальный подход к каждой идее и детальное планирование мероприятия.
            <br />
            - Профессиональное сопровождение от опытной команды на всех этапах.
            <br />
            - Cтильное оформление зала.
            <br />
            - Гибкие условия бронирования, удобная парковка и дополнительные бонусы для особых случаев.
          </p>
        </div>
        <a
          href="/files/Banketnoe_Menyu.pdf"
          target="_blank"
          rel="noreferrer"
          className="block bg-[#e3deda] text-[#2e2c2f] py-3 px-6 rounded-lg font-semibold hover:bg-[#d6cfca] transition duration-200 text-center"
        >
          Банкетное меню
        </a>
      </div>
    </section>
  );
}
