// Single source of truth for site copy and images.
// Customize this file per client — most of the site's content lives here,
// not scattered across components. Toggle `sections` to add/remove
// sections without touching App.jsx.

// Images live in public/images/ (see scripts/fetch-unsplash.mjs) and must be
// referenced through BASE_URL so they resolve correctly once deployed under
// https://<owner>.github.io/<repo>/ — a plain "/images/x.jpg" would 404 there.
const img = (name) => `${import.meta.env.BASE_URL}images/${name}`

export const content = {
  business: {
    name: 'Fetch & Fluff',
    tagline: 'Boutique dog grooming, done gently',
  },

  sections: {
    about: true,
    services: true,
    testimonials: true,
    contact: true,
  },

  nav: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],

  hero: {
    heading: 'Grooming your dog will actually enjoy',
    subheading:
      'Calm, one-on-one appointments — no cages, no rush, just a happy pup and a good trim.',
    ctaLabel: 'Book an appointment',
    ctaHref: '#contact',
    image: img('hero.jpg'),
    imageAlt: 'A freshly groomed dog sitting happily',
  },

  about: {
    heading: 'About Fetch & Fluff',
    body: "We started Fetch & Fluff because our own anxious rescue hated every groomer we tried. Now we run a calm, appointment-only studio where your dog gets full attention from one groomer, start to finish — no crates, no all-day drop-offs.",
    image: img('about.jpg'),
    imageAlt: 'Groomer gently brushing a dog',
    stats: [
      { value: '6+', label: 'Years grooming' },
      { value: '900+', label: 'Happy dogs' },
      { value: '5.0/5', label: 'Average rating' },
    ],
  },

  services: {
    heading: 'Services',
    subheading: 'Every appointment is one-on-one — your dog, one groomer, no rush.',
    items: [
      {
        title: 'Full Groom',
        description: 'Bath, cut, nails, ears, and a gentle blow-dry tailored to breed and coat.',
        icon: '✂️',
      },
      {
        title: 'Bath & Tidy',
        description: 'A quick refresh between full grooms — bath, brush-out, and a light trim.',
        icon: '🛁',
      },
      {
        title: 'Anxious Dog Sessions',
        description: 'Extra time, no clippers if needed, and breaks whenever your dog wants one.',
        icon: '🐾',
      },
    ],
  },

  testimonials: {
    heading: 'What dog owners say',
    items: [
      {
        quote: 'First groomer our rescue has ever actually been relaxed with. Worth every penny.',
        author: 'Marissa T.',
        role: 'Owner of Biscuit',
      },
      {
        quote: 'One-on-one appointments make such a difference. No more all-day boarding just for a haircut.',
        author: 'Dev P.',
        role: 'Owner of Nala',
      },
      {
        quote: 'Easy to book, always on time, and my dog comes home happy instead of stressed.',
        author: 'Colleen W.',
        role: 'Owner of Otis',
      },
    ],
  },

  contact: {
    heading: 'Book your dog in',
    body: "We'll text you back the same day to confirm a time.",
    email: 'hello@fetchandfluff.example',
    phone: '(555) 019-4488',
    address: '48 Elm St, Rivertown, USA',
    ctaLabel: 'Request an appointment',
  },

  footer: {
    text: `© ${new Date().getFullYear()} Fetch & Fluff. All rights reserved.`,
  },
}
