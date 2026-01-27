import type { ReactNode } from 'react';

type MenuSectionProps = {
  id?: string;
  text: ReactNode;
  buttonLabel: string;
  buttonHref: string;
  images: { src: string; alt: string }[];
};

export default function MenuSection({ id, text, buttonLabel, buttonHref, images }: MenuSectionProps) {
  return (
    <section id={id} className="bg-[#e3deda] rounded-xl mx-3 my-6 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <p className="text-[#2e2c2f] text-sm leading-relaxed mb-6">{text}</p>
          <a
            href={buttonHref}
            target="_blank"
            rel="noreferrer"
            className="block bg-[#db9e5e] text-[#e3deda] py-3 px-6 rounded-lg font-semibold hover:bg-[#c98f50] transition duration-200 text-center"
          >
            {buttonLabel}
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {images.map((image) => (
            <div
              key={image.src}
              className="aspect-square w-full bg-gray-200 rounded-lg overflow-hidden img-placeholder"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover lazy"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
