import { getAllPosts } from '../../../lib/posts'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = { params: Promise<{ category: string }> }

const CATEGORY_MAP: Record<string, { label: string; desc: string; keywords: string[] }> = {
  'writing-craft':  { label: 'Writing Craft',          desc: 'Best books on creative writing, storytelling, structure & voice', keywords: ['creative writing','storytelling','writing craft','fiction writing','story structure','voice','narrative'] },
  'design':         { label: 'Design Books',            desc: 'Best graphic design, UI/UX & visual design books',               keywords: ['graphic design','design book','visual design','ui ux','branding','typography','layout'] },
  'photography':    { label: 'Photography',             desc: 'Best photography books on technique, eye & composition',         keywords: ['photography','photo','composition','lightroom','camera','portrait','landscape photo'] },
  'creativity':     { label: 'Creativity',              desc: 'Best books on creativity, mindset, process & inspiration',       keywords: ['creativity','creative','inspiration','creative process','creative thinking','innovation'] },
  'fiction':        { label: 'Inspiring Fiction',       desc: 'Best literary fiction novels & science fiction books',           keywords: ['fiction','literary fiction','novel','literature','sci-fi','science fiction','fantasy'] },
  'marketing':      { label: 'Brand & Marketing',       desc: 'Best marketing books for brand storytelling & strategy',         keywords: ['marketing','brand','branding','advertising','copywriting for marketing','growth','content marketing'] },
  'psychology':     { label: 'Psychology',              desc: 'Best psychology books on mind, behavior & mental health',        keywords: ['psychology','best psychology','human behavior','cognitive','mental health books','mind'] },
  'biography':      { label: 'Biographies & Memoirs',   desc: 'Best biographies and memoirs of inspiring people',              keywords: ['biography','memoir','biographies','life story','autobiography','true story'] },
  'art':            { label: 'Art Books',               desc: 'Best art books for artists, painters & illustrators',           keywords: ['art book','best art','painting','illustration','drawing','art history','fine art'] },
  'copywriting':    { label: 'Copywriting',             desc: 'Best copywriting books for persuasive writing & ads',           keywords: ['copywriting','best copywriting','copywriter','persuasive writing','sales copy','advertising copy'] },
  'screenwriting':  { label: 'Screenwriting',           desc: 'Best screenwriting books for film, TV & script writing',        keywords: ['screenwriting','screenplay','script writing','film writing','television writing','story beats'] },
  'architecture':   { label: 'Architecture & Design',   desc: 'Best architecture and interior design books',                   keywords: ['architecture','interior design','architecture book','building design','architectural','space design'] },
  'music':          { label: 'Music & Songwriting',     desc: 'Best music books on songwriting, theory & creativity',          keywords: ['songwriting','music book','music theory','songwriting book','musician','song composition'] },
  'poetry':         { label: 'Poetry',                  desc: 'Best poetry books, collections & poetry writing guides',        keywords: ['poetry','best poetry','poem','poetry collection','poetry writing','verse','poet'] },
  'business':       { label: 'Business Books',          desc: 'Best business books on leadership, entrepreneurship & strategy', keywords: ['business book','best business','entrepreneurship','leadership book','startup','strategy book'] },
}

export async function generateStaticParams() {
  return Object.keys(CATEGORY_MAP).map((category) => ({ category }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const cat = CATEGORY_MAP[category]
  if (!cat) return {}
  return {
    title: `${cat.label} — CreativeBooks`,
    description: cat.desc,
    alternates: { canonical: `/category/${category}` },
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const cat = CATEGORY_MAP[category]
  if (!cat) notFound()

  const all = getAllPosts()
  const kw = cat.keywords
  const matched = all.filter((p) => {
    const text = ((p.keyword || '') + ' ' + (p.title || '') + ' ' + (p.slug || '')).toLowerCase()
    return kw.some((k) => text.includes(k))
  })
  const posts = matched.length > 0 ? matched : all

  return (
    <>
      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        body{background:#0d0d0d;color:#e8e4dc;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.6}
        a{text-decoration:none;color:inherit}
        .container{max-width:1100px;margin:0 auto;padding:0 24px}
        .cat-hero{padding:60px 24px 48px;text-align:center;background:radial-gradient(ellipse 70% 50% at 50% 0%,rgba(249,115,22,0.1) 0%,transparent 70%)}
        .cat-badge{display:inline-block;padding:5px 16px;border-radius:20px;background:rgba(249,115,22,0.12);border:1px solid rgba(249,115,22,0.3);color:#f97316;font-size:0.75rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:16px}
        .cat-hero h1{font-size:clamp(1.8rem,4vw,2.8rem);font-weight:900;letter-spacing:-0.03em;margin-bottom:12px}
        .cat-hero p{color:#6b7280;font-size:1rem;max-width:560px;margin:0 auto 24px}
        .breadcrumb{display:flex;align-items:center;gap:8px;font-size:0.8rem;color:#6b7280;justify-content:center;margin-bottom:32px}
        .breadcrumb a{color:#f97316}
        .post-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:20px;padding-bottom:80px}
        .post-card{background:#181818;border:1px solid #2a2a2a;border-radius:12px;padding:28px;display:flex;flex-direction:column;transition:border-color 0.15s,transform 0.15s}
        .post-card:hover{border-color:#f97316;transform:translateY(-2px)}
        .post-tag{display:inline-block;padding:3px 10px;border-radius:20px;background:rgba(249,115,22,0.1);border:1px solid rgba(249,115,22,0.2);color:#f97316;font-size:0.68rem;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;margin-bottom:12px}
        .post-card h2{font-size:1rem;font-weight:700;line-height:1.4;margin-bottom:10px}
        .post-card h2 a:hover{color:#f97316}
        .post-card p{color:#6b7280;font-size:0.87rem;line-height:1.65;flex:1;margin-bottom:18px}
        .post-footer{display:flex;align-items:center;justify-content:space-between;padding-top:14px;border-top:1px solid #2a2a2a}
        .post-date{font-size:0.72rem;color:#6b7280}
        .post-link{font-size:0.82rem;color:#f97316;font-weight:600}
        .empty{text-align:center;padding:80px 0;color:#6b7280}
        @media(max-width:600px){.post-grid{grid-template-columns:1fr}}
      `}</style>

      <div className="cat-hero">
        <div className="cat-badge">Book Guides</div>
        <h1>{cat.label}</h1>
        <p>{cat.desc}</p>
        <div className="breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <span>{cat.label}</span>
        </div>
      </div>

      <div className="container">
        {posts.length === 0 ? (
          <p className="empty">No articles yet — check back soon!</p>
        ) : (
          <div className="post-grid">
            {posts.map((post) => (
              <article className="post-card" key={post.slug}>
                {post.keyword && <span className="post-tag">{post.keyword}</span>}
                <h2><a href={`/${post.slug}`}>{post.title}</a></h2>
                <p>{post.description}</p>
                <div className="post-footer">
                  <span className="post-date">{post.date}</span>
                  <a href={`/${post.slug}`} className="post-link">Read →</a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
