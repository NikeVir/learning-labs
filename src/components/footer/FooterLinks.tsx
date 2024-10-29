"use client";
import React from "react";
import Link from 'next/link';
import Image from 'next/image';

type IconProps = React.SVGProps<SVGSVGElement>;
export default function FooterLinks() {
  const navigation = {
    company: [
      { name: "About us", href: "/About" },
      { name: "Careers", href: "/Proxies/" },
      { name: "Our Advisors", href: "/Proxies/ipv6" },
      { name: "Contact Us", href: "/Proxies/ipv6" },
    ],
    features: [
      { name: "Maturity assessment tools", href: "/" },
      { name: "Immersive Business simulations", href: "/" },
      { name: " On-demand research & consultation", href: "/" },
      { name: " Custom learning program development", href: "/" },

    ],
    developers: [
      { name: "Banking & Insurance", href: "/industries/Bank&Finance" },
      { name: "Hospitality", href: "/industries/HealthCare" },
      { name: "Healthcare", href: "/industries/Hospitality" },
      { name: "Pharmaceutical", href: "/industries/Pharmaceutical" },
      { name: "Retail", href: "/industries/Retail" },
      { name: "Information Technology", href: "/industries/Retail" },
    ],
    resources: [
      { name: "Benefits", href: "/research-synopsis" },
      { name: " OLL community portal", href: "/Communities" },
      { name: "FAQ", href: "/refund-policy" },
    ],
    social: [
      {
        name: "Gmail",
        href: "#",
        icon: (props: IconProps) => <Image src="/images/logos/insta.svg" alt="Gmail" height={400} width={400} />,
      },
      {
        name: "Telegram",
        href: "#",
        icon: (props: IconProps) => <Image src="/images/logos/facebook.svg" alt="Telegram" height={400} width={400} />,
      },
      {
        name: "Discord",
        href: "#",
        icon: (props: IconProps) => <Image src="/images/logos/twitter.svg" alt="Discord" height={400} width={400} />,
      },
      {
        name: "Message",
        href: "https://www.linkedin.com/company/the-organization-learning-labs/",
        icon: (props: IconProps) => <Image src="/images/logos/linkedin.svg" alt="Message" height={400} width={400} />,
      },
      {
        name: "Discord",
        href: "#",
        icon: (props: IconProps) => <Image src="/images/logos/discord.svg" alt="Discord" height={400} width={400} />,
      },

    ],
  };

  return (
    <footer aria-labelledby="footer-heading" className="">

      <div className="mx-auto   max-w-7xl px-6 pb-8 md:pt-8 xl:pt-16 sm:pt-24 lg:px-8 ">
        <div className="max-md:flex max-md:flex-col-reverse max-md:gap-20 lg:grid sm:grid-cols-3 lg:gap-8">
          <div className="  flex flex-col items-center justify-center  text-center lg:text-left">
            <div className="flex items-center -gap-10">
              {/* <img src="/images/footer/footerlogo.svg" className="w-[70px] h-[70px]" alt="Logo" /> */}
              <img src="/images/whitelogo.svg" className=" relative " alt="Logo" />

            </div>

            <div className="flex justify-center items-center mt-2  space-x-1 lg:justify-start">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-40  hover:text-gray-500 h-9 w-9 p-2 flex items-center "
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16  grid grid-cols-2 lg:gap-8 lg:col-span-2 lg:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-[16px] font-bold leading-6  text-[#FEBF00]">
                Company
                </h3>
                <ul role="list" className="mt-4 space-y-2">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm capitalize  leading-5 text-[#F4F4F4] hover:text-gray-300"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-[16px] font-bold leading-6  text-[#FEBF00]">
                Solutions
                </h3>
                <ul role="list" className="mt-4 space-y-2">
                  {navigation.features.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm capitalize leading-5 text-[#F4F4F4] hover:text-gray-300"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-[16px] font-bold leading-6  text-[#FEBF00]">
                Industries in focus
                </h3>
                <ul role="list" className="mt-4 space-y-2">
                  {navigation.developers.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm capitalize leading-5 text-[#F4F4F4] hover:text-gray-300"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-[16px] font-bold leading-6 text-[#FEBF00]">
                OLL community
                </h3>
                <ul role="list" className="mt-4 space-y-2">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm capitalize leading-5 text-[#F4F4F4] hover:text-gray-300"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
