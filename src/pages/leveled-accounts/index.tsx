import classNames from "../../consts/classNames";
import data from "../../data/leveled-accounts.json";
import AccountCard from "../../components/level-account/accountCard";
import FastSimple from "../home/fastsimple";
import FAQ from "../home/faq";
import faqs from "../../data/faq.json";
import Players from "../home/players";
import agents from "../../data/game/agents.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";
const LeveledAccounts = () => {
  const headData = [
    {
      _id: 0,
      title: "Never Get Banned",
      description:
        "Our accounts are leveled by real humans, this means that they will never get banned",
    },
    {
      _id: 1,
      title: "Premium LP gains",
      description:
        "Enjoy High LP Gains on our highest MMR accounts and climb between ranks a lot faster",
    },
    {
      _id: 2,
      title: "Recovery Info",
      description:
        "If you ever lose access to the account, you can recover it. (On Request)",
    },
  ];
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
  return (
    <>
      <div className={`${classNames.containerClass} mt-10 lg:mt-20`}>
        <div className="mr-auto max-w-screen-sm">
          <h1 className="text-3xl md:text-5xl font-bold">
            <span className="text-indigo-500">Handleveled </span>
            LOL Smurf Accounts
          </h1>
          <div className="mt-2 leading-loose">
            Are you considering buying or starting a new main account in League
            of Legends? Our handleveled smurf accounts are the ideal choice.
            Each account is carefully leveled by our dedicated team, ensuring a
            0% ban rate and is fully prepared for immediate ranked play.
          </div>
          <div className="mt-4">
            <a href="#" className={`${classNames.btnClass}`}>
              Buy Now
            </a>
          </div>
        </div>
        <div className="mt-12 lg:mt-24 grid lg:grid-cols-3 gap-4 lg:gap-12">
          {headData.map((d: any, index: number) => (
            <div key={index} className="space-y-2">
              <h2 className="text-xl lg:text-2xl font-bold">{d.title}</h2>
              <p>{d.description}</p>
              <div className="w-36 h-3 rounded-lg bg-gradient-to-r from-fuchsia-600 to-indigo-500"></div>
            </div>
          ))}
        </div>
        <div className="mt-12 lg:mt-24">
          <div className="space-y-4">
            <label htmlFor="" className="text-xl">
              Select Server
            </label>
            <div className=" flex justify-start flex-wrap items-center gap-2">
              {data?.servers?.map((d: any, index: number) => (
                <button className={`${classNames.btnClass2}`} key={index}>
                  {d.name}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-4 mt-4">
            <label htmlFor="" className="text-xl">
              MMR
            </label>
            <div className=" flex justify-start flex-wrap items-center gap-2">
              {data?.MMR?.map((d: any, index: number) => (
                <button key={index} className={`${classNames.btnClass2}`}>
                  {d.title}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-4 mt-4">
            <label htmlFor="" className="text-xl">
              Level
            </label>
            <div className=" flex justify-start flex-wrap items-center gap-2">
              {data?.levels?.map((d: any, index: number) => (
                <button key={index} className={`${classNames.btnClass2}`}>
                  {d.level}
                </button>
              ))}
            </div>
          </div>
          {/* <div className="mt-8 lg:mt-16 grid gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-4">
            {data?.accounts?.map((d: any, index: number) => (
              <AccountCard {...d} key={index} />
            ))}
          </div> */}
          <div className="space-y-4 mt-4">
            <label htmlFor="" className="text-xl">
              Select Skin
            </label>
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
                    slidesPerView: 2.5,
                    spaceBetween: 10,
                  },
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 4.5,
                    spaceBetween: 20,
                  },
                  // when window width is >= 1024px
                  1024: {
                    slidesPerView: 5.5,
                    spaceBetween: 30,
                  },
                  // when window width is >= 1280px
                  1280: {
                    slidesPerView: 7.5,
                    spaceBetween: 30,
                  },
                }}
              >
                {agents.map((d: any, index: number) => {
                  return (
                    <SwiperSlide key={index} className="">
                      <img
                        src={d.image}
                        alt="IMG"
                        className="w-full opacity-75 hover:opacity-100 cursor-pointer"
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="mt-8 lg:mt-16 grid gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
              {agents?.map((d: any, index: number) => (
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
      </div>
      <FastSimple />
      <FAQ faqs={faqs} />
      <Players />
      <div className={`mt-10 lg:mt-20 ${classNames.containerClass}`}>
        <div className="space-y-4">
          <h4 className="text-2xl">What Are Handleveled LoL Accounts?</h4>
          <p>
            Handleveled League of Legends accounts are carefully advanced from
            level 1 to level 30 by our skilled players, ensuring they are
            prepared for immediate ranked play with fresh MMR. These accounts
            are leveled manually, avoiding the use of bots, which enhances their
            security and maintains their integrity. When you purchase one of
            these accounts, you can confidently dive straight into competitive
            ranked matches, knowing your account is both safe and primed for
            optimal performance, backed by a 0% ban rate guarantee.
          </p>
        </div>
        <div className="mt-12 space-y-4">
          <h4 className="text-2xl">
            Advantages of our League of Legends Handleveled Accounts
          </h4>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-1">
              <h6 className="text-xl">
                Lifetime Warranty on All LoL Handleveled Smurfs
              </h6>
              <p>
                We value our customers&apos; satisfaction and strive to build
                long-term relationships with them. That&apos;s why we are proud
                to offer a Lifetime Warranty on all of our League of Legends
                Handleveled Smurf accounts. This means that if there are any
                issues with your account, we will work with you to resolve them
                quickly and efficiently. We understand that purchasing a LoL
                Smurf account can be a significant investment, and we want to
                ensure that you feel confident and secure in your decision to
                choose us as your provider. With our Lifetime Warranty, you can
                trust that you are making a wise investment in your gaming
                experience. write it differently and better
              </p>
            </div>
            <div className="space-y-1">
              <h6 className="text-xl">Premium Quality Accounts</h6>
              <p>
                Our accounts are meticulously leveled by a team of professional
                players who adhere to strict guidelines to ensure the highest
                standards of safety and security. These guidelines include not
                engaging in in-game chat and maintaining both a strong KDA
                (Kill/Death/Assist ratio) and a positive game history. These
                measures are taken to preserve the integrity of your
                account&apos;s MMR (Matchmaking Rating), providing a solid
                foundation for your competitive play. This disciplined approach
                guarantees that the accounts you receive from us are not only
                safe but also primed for success in the gaming arena.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LeveledAccounts;
