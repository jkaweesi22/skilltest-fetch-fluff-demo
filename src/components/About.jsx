import { content } from '../data/content'
import Photo from './Photo'
import Reveal from './Reveal'

export default function About() {
  const { about } = content

  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      <Reveal effect="animate__fadeInUp" className="grid sm:grid-cols-2 gap-12 items-center">
        <Photo
          src={about.image}
          alt={about.imageAlt}
          className="w-full h-80 rounded-2xl shadow-lg order-2 sm:order-1"
        />

        <div className="order-1 sm:order-2">
          <h2 className="text-3xl font-bold text-slate-900">{about.heading}</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">{about.body}</p>

          <dl className="mt-8 grid grid-cols-3 gap-4">
            {about.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-bold text-brand">{stat.value}</dd>
                <dd className="text-sm text-slate-500">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  )
}
