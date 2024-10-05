import React from "react";
import ItemLayout from "./ItemLayout";
import Image from "next/image";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Frost Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            In the wintery realms of web development, I wield the frost-touched
            tools of my craft. JavaScript is the icy core of my enchantments,
            with React.js and Next.js as the shimmering orbs guiding my way.
            These frozen frameworks help me create seamless, frost-kissed
            portals (websites) that bridge distant realms (users) across the
            vast digital expanse. The Jamstack's ancient frost runes allow me to
            craft experiences as sharp and cold as winter’s breath—fast, secure,
            and dynamic. Each creation is etched in frost and crystal, a balance
            of function and enchanting design. Join me as I continue to shape
            new, winter-bound spells and technologies that sculpt the future of
            the web.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            Multiple <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-7 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/??username=Imbalancement&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="Imbalancement"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-5 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=Imbalancement&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="Imbalancement"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=aws,css,firebase,git,github,graphql,html,js,linux,nextjs,nodejs,npm,react,redux,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="Imbalancement"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
