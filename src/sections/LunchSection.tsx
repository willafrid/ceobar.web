import SectionHeader from '../components/SectionHeader';

export default function LunchSection() {
  return (
    <section id="lunch" className="bg-[#e3deda] rounded-xl mx-3 my-6 p-6">
      <SectionHeader title="ОБЕД В СЕО БАР" />

      <div className="aspect-[3/1.8] bg-gray-200 rounded-lg overflow-hidden mb-4 img-placeholder">
        <img
          src="/pic/mask-group20.jpg"
          alt="Обед в СЕО БАР"
          className="w-full h-full object-cover lazy"
          loading="lazy"
        />
      </div>

      <p className="text-[#2e2c2f] text-sm leading-relaxed">
        Обеденные сеты доступны к заказу в четверг и пятницу с 12:00 до 16:00
        <br />
        Обеденный сет включает салат, суп, горячее, напиток. Стоимость 500 рублей.
        <br />
        Меню ежедневно обновляется, актуальную информацию можно найти в наших социальных сетях.
      </p>
    </section>
  );
}
