import SectionHeader from '../components/SectionHeader';

export default function ContactsSection() {
  return (
    <section className="bg-[#e3deda] rounded-xl mx-3 my-6 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <SectionHeader title="КОНТАКТЫ" />
          <div className="space-y-4 text-xs">
            <div>
              <p className="font-semibold text-[#2e2c2f]">Служба заботы: отзывы и предложения</p>
              <p>Алина Левина</p>
              <p>+7 (911) 639-99-26</p>
            </div>
            <div>
              <p className="font-semibold">Организация концертов, выступлений, шоу-программ</p>
              <p>Милана Кошелева</p>
              <p>+7 (995) 574-79-69</p>
            </div>
            <div>
              <p className="font-semibold">Корпоративы, закрытые мероприятия</p>
              <p>Ирина Арно</p>
              <p>+7 (951) 723-25-56</p>
            </div>
          </div>
          <a
            href="https://831437.restoplace.ws"
            target="_blank"
            rel="noreferrer"
            className="block mt-4 bg-[#db9e5e] text-[#e3deda] py-3 px-6 rounded-lg font-semibold hover:bg-[#c98f50] transition duration-200 text-center"
          >
            Бронирование
          </a>
        </div>
        <div>
          <SectionHeader title="РЕЖИМ РАБОТЫ" />
          <div className="bg-gray-200 rounded-lg h-40 mb-4 overflow-hidden img-placeholder">
            <img
              src="/images/sections/mask-group12.svg"
              alt="Интерьер"
              className="w-full h-full object-cover lazy"
              loading="lazy"
            />
          </div>
          <div className="text-center text-xs font-semibold">
            <p>ул. Троицкая, 3</p>
            <br />
            <p>ЧТ, ВС.........12:00 - 01:00</p>
            <p>ПТ, СБ..........12:00 - 05:00</p>
            <p>ПН, ВТ, СР..........ВЫХОДНЫЕ ДНИ</p>
            <br />
            <p className="font-semibold">Бронь столов:</p>
            <p>+7 (911) 600 60 66</p>
            <p className="font-semibold">Почта:</p>
            <p>ceobar.mng@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
