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
              I’ve drawn from my own 7 years of experience of learning, playing, and teaching the guitar.
            </h1>
            <p className={`${styles.paragraph} mt-5 mb-4 max-w-[470px]`}>
            Teaching myself to play the guitar was a long journey of trial and eroor - figuring out what worked, what didn't, what was important, and what was not, was by far the most dificult aspect of the journey. In these free lessons, I have combined the most essential concepts you need to learn and practice to advance quickly in your guitar-playing journey. I hope these lessons will be ablessing to you, and if they are, please be sure to share this website with others!
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
            Skip the unessential parts and get straight to the good stuff with these practical guitar study guides!
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
            Sáltate las partes no esenciales y ve directamente a lo bueno con estas prácticas guías de estudio de la guitarra!
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
