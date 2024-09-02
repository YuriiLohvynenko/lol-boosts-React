import { useEffect, useRef } from "react";
import classNames from "../../consts/classNames";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaSearch, FaTimes } from "react-icons/fa";
import skinAccounts from "../../data/skin-accounts.json";

const ModalSkinSelect = (props: any) => {
  const { isOpen, setOpen } = props;
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        (1 - progress).toString()
      );
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset overflow when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-indigo-950 py-10 z-50 overflow-auto">
          <button
            className="p-2 rounded-full absolute right-4 text-indigo-500 hover:text-indigo-300 top-4"
            onClick={() => setOpen(false)}
          >
            <FaTimes className="text-2xl" />
          </button>
          <div className={`${classNames.containerClass}`}>
            {/* POPULAR SKIN */}
            <div className="space-y-2">
              <label htmlFor="">Popular Skin</label>
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                breakpoints={{
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  // when window width is >= 1024px
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  },
                  // when window width is >= 1280px
                  1280: {
                    slidesPerView: 7,
                    spaceBetween: 30,
                  },
                }}
              >
                {skinAccounts.map((d: any, index: number) => {
                  return (
                    <SwiperSlide key={index} className="">
                      <img
                        src={d.image}
                        alt="IMG"
                        className="w-full opacity-75 hover:opacity-100 cursor-pointer -translate-x-1/2"
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="flex justify-center py-6">
              <div className="relative">
                <FaSearch className="absolute top-1/2 -translate-y-1/2 left-4 z-10 text-indigo-500" />
                <input
                  className={`${classNames.inputClass} !ps-10 lg:w-72 border border-indigo-500`}
                  placeholder={`Search through ${skinAccounts.length} champions...`}
                />
              </div>
            </div>
            <div className="mt-8 grid gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
              {skinAccounts?.map((d: any, index: number) => (
                <div
                  className="flex justify-start cursor-pointer items-center rounded-tl-full rounded-bl-full rounded-tr-2xl bg-gray-900 hover:bg-gray-800"
                  key={index}
                >
                  <img
                    src={d.image}
                    className="w-20 h-20 rounded-full border-4 border-indigo-500"
                  />
                  <div className="flex-1 text-center text-xl">{d.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ModalSkinSelect;
