import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books | CreativeBooks",
  description: "A collection of transformative books on anxiety, overthinking, fear, emotional freedom, and inner wealth. Available on Amazon.",
};

const BOOKS = [
  {
    title: "The Invisible Anxiety: Living in Constant Alert Mode",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/71Qh2pn9fML._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GFXJWRNV",
    kindleUrl: "https://www.amazon.com/dp/B0GFXDL3D8",
    tag: "Anxiety & Nervous System",
    badge: "Available Now",
    shortDesc: "Do you feel tense even when nothing is wrong? Exhausted, yet unable to truly rest? Always preparing, anticipating, and holding yourself together—without knowing why?",
    longDesc: "The Invisible Anxiety explores a form of anxiety that often goes unnoticed: the constant state of alertness that lives in the nervous system long after danger has passed. This is not panic. Not overthinking alone. It is survival mode disguised as normal life. Written with clarity, depth, and compassion, this book explains why your body stays on guard even when your mind understands that you are safe—and why traditional advice like 'just relax' rarely works.",
    topics: [
      "Why alert mode becomes a baseline, not a momentary response",
      "How the nervous system learns safety through experience, not logic",
      "Why rest, calm, and stillness can feel threatening",
      "How emotional suppression keeps anxiety alive",
      "What it truly means to move from survival to living",
    ],
    forYouIf: [
      "You feel constantly on edge without a clear reason",
      "Calm feels unfamiliar or uncomfortable",
      "You are tired of managing yourself all the time",
      "You want deep understanding, not shallow motivation",
    ],
  },
  {
    title: "Beyond Fear: Reclaiming Your Life from the Shadows of Doubt",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/71QdQQv0UtL._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GG1MBFJD",
    kindleUrl: "https://www.amazon.com/dp/B0GDXW3HV2",
    tag: "Fear & Emotional Resilience",
    badge: "Available Now",
    shortDesc: "What if fear didn't have to control your life anymore? What if you could learn to meet it with presence, compassion, and quiet inner strength?",
    longDesc: "Beyond Fear is a deeply human, heartfelt guide to understanding and transforming your relationship with fear. Across 30 powerful chapters, you will explore how fear shapes your identity, your relationships, your body, and your inner world — and then discover another way of living, one rooted in awareness, kindness, courage, and deep self-trust.",
    topics: [
      "Understand where your fear truly comes from",
      "Release harsh self-judgment and emotional pressure",
      "Build emotional resilience and inner stability",
      "Respond calmly instead of reacting impulsively",
      "Rediscover peace as an inner state, not an external condition",
      "Live a life guided gently by courage rather than fear",
    ],
    forYouIf: [
      "You overthink or struggle with anxiety",
      "You feel emotionally overwhelmed or stuck in self-doubt",
      "You have lived too long in fear and want freedom",
      "You are ready to grow gently, honestly, and deeply",
    ],
  },
  {
    title: "The Emotion of Money: Why We Earn, Spend, and Save the Way We Do",
    author: "Constantin Cristian",
    cover: "https://m.media-amazon.com/images/I/717PCSix01L._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GFWFN6YK",
    kindleUrl: "https://www.amazon.com/dp/B0GDQPXKCZ",
    tag: "Money & Psychology",
    badge: "Available Now",
    shortDesc: "Money is not just numbers. It's emotion. Behind every financial decision lives a story — of fear and hope, security and uncertainty, love and identity.",
    longDesc: "The Emotion of Money explores the hidden psychological forces that influence how we earn, spend, save, give, and dream. Instead of teaching 'get rich quick' formulas, this book goes deeper — into the beliefs, wounds, habits, and values that quietly guide our financial lives. This is a book about you, your story, and the life you want to live.",
    topics: [
      "Why money triggers so much stress, comparison, and self-doubt",
      "How childhood experiences shape adult financial behavior",
      "Why 'enough' is more emotional than mathematical",
      "The hidden role of fear, shame, and identity in money choices",
      "How wealth, happiness, and meaning truly connect",
      "How to build emotional peace — not just financial success",
    ],
    forYouIf: [
      "You struggle with financial stress despite working hard",
      "You want to understand your relationship with money deeply",
      "You are curious about the psychology behind your financial decisions",
      "You want a wiser, calmer, more meaningful relationship with money",
    ],
  },
  {
    title: "Your Rich Future: A Life and Money Transformation Guide",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/719O+bBatBL._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GFX818YC",
    kindleUrl: "https://www.amazon.com/dp/B0GDQQ1RV3",
    tag: "Wealth & Inner Alignment",
    badge: "Available Now",
    shortDesc: "Your Rich Future is not a book about chasing money. It is a journey into the deeper truth behind wealth, success, purpose, and inner peace.",
    longDesc: "Most people believe that abundance is created through strategy, effort, and hustle. But beneath every financial decision lives something far more powerful: our emotions, our beliefs, our unhealed stories, our relationship with ourselves. This book is a guide back to alignment — exploring how to heal your money story, build self-trust, and create abundance without abandoning yourself.",
    topics: [
      "How childhood experiences silently shape your financial reality",
      "How shame, fear, and comparison influence your choices",
      "How to heal your money story and build self-trust",
      "How to create abundance without abandoning yourself",
      "How peace, purpose, and integrity become the true foundations of wealth",
      "How to build a future that feels rich on every level",
    ],
    forYouIf: [
      "You are tired of chasing money without feeling fulfilled",
      "You want success that feels peaceful and grounded",
      "You struggle with financial stress despite working hard",
      "You are ready to heal your relationship with money and yourself",
    ],
  },
  {
    title: "The Overthinker's Survival Guide: How to Quiet Your Mind, Break Free from Mental Loops, and Finally Live",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/71+Of4SkalL._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GFWPBZGN",
    kindleUrl: "https://www.amazon.com/dp/B0GDXNWDNV",
    tag: "Overthinking & Inner Peace",
    badge: "Available Now",
    shortDesc: "A gentle companion for the minds that never stop running, replaying, analyzing, predicting, protecting… and longing for peace.",
    longDesc: "The Overthinker's Survival Guide helps you understand why your mind overthinks in the first place — not as a flaw, but as an intelligent survival strategy that once tried to keep you safe. Through reflective chapters and soothing insights, you will learn how to slowly rebuild inner safety, soften self-criticism, and finally become a supportive companion to your own mind.",
    topics: [
      "Why your nervous system confuses safety with control",
      "How self-criticism became your default inner language",
      "Perfectionism as protection",
      "Sensitivity as a gift — not a weakness",
      "Learning to trust your inner world again",
      "Allowing your mind to finally rest",
    ],
    forYouIf: [
      "Your thoughts rarely rest — you replay, analyze, and predict constantly",
      "You struggle to simply be present",
      "You question your feelings and prepare for every possible outcome",
      "You want a book that finally understands what it's like to live inside your head",
    ],
  },
  {
    title: "You Don't Need to Be Liked: A Guide to Inner Freedom, Self-Respect, and Emotional Independence",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/61QW3NJispL._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GFWKTBRS",
    kindleUrl: "https://www.amazon.com/dp/B0GFXG1WW4",
    tag: "Emotional Freedom & Self-Respect",
    badge: "Available Now",
    shortDesc: "What if the pressure to be liked is the very thing keeping you anxious, exhausted, and disconnected from yourself?",
    longDesc: "You Don't Need to Be Liked is a calm, honest guide for anyone who feels trapped by approval, people-pleasing, over-explaining, or the fear of disappointing others. This book does not teach confidence as performance or detachment as coldness. Instead, it shows how emotional freedom grows from living in alignment with yourself—quietly, steadily, and without apology.",
    topics: [
      "Stop outsourcing your worth to others",
      "Let go of emotional over-responsibility",
      "Respond instead of react",
      "Build inner security without ego",
      "Choose truth over approval",
      "Live with calm self-respect in a loud world",
    ],
    forYouIf: [
      "You feel trapped by approval or people-pleasing",
      "You over-explain, over-apologize, or shrink yourself",
      "You are tired of performing and managing perceptions",
      "You want integrity, emotional independence, and quiet confidence",
    ],
  },
  {
    title: "Karma and Life Lessons: Awakening the Soul Through Life's Lessons and Spiritual Growth",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/71zJkwyhxQL._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GD1R8WVC",
    kindleUrl: "https://www.amazon.com/dp/B0GCWZTY98",
    tag: "Karma & Spiritual Growth",
    badge: "Available Now",
    shortDesc: "A gentle yet powerful spiritual guide for anyone who has ever wondered why certain experiences repeat, why pain returns in cycles, and how healing and awakening truly happen from within.",
    longDesc: "Karma & Life Lessons is not about punishment, destiny, or fear. It is about consciousness. It is about growth. It is about learning to live with awareness, compassion, presence, and truth. Through deeply reflective chapters filled with warmth and clarity, this book invites you into a conversation with your soul — guiding you inward toward stillness, awareness, and self-love. You will learn to see your journey not as a series of mistakes, but as a sacred unfolding filled with lessons, growth, and awakening.",
    topics: [
      "How karma acts as a mirror for the soul",
      "How emotional wounds can be healed with compassion",
      "How to release the past without losing its wisdom",
      "How to trust change, uncertainty, and new beginnings",
      "How to awaken inner peace and live from the heart",
      "How purpose, meaning, and intuition gently reveal themselves",
      "How to become a conscious creator of your own life",
    ],
    forYouIf: [
      "You feel called to live more consciously and let go of old cycles",
      "You wonder why certain painful experiences keep repeating",
      "You seek healing, spiritual growth, and deeper self-understanding",
      "You want to reconnect with the quiet wisdom inside your heart",
    ],
  },
  {
    title: "Your Vibration Attracts Your Reality: The Quiet Power of Energy, Awareness, and Conscious Living",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/71G+MF0aAPL._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GCY5HKXT",
    kindleUrl: "https://www.amazon.com/dp/B0GCLD99D6",
    tag: "Vibration & Conscious Living",
    badge: "Available Now",
    shortDesc: "Your vibration is the silent language through which you communicate with life. What if your reality is shaped not only by actions and circumstances — but by the energy you carry within you every single day?",
    longDesc: "Your Vibration Attracts Your Reality is a heart-opening journey into consciousness, healing, and inner transformation. Written with warmth, depth, and clarity, this book gently guides you back to the truth within yourself — the still, loving awareness beneath fear, conditioning, and doubt. This is not a book about forcing positivity or pretending life is always easy. It is a guide to living awake — to honoring your emotions, listening to your body, healing your inner child, and choosing your energy with intention.",
    topics: [
      "Why your inner state quietly shapes your outer world",
      "How emotions, thoughts, intuition, and presence influence your frequency",
      "The healing power of self-love, gratitude, and authenticity",
      "How to release attachment, fear, and old emotional patterns",
      "How alignment, purpose, and awareness create flow in life",
      "How to live consciously — moment by moment — with an open heart",
    ],
    forYouIf: [
      "You are beginning your spiritual journey or deepening your inner work",
      "You feel disconnected from yourself and want to return to love",
      "You want to understand how your energy shapes your daily reality",
      "You seek presence, healing, and a more conscious way of living",
    ],
  },
  {
    title: "Twin Souls The Spiritual Journey of Remembering Each Other: How Two Souls Travel Across Lifetimes to Find Love, Healing, and Wholeness",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/71i28dnGUeL._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GD1PPW7M",
    kindleUrl: "https://www.amazon.com/dp/B0GCNZJ47H",
    tag: "Twin Souls & Divine Love",
    badge: "Available Now",
    shortDesc: "What if the deepest love story of your life isn't about another person — but about your awakening soul? A spiritual journey through the mystery of twin souls — the rare connection that arrives not to complete you… but to awaken you.",
    longDesc: "Through 25 heartfelt chapters of guidance, reflection, and soul-level truth, Twin Souls leads you gently from longing and attachment into self-love, wholeness, and inner union. This is not a fairy-tale romance — it is the sacred path of remembering who you truly are. Written for the sensitive, the intuitive, the spiritually aware — for anyone who has ever felt a love so powerful that it changed everything. By the final pages, you will no longer be asking how to find your other half. You will remember that you were whole all along.",
    topics: [
      "Why soul connections enter our lives",
      "The difference between attachment and divine love",
      "Healing abandonment, fear, and emotional dependency",
      "Self-love as a sacred union",
      "Spiritual maturity and surrender",
      "The eternal nature of love beyond time",
      "Returning to Oneness — where all souls meet again",
    ],
    forYouIf: [
      "You are in union, separation, or searching for meaning in a deep connection",
      "You want to move from longing and attachment into inner wholeness",
      "You are sensitive, intuitive, and spiritually aware",
      "You have ever felt a love so powerful that it changed everything",
    ],
  },
  {
    title: "From Woman to Mother The Emotional Journey of Pregnancy: Where a New Life Begins and a New Heart Is Born",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/61pzcRSFBFL._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GCYHTP9H",
    kindleUrl: "https://www.amazon.com/dp/B0GCNL82WM",
    tag: "Motherhood & Emotional Journey",
    badge: "Available Now",
    shortDesc: "A gentle, soul-warming book that explores what truly happens inside a woman's heart as she grows a new life — and becomes someone new herself. This is not a medical guide. It is a story of feelings.",
    longDesc: "From Woman to Mother follows the emotional path from the first flutter of awareness to the sacred moment of birth — and the tender days that follow. It speaks honestly about joy and doubt, strength and vulnerability, identity, transformation, and the love that reshapes a woman's entire world. Every page is an invitation to slow down, breathe, and feel seen. Whether you are pregnant now, remembering your journey, or supporting someone you love, this book offers comfort, reassurance, and understanding — a reminder that becoming a mother is not only the birth of a child, but the awakening of a deeper heart.",
    topics: [
      "The emotional shift from woman to mother",
      "Hope, fear, and the quiet beginnings of love",
      "Identity transformation during pregnancy",
      "Strength and vulnerability in becoming",
      "The sacred moment of birth and what follows",
      "The love that reshapes a woman's entire world",
    ],
    forYouIf: [
      "You are pregnant and want to feel seen and understood",
      "You are a new mother navigating this tender new chapter",
      "You want to support someone you love through their journey",
      "You cherish emotional storytelling and the beauty of inner transformation",
    ],
  },
];

