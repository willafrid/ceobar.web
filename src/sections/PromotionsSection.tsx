import { useEffect, useMemo, useState } from 'react';
import SectionHeader from '../components/SectionHeader';

type Promotion = {
  image: string;
  title: string;
  subtitle: string;
};

const ROTATE_INTERVAL_MS = 10000;

export default function PromotionsSection() {
  const promotions = useMemo<Promotion[]>(
    () => [
      {
        image: '/images/promotions/promo-birthday.jpg',
        title: 'ДЕНЬ РОЖДЕНИЯ',
        subtitle:
          'Дарим десерт, при оформлении предварительного заказа бутылку игристого вина. Уточнить сроки действия акции: 606-066',
      },
      {
        image: '/images/promotions/promo-to-go.jpg',
        title: 'С СОБОЙ ВЫГОДНО',
        subtitle: 'Действует скидка 20% на основное меню кухни при заказе блюд навынос.',
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % promotions.length);
    }, ROTATE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [promotions.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + promotions.length) % promotions.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % promotions.length);
  };

  const current = promotions[activeIndex];

  return (
    <section className="bg-[#e3deda] rounded-xl mx-3 my-6 p-6">
      <SectionHeader title="Специальные предложения" />
      <p className="text-[#2e2c2f] text-sm leading-relaxed mb-6">
        Постоянные и сезонные акции СЕО БАР созданы, чтобы добавить вашему отдыху комфорта.
        Следите за обновлениями раздела: здесь мы публикуем актуальные и выгодные предложения.
      </p>

      <div className="relative rounded-xl overflow-hidden isolate">
        <div className="aspect-[4/3]">
          <img
            key={activeIndex}
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover promo-fade"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-x-4 bottom-4 bg-black/60 backdrop-blur-sm rounded-lg p-4">
          <h3 className="text-[#e3deda] text-lg font-semibold mb-1">{current.title}</h3>
          <p className="text-[#e3deda] text-xs leading-relaxed">{current.subtitle}</p>
        </div>

        <button
          type="button"
          onClick={handlePrev}
          aria-label="Предыдущая акция"
          className="absolute z-20 left-2 top-2 md:left-3 md:top-3 w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/45 hover:bg-white/65 transition text-[#2e2c2f] flex items-center justify-center"
        >
          <span className="text-xl md:text-2xl leading-none">&lsaquo;</span>
        </button>
        <button
          type="button"
          onClick={handleNext}
          aria-label="Следующая акция"
          className="absolute z-20 right-2 top-2 md:right-3 md:top-3 w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/45 hover:bg-white/65 transition text-[#2e2c2f] flex items-center justify-center"
        >
          <span className="text-xl md:text-2xl leading-none">&rsaquo;</span>
        </button>
      </div>
    </section>
  );
}
