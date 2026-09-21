import { content } from '../data/content'
import Reveal from './Reveal'

export default function Services() {
  const { services } = content

  return (
    <section id="services" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <Reveal effect="animate__fadeInUp" className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">{services.heading}</h2>
          <p className="mt-4 text-slate-600">{services.subheading}</p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-3 gap-8">
          {services.items.map((item, i) => (
            <Reveal
              key={item.title}
              effect="animate__zoomIn"
              className={`bg-white rounded-2xl p-8 shadow-sm border border-slate-100 ${
                i === 1 ? 'animate__delay-1s' : i === 2 ? 'animate__delay-2s' : ''
              }`}
            >
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-4 font-semibold text-lg text-slate-900">{item.title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
