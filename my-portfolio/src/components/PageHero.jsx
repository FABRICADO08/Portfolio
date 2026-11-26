// Shared banner for inner pages, matching the home page hero treatment.
export default function PageHero({ id = 'page-title', kicker, title, accent, children }) {
  return (
    <section className="d-page-hero" aria-labelledby={id}>
      <div className="d-hero-bg" aria-hidden="true">
        <span className="d-hero-glass" />
        <span className="d-hero-streak d-hero-streak-a" />
      </div>
      <div className="content-width d-page-hero-inner">
        {kicker && <p className="d-kicker">{kicker}</p>}
        <h1 id={id}>{title}{accent && <> <span>{accent}</span></>}</h1>
        {children && <p className="d-hero-sub">{children}</p>}
      </div>
    </section>
  )
}
