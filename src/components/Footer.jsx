import { content } from '../data/content'
import { attributions } from '../data/attributions'

export default function Footer() {
  return (
    <footer className="py-10 px-6 text-center text-sm text-slate-500 border-t border-slate-200">
      <p>{content.footer.text}</p>

      {attributions.length > 0 && (
        <p className="mt-2 text-xs text-slate-400">
          Photos by{' '}
          {attributions.map((a, i) => (
            <span key={a.photographerUrl}>
              <a
                href={a.photographerUrl}
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-slate-600"
              >
                {a.photographer}
              </a>
              {i < attributions.length - 1 ? ', ' : ' '}
            </span>
          ))}
          on{' '}
          <a
            href="https://unsplash.com/?utm_source=client-demo-site&utm_medium=referral"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-slate-600"
          >
            Unsplash
          </a>
        </p>
      )}
    </footer>
  )
}
