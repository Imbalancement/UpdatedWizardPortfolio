import Image from "next/image";
import bg from "../../../../public/background/snowymountains.jpg";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            summon the mage
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Enter the frost-bound circle of enchantment, where your words
            shimmer like frost-laden whispers in the winter night. Whether you
            seek to craft icy collaborations, unravel frozen mysteries, or share
            tales of frosted adventures, your messages become treasured scrolls
            in this realm of snow and starlight. Use the form below to send your
            frostbitten missives through the ethereal winter winds, and await
            the chill of magic as it whispers back in response.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
