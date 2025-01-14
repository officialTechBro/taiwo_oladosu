import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data/data";
import MagicButton from "@/components/ui/magic-button";
import Link from "next/link";

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-fuchsia-600">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:taiwooladosu1@gmail.com" >
          <MagicButton
            text="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center px-6 gap-6">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {year} | Taiwo Oladosu
        </p>

        <div className="flex items-center md:gap-3 gap-6 ">
          {socialMedia.map((info) => (
            <Link
                href={info.link}
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;