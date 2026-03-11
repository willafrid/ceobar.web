import { useEffect, useMemo, useState } from 'react';
import SectionHeader from '../components/SectionHeader';

type EventsSectionProps = {
  onOpenModal: (image: string) => void;
};

const ROTATE_INTERVAL_MS = 10000;

export default function EventsSection({ onOpenModal }: EventsSectionProps) {
  const posters = useMemo(() => {
    const modules = import.meta.glob('/src/assets/af*.jpg', {
      eager: true,
      import: 'default',
    });

    return Object.entries(modules)
      .sort(([a], [b]) => a.localeCompare(b, 'en', { numeric: true }))
      .map(([, url]) => url as string);
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const postersCount = posters.length;

  useEffect(() => {
    if (postersCount < 2) {
      return;
    }
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % postersCount);
    }, ROTATE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [postersCount]);

  const handlePrev = () => {
    if (postersCount === 0) {
      return;
    }
    setActiveIndex((prev) => (prev - 1 + postersCount) % postersCount);
  };

  const handleNext = () => {
    if (postersCount === 0) {
      return;
    }
    setActiveIndex((prev) => (prev + 1) % postersCount);
  };

  const current = posters[activeIndex] ?? posters[0];

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
          {current ? (
            <img
              key={activeIndex}
              src={current}
              alt={`Афиша ${activeIndex + 1}`}
              className="w-full h-full object-cover promo-fade clickable-image"
              loading="lazy"
              onClick={() => onOpenModal(current)}
            />
          ) : (
            <div className="w-full h-full bg-[#d8d2cd]" />
          )}
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