export default function BooksPage() {
  return (
    <>
      <style>{`
        .books-hero {
          text-align: center;
          padding: 60px 0 44px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 56px;
        }
        .books-eyebrow {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #a78bfa;
          margin-bottom: 16px;
        }
        .books-hero h1 {
          font-size: clamp(2rem, 5vw, 2.8rem);
          font-weight: 800;
          color: var(--text);
          letter-spacing: -0.03em;
          line-height: 1.2;
          margin-bottom: 16px;
        }
        .books-hero p {
          color: var(--muted);
          font-size: 1rem;
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.7;
        }
        .book-card {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 48px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 40px;
          margin-bottom: 40px;
          position: relative;
        }
        .book-card:hover { border-color: rgba(167,139,250,0.5); }
        @media (max-width: 620px) {
          .book-card { grid-template-columns: 1fr; gap: 28px; padding: 24px; }
          .book-cover-col { display: flex; justify-content: center; }
        }
        .book-badge {
          display: inline-block;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background: linear-gradient(135deg, #a78bfa, #7c3aed);
          color: #fff;
          padding: 4px 12px;
          border-radius: 20px;
          margin-bottom: 16px;
        }
        .book-cover {
          width: 100%;
          max-width: 200px;
          border-radius: 10px;
          box-shadow: 0 24px 64px rgba(0,0,0,0.55), 0 4px 20px rgba(167,139,250,0.2);
          display: block;
        }
        .book-tag {
          display: inline-block;
          font-size: 0.72rem;
          padding: 3px 10px;
          border-radius: 20px;
          background: rgba(167,139,250,0.1);
          border: 1px solid rgba(167,139,250,0.25);
          color: #a78bfa;
          margin-bottom: 12px;
        }
        .book-title {
          font-size: clamp(1.25rem, 3vw, 1.65rem);
          font-weight: 800;
          color: var(--text);
          letter-spacing: -0.02em;
          line-height: 1.3;
          margin-bottom: 6px;
        }
        .book-author {
          font-size: 0.85rem;
          color: var(--muted);
          margin-bottom: 20px;
        }
        .book-desc {
          color: #b8bcd0;
          font-size: 0.93rem;
          line-height: 1.8;
          margin-bottom: 20px;
          font-style: italic;
        }
        .book-long-desc {
          color: #9da2b8;
          font-size: 0.88rem;
          line-height: 1.8;
          margin-bottom: 24px;
        }
        .book-section-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #a78bfa;
          margin-bottom: 10px;
        }
        .book-topics {
          list-style: none;
          margin: 0 0 28px;
          padding: 0;
        }
        .book-topics li {
          font-size: 0.855rem;
          color: var(--muted);
          padding: 4px 0 4px 20px;
          position: relative;
          line-height: 1.5;
        }
        .book-topics li::before {
          content: "✦";
          position: absolute;
          left: 0;
          color: #a78bfa;
          font-size: 0.55rem;
          top: 9px;
        }
        .buy-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          color: #111;
          font-weight: 800;
          font-size: 0.95rem;
          padding: 14px 30px;
          border-radius: 10px;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(245,158,11,0.3);
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .buy-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(245,158,11,0.45);
          color: #111;
        }
        .buy-note {
          font-size: 0.75rem;
          color: var(--muted);
          margin-top: 10px;
        }
        .coming-soon-box {
          text-align: center;
          padding: 48px 24px;
          background: linear-gradient(135deg, rgba(167,139,250,0.05), rgba(124,58,237,0.03));
          border: 1px solid rgba(167,139,250,0.15);
          border-radius: 16px;
          margin-top: 8px;
        }
        .coming-soon-box h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 10px;
        }
        .coming-soon-box p {
          color: var(--muted);
          font-size: 0.9rem;
          margin-bottom: 24px;
          max-width: 360px;
          margin-left: auto;
          margin-right: auto;
        }
        .notify-form {
          display: flex;
          gap: 10px;
          max-width: 380px;
          margin: 0 auto;
          flex-wrap: wrap;
          justify-content: center;
        }
        .notify-input {
          flex: 1;
          min-width: 190px;
          padding: 11px 16px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 8px;
          color: var(--text);
          font-size: 0.88rem;
        }
        .notify-input::placeholder { color: var(--muted); }
        .notify-input:focus { outline: none; border-color: #a78bfa; }
        .notify-btn {
          padding: 11px 22px;
          background: #a78bfa;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.88rem;
          cursor: pointer;
          transition: background 0.15s;
        }
        .notify-btn:hover { background: #7c3aed; }
        .kindle-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #a78bfa;
          font-weight: 700;
          font-size: 0.9rem;
          padding: 13px 22px;
          border-radius: 10px;
          text-decoration: none;
          border: 1px solid rgba(167,139,250,0.4);
          transition: background 0.15s, border-color 0.15s;
        }
        .kindle-btn:hover {
          background: rgba(167,139,250,0.1);
          border-color: #a78bfa;
          color: #a78bfa;
        }
      `}</style>

      <section className="books-hero">
        <div className="books-eyebrow">Our Books</div>
        <h1>Words That Help You<br />Come Back to Yourself</h1>
        <p>Written for those who carry too much — quietly, invisibly, and without knowing why.</p>
      </section>

      <section>
        {BOOKS.map((book, i) => (
          <div key={i} className="book-card">
            <div className="book-cover-col">
              <img src={book.cover} alt={book.title} className="book-cover" />
            </div>
            <div>
              <div className="book-badge">{book.badge}</div>
              <div className="book-tag">{book.tag}</div>
              <h2 className="book-title">{book.title}</h2>
              <p className="book-author">by {book.author}</p>

              <p className="book-desc">{book.shortDesc}</p>
              <p className="book-long-desc">{book.longDesc}</p>

              <div className="book-section-label">What you will learn</div>
              <ul className="book-topics">
                {book.topics.map((t, j) => <li key={j}>{t}</li>)}
              </ul>

              <div className="book-section-label">This book is for you if</div>
              <ul className="book-topics" style={{ marginBottom: 32 }}>
                {book.forYouIf.map((t, j) => <li key={j}>{t}</li>)}
              </ul>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                <a href={book.paperbackUrl} target="_blank" rel="noopener noreferrer" className="buy-btn">
                  📦 Buy Paperback
                </a>
                <a href={book.kindleUrl} target="_blank" rel="noopener noreferrer" className="kindle-btn">
                  📱 Kindle Edition
                </a>
              </div>
              <p className="buy-note">Both versions available on Amazon</p>
            </div>
          </div>
        ))}

        <div className="coming-soon-box">
          <h3>More books coming soon</h3>
          <p>Join the list and be the first to know when new titles arrive.</p>
          <form className="notify-form" action="#" method="get">
            <input type="email" name="email" placeholder="your@email.com" className="notify-input" />
            <button type="submit" className="notify-btn">Notify Me</button>
          </form>
        </div>
      </section>
    </>
  );
}
