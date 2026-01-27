export default function MapSection() {
  return (
    <section className="mx-3 my-6 h-20 rounded-lg overflow-hidden">
      <iframe
        src="https://yandex.ru/map-widget/v1/?ll=31.278283%2C58.514747&mode=poi&poi%5Bpoint%5D=31.274018%2C58.516548&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D215421611704&z=16"
        frameBorder="0"
        allowFullScreen
        loading="lazy"
        className="w-full h-full"
        title="СЕО БАР на карте"
      ></iframe>
    </section>
  );
}
