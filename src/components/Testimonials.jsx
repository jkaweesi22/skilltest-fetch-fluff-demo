import { content } from '../data/content'
import Reveal from './Reveal'

export default function Testimonials() {
  const { testimonials } = content

  return (
    <section id="testimonials" className="py-20 px-6 max-w-6xl mx-auto">
      <Reveal effect="animate__fadeInUp" className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900">{testimonials.heading}</h2>
      </Reveal>

      <div className="mt-12 grid sm:grid-cols-3 gap-8">
        {testimonials.items.map((t) => (
          <Reveal
            key={t.author}
            effect="animate__fadeIn"
            className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"
          >
            <p className="text-slate-700 leading-relaxed">“{t.quote}”</p>
            <p className="mt-4 font-semibold text-slate-900">{t.author}</p>
            <p className="text-sm text-slate-500">{t.role}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
