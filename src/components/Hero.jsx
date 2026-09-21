import { content } from '../data/content'
import Photo from './Photo'

export default function Hero() {
  const { hero } = content

  return (
    <section
      id="top"
      className="pt-32 pb-20 px-6 max-w-6xl mx-auto grid sm:grid-cols-2 gap-12 items-center"
    >
      <div className="animate__animated animate__fadeInLeft">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
          {hero.heading}
        </h1>
        <p className="mt-6 text-lg text-slate-600">{hero.subheading}</p>
        <a
          href={hero.ctaHref}
          className="inline-block mt-8 rounded-full bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-3 transition-colors"
        >
          {hero.ctaLabel}
        </a>
      </div>

      <Photo
        src={hero.image}
        alt={hero.imageAlt}
        className="animate__animated animate__fadeInRight w-full h-80 sm:h-96 rounded-2xl shadow-xl"
      />
    </section>
  )
}
