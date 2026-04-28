import { useEffect, useMemo, useState } from 'react';
import Modal from './components/Modal';
import NavBar from './sections/NavBar';
import Hero from './sections/Hero';
import MenuSection from './sections/MenuSection';
import PromotionsSection from './sections/PromotionsSection';
import ContactsSection from './sections/ContactsSection';
import LunchSection from './sections/LunchSection';
import BanquetSection from './sections/BanquetSection';
import EventsSection from './sections/EventsSection';
import SocialSection from './sections/SocialSection';
import MapSection from './sections/MapSection';
import FooterSection from './sections/FooterSection';

export default function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const kitchenImages = useMemo(
    () => [
      { src: '/images/menu/mask-group15.jpg', alt: 'Блюдо из меню СЕО БАР' },
      { src: '/images/menu/mask-group14.jpg', alt: 'Блюдо из меню СЕО БАР' },
      { src: '/images/menu/mask-group13.jpg', alt: 'Блюдо из меню СЕО БАР' },
      { src: '/images/menu/mask-group12.jpg', alt: 'Блюдо из меню СЕО БАР' },
    ],
    []
  );

  const barImages = useMemo(
    () => [
      { src: '/images/menu/mask-group17.jpg', alt: 'Напиток из меню СЕО БАР' },
      { src: '/images/menu/mask-group19.jpg', alt: 'Напиток из меню СЕО БАР' },
      { src: '/images/menu/mask-group16.jpg', alt: 'Напиток из меню СЕО БАР' },
      { src: '/images/menu/mask-group18.jpg', alt: 'Напиток из меню СЕО БАР' },
    ],
    []
  );

  useEffect(() => {
    document.body.style.overflow = activeModal ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeModal]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveModal(null);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    const lazyImages = document.querySelectorAll<HTMLImageElement>('img.lazy');

    if (!('IntersectionObserver' in window)) {
      lazyImages.forEach((img) => {
        img.classList.remove('lazy');
        img.classList.add('loaded');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const img = entry.target as HTMLImageElement;
          const imageLoader = new Image();

          imageLoader.onload = () => {
            img.src = img.dataset.src || img.src;
            img.classList.remove('lazy');
            img.classList.add('loaded');

            const placeholder = img.closest('.img-placeholder');
            if (placeholder) {
              placeholder.classList.remove('img-placeholder');
            }
          };

          imageLoader.onerror = () => {
            img.classList.remove('lazy');
            const placeholder = img.closest('.img-placeholder');
            if (placeholder) {
              placeholder.classList.remove('img-placeholder');
            }
          };

          imageLoader.src = img.dataset.src || img.src;
          observerInstance.unobserve(img);
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.01,
      }
    );

    lazyImages.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const images = document.querySelectorAll<HTMLImageElement>('img');
    const cleanupCallbacks: Array<() => void> = [];

    const handleLoaded = (img: HTMLImageElement) => {
      img.classList.add('loaded');
      const placeholder = img.closest('.img-placeholder');
      if (placeholder) {
        placeholder.classList.remove('img-placeholder');
      }
    };

    const handleError = (img: HTMLImageElement) => {
      const placeholder = img.closest('.img-placeholder');
      if (placeholder) {
        placeholder.classList.remove('img-placeholder');
      }
    };

    images.forEach((img) => {
      if (img.complete && img.naturalHeight !== 0) {
        handleLoaded(img);
        return;
      }

      const onLoad = () => handleLoaded(img);
      const onError = () => handleError(img);

      img.addEventListener('load', onLoad);
      img.addEventListener('error', onError);

      cleanupCallbacks.push(() => {
        img.removeEventListener('load', onLoad);
        img.removeEventListener('error', onError);
      });
    });

    return () => {
      cleanupCallbacks.forEach((cleanup) => cleanup());
    };
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const criticalImages = [
        '/images/menu/mask-group15.jpg',
        '/images/menu/mask-group14.jpg',
        '/images/menu/mask-group17.jpg',
        '/images/menu/mask-group19.jpg',
      ];

      criticalImages.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }, 1000);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div className="main-container font-sans">
      <NavBar />
      <Hero />
      <MenuSection
        id="menu"
        text={
          <>
            Меню СЕО БАР акцентирует внимание на классической кухне Европы и Азии, добавляя в
            рецептуру блюд авторский подход и современные тренды.
          </>
        }
        buttonLabel="Меню Кухня"
        buttonHref="/files/Osnovnoe_menyu.pdf"
        images={kitchenImages}
      />
      <MenuSection
        text={
          <>
            Барная карта объединяет несколько разделов коктейлей: от классики до смелых экспериментов
            миксологов СЕО БАР, а также достойную коллекцию вин и крепких напитков с богатой историей.
            <br />
            <br />
            Оценить многогранность вкуса сезонных продуктов можно в спешлах от бренд-шефа и команды
            бартендеров.
          </>
        }
        buttonLabel="Меню Бар"
        buttonHref="/files/Barnaya_karta.pdf"
        images={barImages}
      />
      <ContactsSection />
      <PromotionsSection />
      <LunchSection />
      <BanquetSection />
      <EventsSection onOpenModal={(image) => setActiveModal(image)} />
      <SocialSection />
      <MapSection />
      <FooterSection />
      <Modal
        isOpen={Boolean(activeModal)}
        imageSrc={activeModal || ''}
        alt="События полный размер"
        onClose={() => setActiveModal(null)}
      />
    </div>
  );
}
