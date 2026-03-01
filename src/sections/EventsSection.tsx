import { useEffect, useMemo, useState } from 'react';
import SectionHeader from '../components/SectionHeader';

type EventsSectionProps = {
  onOpenModal: (image: string) => void;
};

type EventItem = {
  image: string;
  title: string;
  subtitle: string;
};

const ROTATE_INTERVAL_MS = 10000;

export default function EventsSection({ onOpenModal }: EventsSectionProps) {
  const events = useMemo<EventItem[]>(
    () => [
      {
        image: '/pic/af1.jpg',
        title: 'ЖИВЫЕ ВЫСТУПЛЕНИЯ',
        subtitle: 'Лайв-сеты и музыка каждую неделю с 23:00.',
      },
      {
        image: '/pic/af2.jpg',
        title: 'ДИДЖЕЙ-СЕТЫ',
        subtitle: 'Пятница и суббота — танцевальные ночи в СЕО БАР.',
      },
      {
        image: '/pic/af3.jpg',
        title: 'ВИНИЛОВЫЕ ВЕЧЕРА',
        subtitle: 'Тёплая атмосфера и редкие подборки винила.',
      },
      {
        image: '/pic/af4.jpg',
        title: 'КОНЦЕРТНЫЕ НОЧИ',
        subtitle: 'Еженедельные выступления артистов и приглашённых гостей.',
      },
      {
        image: '/pic/af5.jpg',
        title: 'АТМОСФЕРНЫЕ СЕТЫ',
        subtitle: 'Музыкальные форматы для позднего вечера и ночного отдыха.',
      },
      {
        image: '/pic/af6.jpg',
        title: 'СПЕЦИАЛЬНЫЕ ПРОГРАММЫ',
        subtitle: 'Отдельные тематические вечера с обновляемым лайн-апом.',
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % events.length);
    }, ROTATE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [events.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % events.length);
  };

  const current = events[activeIndex];

  return (
    <section className="bg-[#e3deda] rounded-xl mx-3 my-6 p-6">
      <SectionHeader title="СОБЫТИЯ" />
      <p className="text-[#2e2c2f] text-sm leading-relaxed mb-6">
        В четверг, пятницу и субботу зал СЕО БАР превращается в концертную площадку с живыми
        выступлениями, виниловыми мелодиями и диджеями с 23:00. Лайн-ап обновляется еженедельно —
        следите за новостями!
      </p>

      <div className="relative rounded-xl overflow-hidden isolate">
        <div className="aspect-[4/5]">
          <img
            key={activeIndex}
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover promo-fade clickable-image"
            loading="lazy"
            onClick={() => onOpenModal(current.image)}
          />
        </div>

        <button
          type="button"
          onClick={handlePrev}
          aria-label="Предыдущее событие"
          className="absolute z-20 left-2 top-2 md:left-3 md:top-3 w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/45 hover:bg-white/65 transition text-[#2e2c2f] flex items-center justify-center"
        >
          <span className="text-xl md:text-2xl leading-none">&lsaquo;</span>
        </button>
        <button
          type="button"
          onClick={handleNext}
          aria-label="Следующее событие"
          className="absolute z-20 right-2 top-2 md:right-3 md:top-3 w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/45 hover:bg-white/65 transition text-[#2e2c2f] flex items-center justify-center"
        >
          <span className="text-xl md:text-2xl leading-none">&rsaquo;</span>
        </button>
      </div>
    </section>
  );
}
