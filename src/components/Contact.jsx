import { content } from '../data/content'
import Reveal from './Reveal'

export default function Contact() {
  const { contact } = content

  return (
    <section id="contact" className="py-20 px-6 bg-brand">
      <Reveal
        effect="animate__fadeInUp"
        className="max-w-3xl mx-auto text-center text-white"
      >
        <h2 className="text-3xl font-bold">{contact.heading}</h2>
        <p className="mt-4 text-white/90">{contact.body}</p>

        <a
          href={`mailto:${contact.email}`}
          className="inline-block mt-8 rounded-full bg-white text-brand-dark font-semibold px-8 py-3 hover:bg-slate-100 transition-colors"
        >
          {contact.ctaLabel}
        </a>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-2 sm:gap-8 text-sm text-white/80">
          <span>{contact.email}</span>
          <span>{contact.phone}</span>
          <span>{contact.address}</span>
        </div>
      </Reveal>
    </section>
  )
}
