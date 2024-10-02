"use client";
import React from "react";
import Link from 'next/link';
import Image from 'next/image';

type IconProps = React.SVGProps<SVGSVGElement>;
export default function FooterLinks() {
  const navigation = {
    company: [
      { name: "About", href: "/About" },
      { name: "Careers", href: "/Proxies/" },
      { name: "Affiliates", href: "/Proxies/ipv6" },
      { name: "Press", href: "/Proxies/ipv6" },
      { name: "Investers", href: "/Proxies/ipv6" },
      { name: "Legal & Privacy", href: "/Proxies/ipv6" },
    ],
    features: [
      { name: "Wallet", href: "/contact-us" },
      { name: "Card", href: "/Ethics" },
      { name: "Dashboard", href: "/FAQ" },
      { name: "Portfolio", href: "/Blog?text=guide" },

    ],
    developers: [
      { name: "Cloud", href: "/Solutions/ad-verification" },
      { name: "Wallet SDK", href: "/Solutions/social-media" },
      { name: "API Access", href: "/Solutions/cyber-security" },
    ],
    resources: [
      { name: "Blog", href: "/Blog" },
      { name: "Help & Support", href: "/Communities" },
      { name: "Customers Stories", href: "/refund-policy" },
      { name: "FAQ", href: "/FairUsagePolicy" },
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
        icon: (props: IconProps) => <Image src="/images/logos/facebook.svg" alt="Telegram"  height={400} width={400}/>,
      },
      {
        name: "Discord",
        href: "#",
        icon: (props: IconProps) => <Image src="/images/logos/twitter.svg" alt="Discord" height={400} width={400} />,
      },
      {
        name: "Message",
        href: "#",
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

      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 ">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="  flex flex-col items-center justify-center  text-center lg:text-left">
            <div className="flex items-center -gap-10">
            <img src="/images/footer/footerlogo.svg" className="w-[70px] h-[70px]" alt="Logo" />
            <img src="/images/logos/logowhite.svg" className=" relative -left-16" alt="Logo" />
              
            </div>
            <div className="mt-5 flex flex-col gap-4">
           
            </div>
            <div className="flex justify-center items-center  space-x-1 lg:justify-start">
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
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
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
                        className="text-sm capitalize  leading-5 text-[#F4F4F4] hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-[16px] font-bold leading-6  text-[#FEBF00]">
                  Features
                </h3>
                <ul role="list" className="mt-4 space-y-2">
                  {navigation.features.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm capitalize leading-5 text-[#F4F4F4] hover:text-gray-900"
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
                  Developers
                </h3>
                <ul role="list" className="mt-4 space-y-2">
                  {navigation.developers.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm capitalize leading-5 text-[#F4F4F4] hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-[16px] font-bold leading-6 text-[#FEBF00]">
                  Resources
                </h3>
                <ul role="list" className="mt-4 space-y-2">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm capitalize leading-5 text-[#F4F4F4] hover:text-gray-900"
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
