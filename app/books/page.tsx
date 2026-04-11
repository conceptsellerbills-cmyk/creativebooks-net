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
  {
    title: "From Idea to Online Business in 30 Days: Transform Your Vision into a Real, Sustainable Online Business",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/71B78TNc+VL._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GCZ2GFF5",
    kindleUrl: "https://www.amazon.com/dp/B0GCJFT38W",
    tag: "Entrepreneurship & Online Business",
    badge: "Available Now",
    shortDesc: "What if you gave yourself just 30 days — not to dream about a different life, but to start building it? A real-world journey from the first spark of inspiration all the way to launching your own online business.",
    longDesc: "From Idea to Online Business in 30 Days is more than a guidebook. It walks beside you with grounded guidance, emotional support, and a human-centered approach to entrepreneurship. Instead of hype, shortcuts, or empty promises, you'll find a new relationship with yourself — one built on self-trust, creativity, emotional strength, and the quiet courage to begin. This is not a book about hustling harder. It's a book about building smarter and living more intentionally.",
    topics: [
      "Turn an idea into a real, structured business",
      "Understand your audience and create true value",
      "Build trust, purpose, and resilience",
      "Navigate doubt, fear, and uncertainty",
      "Launch with integrity — and grow sustainably",
    ],
    forYouIf: [
      "You are starting from zero experience or working a full-time job",
      "You feel stuck between 'I wish' and 'one day'",
      "You want grounded, human-centered guidance — not hype",
      "You are ready to give yourself 30 focused days to begin",
    ],
  },
  {
    title: "Entrepreneur Goal Planner: Building Success From the Inside Out",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/71LDtlIg+NL._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GCY6968C",
    kindleUrl: "https://www.amazon.com/dp/B0GCJVRKXH",
    tag: "Mindset & Conscious Success",
    badge: "Available Now",
    shortDesc: "More than a business book — a guided journey into clarity, purpose, alignment, mindset, and conscious success. Created for entrepreneurs who want to build something meaningful without losing themselves along the way.",
    longDesc: "Most planners focus only on goals, metrics, strategy, and productivity. Entrepreneur Goal Planner goes deeper. It helps you reconnect with your why, refine your vision, align your actions with your values, and design success that actually feels fulfilling — not just impressive on paper. Through reflective chapters, mindset shifts, guided prompts, and deep self-awareness work, you will learn how to build confidence from the inside out, navigate uncertainty with grace, trust your intuition, and grow without burning out.",
    topics: [
      "Build a business that aligns with your soul",
      "Set goals that feel authentic and inspiring",
      "Develop emotional resilience and self-trust",
      "Experience wealth with meaning and purpose",
      "Redefine success on your own terms",
      "Grow with presence, grace, and clarity",
    ],
    forYouIf: [
      "You are starting your entrepreneurial path or seeking deeper alignment",
      "You want goals that are true to you — not borrowed from comparison or pressure",
      "You want to heal scarcity thinking and build inner confidence",
      "You believe real success begins within, not just with strategy",
    ],
  },
  {
    title: "Why Intelligent People Stay Poor: How Overthinking, Fear, and Comfort Quietly Kill Potential",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/71dQqwOhawL._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GCYNFHCR",
    kindleUrl: "https://www.amazon.com/dp/B0GC7TBNG1",
    tag: "Intelligence & Financial Freedom",
    badge: "Available Now",
    shortDesc: "Why do so many intelligent, capable, highly educated people remain financially stuck despite doing everything right? This book explains — with brutal clarity — how intelligence itself can become a trap.",
    longDesc: "Why Intelligent People Stay Poor is not a motivation book. It will not hype you. Instead, it explains how overthinking quietly replaces action and feels responsible while doing it, how fear disguises itself as logic and caution, and why being competent is often rewarded with more work — not more power. This is a clear, grounded framework for understanding why you are stuck, how you got there, and what a realistic exit looks like — without burning your life down.",
    topics: [
      "Why intelligence does not automatically translate into money or leverage",
      "How overthinking quietly replaces action — and feels responsible doing it",
      "How fear disguises itself as logic, caution, and 'waiting for the right moment'",
      "Why smart people optimize the wrong things and avoid decisions that matter most",
      "How systems and long-term positioning matter more than raw effort",
      "Why many intelligent people are trapped not by lack of opportunity — but by identity",
    ],
    forYouIf: [
      "You feel overqualified for the life you are living",
      "You understand what should be done but struggle to move consistently",
      "You are financially okay but internally dissatisfied",
      "You want clarity, not comfort — and are ready to stop protecting your intelligence",
    ],
  },
  {
    title: "The Archangel's Choice: A Love Stronger Than Heaven",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/71vV4hiYT6L._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GD23HDTJ",
    kindleUrl: "https://www.amazon.com/dp/B0GBXLV5JD",
    tag: "Angel Fantasy & Forbidden Romance",
    badge: "Available Now",
    shortDesc: "He was created to obey Heaven. She was never meant to matter. Some loves are powerful enough to break Heaven itself — and some choices cost an angel his wings.",
    longDesc: "Elias is an archangel bound by ancient laws — a warrior forged for light, duty, and eternal discipline. Aria is human. Mortal. Fragile. And yet, her presence awakens something forbidden. As dark forces gather and divine laws tighten, Elias is forced to confront the one thing angels fear most: love that cannot be controlled. Loving her may cost him his wings. Protecting her may ignite a war. Because some bonds are strong enough to change what angels are allowed to become.",
    topics: [
      "Forbidden love that defies divine law",
      "A human soul with hidden power",
      "An archangel standing at the edge of falling",
      "Loyalty tested by emotion",
      "Destiny rewritten by choice",
      "Dark forces, celestial intrigue, and high-stakes sacrifice",
    ],
    forYouIf: [
      "You love angel & demon fantasy with emotionally intense romance",
      "You are drawn to forbidden love stories set in supernatural worlds",
      "You enjoy celestial intrigue and epic, high-stakes storytelling",
      "You want a story that pulls you in — and refuses to let go",
    ],
  },
  {
    title: "Why the Wrong Love Feels So Right",
    author: "Constantin Cristian",
    cover: "https://m.media-amazon.com/images/I/71IE26sC0sL._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GD294BTQ",
    kindleUrl: "https://www.amazon.com/dp/B0GBJPV3HC",
    tag: "Relationships & Emotional Patterns",
    badge: "Available Now",
    shortDesc: "You don't fall for the wrong people by accident. You fall for what feels familiar — even when it hurts. A deep, compassionate exploration of the hidden emotional patterns that shape who you love.",
    longDesc: "Why the Wrong Love Feels So Right explains why unhealthy relationships can feel so powerful, addictive, and hard to leave — not by blaming you, but by showing what your nervous system learned long before you were aware of it. This honest, grounded guide helps you understand why your body and mind are drawn to the wrong love in the first place — and how to gently, realistically shift that pattern. Healing doesn't start with finding the right person. It starts with not abandoning yourself.",
    topics: [
      "Why 'chemistry' is often a trauma response, not compatibility",
      "How attachment wounds and childhood conditioning shape adult relationships",
      "Why emotionally unavailable people feel so magnetic",
      "What trauma bonds are — and why they're so hard to break",
      "Why boundaries can feel guilty — and why they change everything",
      "How to stop repeating the same painful relationship patterns",
    ],
    forYouIf: [
      "You keep attracting partners who can't fully show up",
      "Love feels intense, confusing, or painful more often than peaceful",
      "You overgive, overthink, or abandon yourself to keep a relationship",
      "You want clarity — not another surface-level dating guide",
    ],
  },
  {
    title: "The Universe Is Always Listening: A Spiritual Guide to Trust, Flow, and Inner Awareness",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/71qO49UU4BL._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GD1Y76BM",
    kindleUrl: "https://www.amazon.com/dp/B0GBLM2NR1",
    tag: "Spirituality & Inner Alignment",
    badge: "Available Now",
    shortDesc: "What if the Universe has been listening to you all along — just not in the way you expected? Not a book about manifesting what you want, but about understanding why your life has unfolded exactly as it has.",
    longDesc: "The Universe Is Always Listening reveals how the Universe communicates through emotions, delays, relationships, loss, silence, and intuition — and the moments that change you forever. Unlike typical spiritual books, this one does not teach you how to escape reality. It teaches you how to live inside it with awareness, strength, and calm clarity. No dogma. No superstition. No pretending everything is positive. Only truth, presence, and alignment.",
    topics: [
      "Why certain patterns keep repeating in your life",
      "Why loss, endings, and delays are often guidance — not punishment",
      "How to tell the difference between fear and intuition",
      "Why forcing life creates suffering — and flow creates clarity",
      "How to live in alignment without losing ambition or responsibility",
      "Why peace comes not from getting more — but from resisting less",
    ],
    forYouIf: [
      "You feel stuck despite trying everything",
      "You sense there's a deeper intelligence guiding your life",
      "You want spirituality without illusion, escapism, or blind belief",
      "You are ready to stop fighting life and start understanding it",
    ],
  },
  {
    title: "Make Money Smarter with AI Tools: How to Turn Artificial Intelligence into Sustainable Revenue",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/71BxeaXvqeL._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GFWRJNDM",
    kindleUrl: "https://www.amazon.com/dp/B0G9979ZCS",
    tag: "AI & Online Income",
    badge: "Available Now",
    shortDesc: "AI didn't just change technology — it changed who can win. You no longer need a big team, technical skills, or years of experience to build income online. You need clarity, structure, and the right way to use AI.",
    longDesc: "Make Money Smarter with AI Tools is not about getting rich overnight. It's about building income that actually lasts. Instead of overwhelming you with jargon, this book shows how real people use AI to make money, how to build systems instead of hustling endlessly, and how to protect your income from platforms and trends. Everything is explained clearly, practically, and step by step. Read it once. Build with it for years.",
    topics: [
      "How to make money with AI using text, images, and video",
      "How to build recurring monthly income instead of one-time sales",
      "How to attract clients consistently using AI-powered lead systems",
      "How to build an ecosystem of income, not a fragile side hustle",
      "How to stay independent from platforms and algorithm changes",
      "What will change in the next few years — and how to stay ahead",
    ],
    forYouIf: [
      "You want real, practical ways to make money with AI — no hype",
      "You want income that is stable, scalable, and protected",
      "You prefer systems over stress",
      "You don't need to be technical, famous, or work nonstop — just structured",
    ],
  },
  {
    title: "Beyond the Body: Journeys into the Astral Realm",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/71R1X8HHgOL._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GHJRT9D8",
    kindleUrl: "https://www.amazon.com/dp/B0GHHXGCLL",
    tag: "Astral Projection & OBE",
    badge: "Available Now",
    shortDesc: "What if the reason you haven't had an out-of-body experience yet isn't that you 'can't' — but that no one taught you a calm, safe, realistic way to approach it?",
    longDesc: "Beyond the Body is a grounded spiritual guide to astral projection, written for seekers who are curious, skeptical, or frustrated. Instead of sensational stories and fear-based warnings, it offers a clear map of what people report, why the threshold can feel intense, and how to build a practice that protects your nervous system, your sleep, and your mental clarity. Whether you see astral projection as a spiritual reality, an inner world, or something in between, this book helps you approach the unknown with calm authority.",
    topics: [
      "How fear and overthinking block the doorway — and how to dissolve them",
      "Doorway signs: vibrations, buzzing, floating, sleep paralysis, false awakenings",
      "Practical spiritual hygiene that is empowering, not paranoid",
      "Discernment skills: truth vs symbol, guidance vs projection",
      "A realistic 30-day training plan without obsession",
      "How to integrate experiences so spirituality strengthens your life",
    ],
    forYouIf: [
      "You are curious about astral projection but have struggled to experience it",
      "You want a grounded, safe approach — not sensationalism or fear",
      "You seek clarity, discernment, and a mature spiritual practice",
      "You want OBE exploration to ground you, not pull you away from life",
    ],
  },
  {
    title: "Before This Life: Remembering Your Soul's Journey Through Reincarnation",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/71aMpLf62QL._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GHJG6KCV",
    kindleUrl: "https://www.amazon.com/dp/B0GH8TNLGG",
    tag: "Reincarnation & Soul Memory",
    badge: "Available Now",
    shortDesc: "A grounded, deeply comforting guide for anyone who feels there's more to their story than one lifetime — blending spiritual insight with practical psychology.",
    longDesc: "Before This Life explores why certain people feel instantly familiar, why repeating relationship patterns can feel 'fated,' and how the body can carry memories the mind can't explain. This isn't a book that demands blind belief. It helps you live better — calmer, clearer, and more aligned — whether you see reincarnation as literal truth or powerful symbolism. At its core, it's about becoming the person who remembers: someone who chooses self-respect, sacred love, inner authority, and a mission lived in ordinary days.",
    topics: [
      "How to tell intuition from fear voice — and why that changes everything",
      "The truth about soulmates, karmic partners, and love that evolves you",
      "Soul contracts, karmic loops, and synchronicities on your path",
      "Safe principles for regression and shadow work without re-traumatizing",
      "Forgiveness as energetic freedom — without excusing harm",
      "Soul retrieval and integration: becoming whole again",
    ],
    forYouIf: [
      "You feel there is more to your story than one lifetime",
      "You experience repeating patterns in relationships that feel fated",
      "You want to explore past-life material safely and grounded",
      "You are ready to stop repeating the same lessons and live from your soul's truth",
    ],
  },
  {
    title: "Where Love Transcends All Worlds: Beyond Laws, Beyond Time, Beyond Fear",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/71oQt7zXwfL._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GFWRWP7C",
    kindleUrl: "https://www.amazon.com/dp/B0G98MG66M",
    tag: "Spiritual Sci-Fi Romance",
    badge: "Available Now",
    shortDesc: "Aeron was created to watch over worlds. Lyra only felt a part of her soul was missing. When their paths cross, reality begins to fracture — and the universe is forced to choose between law and love.",
    longDesc: "Where Love Transcends All Worlds is a deeply emotional spiritual sci-fi romance about two souls who recognized each other beyond lives, beyond worlds, beyond forgetting — and who chose to love each other even when that love demanded total sacrifice. This is not a story about gods or saviors. It is the story of a love that could not be controlled, created, or erased — a love that transcends time, law, and fear itself.",
    topics: [
      "Love beyond time and across lifetimes",
      "Soulmates who find each other beyond forgetting",
      "Sacrifice and choice in the face of cosmic law",
      "Destiny versus free will",
      "A universe forced to choose between order and love",
    ],
    forYouIf: [
      "You love spiritual sci-fi with deeply emotional romance",
      "You believe in soulmates and love that transcends time",
      "You are drawn to stories of sacrifice, cosmic connection, and free will",
      "You want a love story that goes beyond the ordinary — into the eternal",
    ],
  },
  {
    title: "Chakras for Beginners: Balance, Healing, and Daily Alignment",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/61uxpEw5IWL._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GG7LSGKC",
    kindleUrl: "https://www.amazon.com/dp/B0GG5D7HMM",
    tag: "Chakras & Energy Healing",
    badge: "Available Now",
    shortDesc: "A grounded, practical guide to working with your energy system — without confusion, overwhelm, or woo you don't relate to. A simple map back to stability, clarity, and inner peace.",
    longDesc: "Chakras for Beginners connects chakra work to real life: your nervous system, habits, boundaries, confidence, relationships, creativity, and decision-making. Each chapter is designed to help you feel the shift — through breathwork, simple meditation, gentle movement, journaling prompts, and quick energy hygiene practices you can use in minutes. This is chakra work made safe and usable for beginners, with trauma-informed guidance and a 30-day alignment routine you can repeat anytime.",
    topics: [
      "What chakras are (and what they aren't), explained simply and practically",
      "How emotions, attention, and habits shape your field and everyday experience",
      "Root-to-crown healing tools you can do even on busy days",
      "Breathwork, meditation, and movement practices for real balance",
      "Energy hygiene and boundaries to stop emotional leaks and protect your peace",
      "A personalized 7-day reset and 30-day alignment routine",
    ],
    forYouIf: [
      "You feel anxious, emotionally stuck, mentally noisy, or drained by people",
      "You are brand new to chakras and want a clear, safe starting point",
      "You want spiritual practices that actually translate into real life",
      "You are ready to feel more grounded, open, confident, and connected",
    ],
  },
  {
    title: "The Art of Living Slowly: A Guide to Reclaiming Time, Presence, and Inner Peace",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/61lLhFjb+CL._SL1499_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GG77R8DV",
    kindleUrl: "https://www.amazon.com/dp/B0GG4FM4FR",
    tag: "Slow Living & Presence",
    badge: "Available Now",
    shortDesc: "Modern life moves faster than our minds, bodies, and emotions were ever designed to handle. This book is an invitation to step out of constant urgency — without stepping away from life.",
    longDesc: "The Art of Living Slowly explores how speed reshapes the nervous system, fragments attention, and quietly drains meaning from everyday life. It reveals why slowing down feels uncomfortable at first — and why that discomfort is a sign of healing. This is not about doing less or rejecting ambition. It is about living at a pace that allows you to feel present, grounded, and fully alive — slowly, deliberately, and with meaning.",
    topics: [
      "Calm an overstimulated mind in a world that never stops",
      "Release productivity guilt and hustle culture conditioning",
      "Reclaim attention from constant distraction",
      "Create a pace you can sustain without burnout",
      "Deepen relationships through presence rather than urgency",
      "Build a life that feels inhabitable instead of overwhelming",
    ],
    forYouIf: [
      "You feel tired of rushing and overwhelmed by constant demands",
      "You are disconnected from your own time and energy",
      "You want to reclaim presence, depth, and meaning in daily life",
      "You are ready for a steady, compassionate path — not a quick fix",
    ],
  },
  {
    title: "Why Nothing Feels Enough: A Deep Exploration of Emptiness, Desire, and the Modern Mind",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/61zV4MC3Z8L._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GG72C7YL",
    kindleUrl: "https://www.amazon.com/dp/B0GG4TX5NW",
    tag: "Psychology & Inner Fulfillment",
    badge: "Available Now",
    shortDesc: "Why do you keep chasing 'more' and still feel empty? The problem isn't that you don't have enough. The problem is that you've been living from lack — a nervous system that can't settle and an inner disconnect you can't name.",
    longDesc: "Why Nothing Feels Enough is a deep, modern guide for anyone trapped in the cycle of desire, distraction, and emotional numbness. With chapters that read like a conversation with your most honest self, this book explores the hidden psychology behind chronic dissatisfaction — and shows you how to rebuild the inner conditions for real fulfillment. Fulfillment isn't something you achieve. It's something you learn to inhabit.",
    topics: [
      "Why pleasure and achievements can't satisfy when the nervous system doesn't feel safe",
      "How comparison, stimulation, and consumption drain meaning from life",
      "The difference between want and need — and why emotional hunger creates endless craving",
      "Why rest can feel threatening, even when nothing is wrong",
      "How self-abandonment and identity performance keep you disconnected",
      "What it means to build inner wholeness without 'fixing' yourself",
    ],
    forYouIf: [
      "You ask yourself 'why am I still not satisfied?' despite having a decent life",
      "You feel guilty for not being happier with what you have",
      "You are tired of chasing a life that looks good but doesn't feel good",
      "You want presence, safety, meaning, and self-connection — not another checklist",
    ],
  },
  {
    title: "Comfort Is the New Prison: Why Safety, Convenience, and Routine Are Quietly Killing Your Potential",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/71ojTAX4jSL._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GG4R5X1R",
    kindleUrl: "https://www.amazon.com/dp/B0GFXNTWKS",
    tag: "Growth & Breaking Stagnation",
    badge: "Available Now",
    shortDesc: "What if the very thing you've been chasing — comfort, stability, safety — is the reason you feel stuck, anxious, and unfulfilled? A deep, honest exploration of how modern comfort quietly disconnects us from ambition and meaning.",
    longDesc: "Comfort Is the New Prison exposes the hidden cost of a life built around ease. It reveals why so many people feel restless despite having everything, why anxiety thrives in safe environments, and why avoiding discomfort quietly erodes self-trust and courage. You won't be told to eliminate fear — you'll learn how to move with it. You won't be promised ease — you'll be shown how to build a life that no longer shrinks.",
    topics: [
      "How comfort turns into stagnation over time",
      "Why anxiety thrives in safe, controlled environments",
      "How fear disguises itself as responsibility and caution",
      "Why waiting for certainty keeps life on pause",
      "How to rebuild resilience and direction without burning your life down",
      "How to use discomfort as information, strength, and fuel for growth",
    ],
    forYouIf: [
      "You feel awake but stuck — restless despite having a stable life",
      "You sense there is more to life than routines, distractions, and managed survival",
      "You are tired of feeling safe but unsatisfied",
      "You are ready to trade comfort for depth and avoidance for engagement",
    ],
  },
  {
    title: "Manifestation Made Simple: A 21-Day Daily Practice to Shift Your Reality",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/71vgGjaCJPL._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GG76T3JK",
    kindleUrl: "https://www.amazon.com/dp/B0GG53FH6R",
    tag: "Manifestation & Daily Practice",
    badge: "Available Now",
    shortDesc: "Turns manifestation from a confusing spiritual concept into a practical daily practice that actually changes your life — in 21 focused days, through identity shifts, nervous system regulation, and small consistent actions.",
    longDesc: "Manifestation Made Simple helps you stop living in constant waiting, overthinking, and checking for signs — and start building the internal stability that makes new outcomes possible. No forcing, no chasing, no fake positivity. Whether you're manifesting love, money, confidence, peace, or a fresh start, this book gives you a step-by-step structure you can repeat anytime. You don't just 'try manifestation' — you become the version of you who naturally receives what you're ready for.",
    topics: [
      "Define one clear outcome without obsession",
      "Rewire your self-concept in everyday life",
      "Detach without giving up — the 'I'm good either way' power",
      "Stay steady when the outer world hasn't shifted yet",
      "Heal old emotional patterns so the past stops controlling the future",
      "Build a simple weekly system so manifestation becomes a lifestyle",
    ],
    forYouIf: [
      "You are tired of doing everything right and still feeling stuck",
      "You want manifestation explained practically — not mystically",
      "You want a structured 21-day practice you can repeat anytime",
      "You are ready to build the inner state your life can finally mirror",
    ],
  },
  {
    title: "Conscious Parenting, Sacred Childhood: From Chaos to Culture, Create Family Values That Children Actually Live",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/71TcI7tx0RL._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GKY7ZF1F",
    kindleUrl: "https://www.amazon.com/dp/B0GJR28RWD",
    tag: "Conscious Parenting & Family",
    badge: "Available Now",
    shortDesc: "Not another book that tells you how to 'manage' your child. A grounded, spiritual-yet-practical guide to raising emotionally free humans by healing the patterns quietly passed down in families.",
    longDesc: "Conscious Parenting, Sacred Childhood helps you become the calm authority your child can trust — without losing warmth. You'll discover why your nervous system is the real classroom, how to repair after conflict, and how to build a family culture where honesty is safe and emotions don't become chaos. Weaving conscious communication, nervous system regulation, spiritual values, and practical routines — so you can stop reacting from survival mode and start parenting from presence.",
    topics: [
      "Break generational cycles without breaking yourself",
      "Hold boundaries as love — without threats, guilt, or shame",
      "Turn triggers into healing and reaction into leadership",
      "Raise children with strong self-worth, emotional literacy, and resilience",
      "Protect attention and energy in a screen-saturated culture",
      "Guide kids through divorce, loss, moving, and big life changes safely",
    ],
    forYouIf: [
      "You've promised yourself 'I won't parent like that' — and heard old words come out anyway",
      "Your child's behavior triggers parts of you that feel bigger than the moment",
      "You want boundaries without threats and discipline without shame",
      "You are ready to reparent yourself while you parent your child",
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
