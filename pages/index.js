import Link from "@/components/Link";
import { PageSEO } from "@/components/SEO";
import Tag from "@/components/Tag";
import siteMetadata from "@/data/siteMetadata";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import formatDate from "@/lib/utils/formatDate";
import El from "@/data/El";
import Sl from "@/data/Sl";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import styles from "@/layouts/style";
import hands from "@/data/hero.png";
import Image from "next/image";
import girl from "@/data/hero.png";

import NewsletterForm from "@/components/NewsletterForm";

const MAX_DISPLAY = 5;

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <>
      <div>
        <PageSEO
          title={`Projects - ${siteMetadata.author}`}
          description={siteMetadata.description}
        />
        <div className={`bg-primary ${styles.flexStart} `}>
          <div className={`${styles.boxWidth} `}>
            <Hero />
          </div>
        </div>

        <section id="home" className={`flex flex-col md:flex-row  `}>
          <div className={`flex-1 ${styles.flexStart} px-6} flex-col xl:px-0 `}>
            <h1 className="mt-2 mb-2 mr-1 text-2xl font-extrabold leading-9 sm:text-4xl sm:leading-10 md:mt-1 md:mb-1 md:text-3xl md:leading-14 text-gradient">
              I’ve drawn from my own 7 years of experience learning guitar.
            </h1>
            <p className={`${styles.paragraph} mt-5 mb-4 max-w-[470px]`}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>

          <div
            className={`flex flex-1 ${styles.flexCenter} relative my-10 md:my-0`}
          >
            <Image
              src={girl}
              alt="robot"
              className="relative z-[5] max-h-20 w-[100%]"
            />
          </div>
        </section>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              New: Practical Guitar For Beginners Course!
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
          <div className="container py-12">
            <div className="-m-4 flex flex-wrap">
              {El.map((d) => (
                <Card
                  key={d.title}
                  title={d.title}
                  description={d.description}
                  imgSrc={d.imgSrc}
                  href={d.href}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Nuevo: Curso Práctico De Guitarra Para Novatos
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
          <div className="container py-12">
            <div className="-m-4 flex flex-wrap">
              {Sl.map((d) => (
                <Card
                  key={d.title}
                  title={d.title}
                  description={d.description}
                  imgSrc={d.imgSrc}
                  href={d.href}
                />
              ))}
            </div>
          </div>
        </div>
    </>
  );
}
