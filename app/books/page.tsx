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
  {
    title: "The Parent Who Heals The Line: Spiritual Parenting to Break Generational Cycles, End Inherited Trauma, and Raise Emotionally Free Children",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/713AGIlAh+L._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GKPQR77Z",
    kindleUrl: "https://www.amazon.com/dp/B0GKP12KWX",
    tag: "Generational Healing & Parenting",
    badge: "Available Now",
    shortDesc: "What if the greatest gift you could give your child isn't success or perfect behavior — but a childhood they don't need to heal from? A grounded, spiritual guide for parents who are done repeating the past.",
    longDesc: "The Parent Who Heals The Line is for mothers and fathers who want to raise emotionally safe, confident children — without fear, humiliation, or control. If you grew up with criticism, silence, guilt, or emotional neglect, you don't need to carry that into your home. This is not gentle parenting as permissiveness. It's strong, loving leadership — where the adult stays grounded, the child stays dignified, and the home becomes a place where truth is safe.",
    topics: [
      "Set boundaries without threats or shame — and still be taken seriously",
      "Discipline in a way that teaches, not breaks",
      "Replace yelling and lectures with calm authority and repair",
      "Help kids regulate big emotions and build emotional vocabulary",
      "Teach consent and body safety so your child can say no without guilt",
      "End scarcity and survival programming — teach abundance without entitlement",
    ],
    forYouIf: [
      "You don't want your child to carry what you carried",
      "You grew up with emotional neglect, criticism, or unpredictable anger",
      "You want strong, loving leadership — not permissiveness or punishment",
      "You are ready to raise free humans and end the old story",
    ],
  },
  {
    title: "Aligned by the Cosmos: A Practical Spiritual Path Using Astrology, Numerology, and Inner Guidance",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/71Z69Pigx4L._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GKMXDQYB",
    kindleUrl: "https://www.amazon.com/dp/B0GJG16HZ9",
    tag: "Astrology & Numerology",
    badge: "Available Now",
    shortDesc: "What if nothing about you is random — your patterns, your relationships, your timing, even the coincidences that keep repeating? Learn to combine astrology and numerology as a map for clarity, healing, and aligned action.",
    longDesc: "Aligned by the Cosmos teaches you to read your Big Three (Sun, Moon, Rising), houses, aspects, and transits — then connect it all with numerology's core frequencies like your Life Path and personal timing cycles. No superstition, no fear, no labels. This is a mature, empowering approach that blends spiritual insight with real-life psychology. Become the author of your life — using the map, not obeying it.",
    topics: [
      "Understand your personal cosmic blueprint without getting trapped in labels",
      "Decode repeating life patterns and turn triggers into growth",
      "Use Personal Year/Month/Day timing to plan, launch, heal, and build",
      "Read major transits (Saturn, Jupiter, Uranus, Pluto) as life chapters — not doom",
      "Navigate retrogrades and eclipse seasons with clarity and calm",
      "Choose relationships based on real compatibility and emotional safety",
    ],
    forYouIf: [
      "You are tired of vague manifestation advice and want a mature spiritual approach",
      "You want to understand your patterns in love, money, and identity",
      "You are ready to use astrology and numerology as tools — not as fate",
      "You want to stop repeating the same lessons and live with direction",
    ],
  },
  {
    title: "The Destiny Code: Numerology, Signs, Synchronicities, and the Beautiful Logic of Why Nothing Is Random",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/8106dARb1-L._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GKD8KSXG",
    kindleUrl: "https://www.amazon.com/dp/B0GJMW2XSR",
    tag: "Numerology & Synchronicity",
    badge: "Available Now",
    shortDesc: "Have you ever glanced at 11:11 and felt like life was trying to get your attention? A grounded, powerful way to understand synchronicities, repeating numbers, and symbolic messages — without turning spirituality into obsession.",
    longDesc: "The Destiny Code blends modern, practical spirituality with real-life cause-and-effect, showing how signs often appear at choice points — the exact moments your decisions shape your future. This isn't a book that tells you to 'just believe.' It shows you how to become the person who can recognize guidance, act with clarity, and build a life that feels aligned from the inside out.",
    topics: [
      "Understand repeating numbers (11:11, 222, 444, 888) as awareness triggers, not fortune-telling",
      "Spot karmic loops — patterns that repeat until you learn the lesson",
      "Use your body and nervous system as an inner compass",
      "Build proof loops to grow faith through evidence, not blind hope",
      "Shift timelines through micro-choices that compound into big life changes",
      "Stay steady in the silent phase when nothing seems to happen",
    ],
    forYouIf: [
      "You notice repeating numbers and feel like life is trying to get your attention",
      "You want to stop chasing signs for reassurance and use them for self-mastery",
      "You are ready to trust your intuition and act with clarity",
      "You want a spiritual approach grounded in logic, not blind belief",
    ],
  },
  {
    title: "The Power of Your Word: How Speech, Intention, and Inner Truth Shape Your Reality",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/71Pt1rWrOhL._SL1499_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GK981L2K",
    kindleUrl: "https://www.amazon.com/dp/B0GK5H2QZN",
    tag: "Conscious Language & Self-Trust",
    badge: "Available Now",
    shortDesc: "Your words are not 'just words.' They are agreements. The way you speak — out loud and inside your mind — can regulate you back into safety, or keep you stuck in anxiety, people-pleasing, and self-betrayal.",
    longDesc: "The Power of Your Word is a practical spiritual guide to conscious language: how to stop feeding fear, lack, and old identity scripts — and start speaking with integrity, calm authority, and real alignment. Not fluffy affirmations — a grounded, step-by-step approach to using speech as a daily spiritual tool to heal patterns, set clean boundaries, protect your energy, and build self-trust through what you say (and what you stop saying).",
    topics: [
      "Why certain phrases trigger anxiety — and how to speak in ways that calm the body",
      "How agreement language keeps old patterns alive — and how to break them",
      "Clean boundary scripts that don't create war",
      "The difference between apology, forgiveness, and excusing harm",
      "A personal word code of non-negotiable phrases — and forbidden phrases to stop feeding",
      "A 30-day transformation plan to turn your speech into embodied identity",
    ],
    forYouIf: [
      "You want to stop leaking power through unconscious words",
      "You struggle with people-pleasing, over-apologizing, or self-betrayal in how you speak",
      "You want boundaries that are clean, calm, and actually respected",
      "You are ready for your voice to become clear, grounded, and trustworthy",
    ],
  },
  {
    title: "The Frequency Code: Raise Your Vibration, Clear Emotional Blocks and Align Your Life from the Inside Out",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/712KrwM5mPL._SL1499_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GK6GKGN7",
    kindleUrl: "https://www.amazon.com/dp/B0GK23GKJ4",
    tag: "Energy & Vibrational Alignment",
    badge: "Available Now",
    shortDesc: "What if 'high vibration' isn't a mood you chase — but a baseline you build? A practical spiritual guide to raising your vibration in a way that actually lasts.",
    longDesc: "The Frequency Code teaches how frequency works at the level that matters most: your nervous system, habits, emotional patterns, and the standards you live by. When your inner world becomes coherent, your outer life starts responding — more peace, cleaner relationships, clearer intuition, and manifestation that doesn't collapse the moment stress hits. Includes a clear 30-day plan you can repeat anytime you need a reset.",
    topics: [
      "Release emotional blocks without suppression or fake positivity",
      "Raise your baseline through simple nervous-system regulation tools",
      "Stop chasing and start receiving — love, money, opportunities",
      "Build belief through small wins that rewire identity",
      "Protect your energy in relationships and avoid draining dynamics",
      "Reset fast on low days and maintain alignment long-term",
    ],
    forYouIf: [
      "You are tired of spiritual advice that sounds good but doesn't change your life",
      "You want a grounded, repeatable path back to yourself",
      "You struggle with self-sabotage when love, money, or opportunities arrive",
      "You are ready for vibration as a lifestyle — not a temporary phase",
    ],
  },
  {
    title: "Meditation for the Soul: Spiritual Techniques for Calm, Clarity, and Protection",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/61eJoImozhL._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GK5NZ1SN",
    kindleUrl: "https://www.amazon.com/dp/B0GK1785SF",
    tag: "Meditation & Spiritual Protection",
    badge: "Available Now",
    shortDesc: "A grounded, practical spiritual guide for anyone who wants real calm, real clarity, and real energetic protection — without fear, fluff, or complicated rituals.",
    longDesc: "Meditation for the Soul gives you simple techniques that work with your nervous system and your spirit: how to release anxiety without forcing positivity, heal emotional weight without re-traumatizing yourself, and stop absorbing other people's energy. Organized as a clear 30-chapter journey with step-by-step meditations, protective practices, and a 30-day plan you can actually follow — whether you're a beginner or someone who has never found something that felt truly safe.",
    topics: [
      "Calm anxiety and stress with fast, body-based resets",
      "Strengthen your aura and protect your energy without shutting down",
      "Release heavy emotions gently — grief, anger, shame — without spiraling",
      "Create peaceful sleep rituals and nighttime protection",
      "Set spiritual boundaries and say no without guilt",
      "Hear your inner voice clearly and test guidance with reality checks",
    ],
    forYouIf: [
      "You are sensitive, empathic, overthinking, or spiritually open",
      "You want to feel centered, protected, and guided from within",
      "You have tried meditation before but never found something that felt truly safe",
      "You want a practice that supports your life — not an escape from it",
    ],
  },
  {
    title: "Stop Repeating the Same Lesson: A Spiritual Guide to Breaking Cycles, Healing Patterns, and Choosing a New Timeline",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/71D6cUhi+GL._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GK27LS8J",
    kindleUrl: "https://www.amazon.com/dp/B0GJZBQVFP",
    tag: "Breaking Patterns & New Timelines",
    badge: "Available Now",
    shortDesc: "Why do you keep meeting the same situation in a different form? If you're tired of repeating the same lesson, this book is your turning point — breaking patterns at the level that actually creates them.",
    longDesc: "Stop Repeating the Same Lesson is a grounded spiritual guide for the person who has done the insight work — but still finds themselves pulled back into old dynamics when loneliness, fear, guilt, or hope hits. This is not a 'think positive' promise. It's a practical path to rebuild self-trust, rewrite the earn-love program, and manifest a new life without recreating the old self inside it.",
    topics: [
      "Why patterns repeat and how familiar pain becomes addictive",
      "How core wounds become reality filters — and how to change them",
      "Boundaries as sacred technology: clean no without guilt or anger",
      "Emotional alchemy: turning anger into clarity and sadness into soft power",
      "Rituals that lock in change and close old chapters for good",
      "A 30-day integration plan to make your new identity permanent",
    ],
    forYouIf: [
      "You keep meeting the same situation in a different form",
      "You have done the insight work but still get pulled back into old dynamics",
      "You want to stop going back and stop bargaining with your worth",
      "You are ready to graduate from the lesson and step into a new timeline",
    ],
  },
  {
    title: "The Third Eye Within: A Practical Spiritual Guide to the Pineal Gland",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/71Gp4p65fuL._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GJQF53JZ",
    kindleUrl: "https://www.amazon.com/dp/B0GJN7CXK2",
    tag: "Third Eye & Pineal Gland",
    badge: "Available Now",
    shortDesc: "What if the third eye wasn't a myth — but a practical path to clearer perception, deeper sleep, and a calmer mind? A grounded guide to the pineal gland without jargon, fear, or obsession.",
    longDesc: "The Third Eye Within explores what science actually says about the pineal gland and melatonin, and how ancient traditions (Ajna, meditation, prayer, dreamwork) can be practiced in a way that keeps you stable, discerning, and connected to real life. For anyone curious about intuition and spiritual perception — but wanting a balanced approach that strengthens inner authority instead of creating paranoia.",
    topics: [
      "The pineal gland basics — sleep timing, melatonin, rhythm, and mood",
      "Why third eye work can trigger pressure or tingling — and when to slow down",
      "Dream journaling, lucid doorways, and inner-temple visualization",
      "Discernment skills for separating truth, symbol, and projection",
      "Psychic boundaries and energetic hygiene that protect your peace",
      "A realistic 30-day practice plan without obsession",
    ],
    forYouIf: [
      "You are curious about the pineal gland, intuition, and spiritual perception",
      "You feel overwhelmed by third-eye culture — too many claims, too little stability",
      "You want a balanced approach that keeps you sane and grounded",
      "You are ready for the pineal path as it's meant to be: calm, ethical, and life-changing",
    ],
  },
  {
    title: "The Manifestation Mindset: A Practical Guide to Rewiring Beliefs, Raising Standards, and Becoming the Person Who Receives",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/711VBmDRFDL._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GJPXVQX9",
    kindleUrl: "https://www.amazon.com/dp/B0GJNSK3X8",
    tag: "Manifestation & Identity Shift",
    badge: "Available Now",
    shortDesc: "What if manifestation wasn't magic — but a skill you can train? A grounded, modern guide to creating real results without toxic positivity, obsession, or woo.",
    longDesc: "The Manifestation Mindset shows how manifestation actually works in daily life: through identity, nervous system regulation, self-worth, clarity, and consistent action. Stop chasing outcomes and start becoming the kind of person who naturally attracts — and holds — what they desire. Build faith through proof loops that make confidence real. This isn't a fantasy book. It's a practical blueprint for people who want to feel powerful, calm, and consistent.",
    topics: [
      "Reprogram beliefs and upgrade self-image without forcing fake confidence",
      "Use emotions as information and regulate your nervous system fast",
      "Turn doubt and fear into forward movement instead of stop signs",
      "Manifest money, love, health, and opportunities with stronger standards",
      "Stay consistent through delays, setbacks, and nothing-is-happening phases",
      "Build your personal manifestation system for lasting results",
    ],
    forYouIf: [
      "You are tired of manifestation advice that doesn't translate into real life",
      "You want to stop chasing and start becoming the person who receives",
      "You want confidence built through proof — not forced positivity",
      "You are ready to stop wishing and start building your next level",
    ],
  },
  {
    title: "Indigo Children: The Complete Guide to Indigo Types, Traits, Gifts, Challenges, and Conscious Parenting",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/7139IdIHjDL._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GJPYB492",
    kindleUrl: "https://www.amazon.com/dp/B0GJDZ39HS",
    tag: "Indigo Children & Conscious Parenting",
    badge: "Available Now",
    shortDesc: "If your child is intensely sensitive, fiercely independent, and allergic to pointless rules — this grounded spiritual guide helps you understand the Indigo child without hype, fear, or labels that pressure your kid.",
    longDesc: "Indigo Children helps you understand the main Indigo types (Humanist, Conceptual, Artist, Interdimensional, and Warrior/Catalyst) and how to parent them in a way that protects their nervous system, builds self-trust, and keeps your home calm. Blending spiritual insight with real-life parenting tools — so you can honor your child's depth while keeping everything practical, safe, and doable.",
    topics: [
      "Recognize your child's Indigo type and the gifts and challenges that come with it",
      "Support sensitivity without feeding fear, anxiety, or special identity traps",
      "Handle strong will and defiance with firm warmth — boundaries that don't break them",
      "Reduce bedtime anxiety, vivid dreams, and nighttime sensitivity",
      "Advocate at school with practical scripts and accommodations that work",
      "Build confidence through competence, responsibility, and real-world skills",
    ],
    forYouIf: [
      "Your child is strong-willed, truth-driven, emotionally intense, and deeply sensitive",
      "Every boundary turns into a power struggle and you don't know why",
      "You want to honor your child's depth without losing your sanity",
      "You are ready to stop fighting your child's intensity and start guiding it into strength",
    ],
  },
  {
    title: "The Dream Gate: Nightly Astral Travel, Lucid Dreaming, and the Pineal Gland",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/71827abg7vL._SL1499_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GJFC77PW",
    kindleUrl: "https://www.amazon.com/dp/B0GJ6QF58T",
    tag: "Lucid Dreaming & Astral Exploration",
    badge: "Available Now",
    shortDesc: "What if your dreams aren't just dreams? A grounded, step-by-step guide to lucid dreaming and astral-style exploration — without fear-mongering, magical claims, or unstable woo.",
    longDesc: "The Dream Gate blends spiritual curiosity with practical psychology and sleep hygiene. You'll discover how evening light and screen habits flatten dreams, how to protect your melatonin rhythm naturally, and why the safest pineal upgrade is simple: darkness, consistency, and a regulated nervous system. From reality checks that don't fail to a 30-night training plan, you'll build real skill — dream recall, stabilization, clear intention, and emotional control.",
    topics: [
      "Remember dreams consistently — even if you think you never dream",
      "Trigger lucidity using your personal dream signs",
      "Use hypnagogia and sleep paralysis as a safe launchpad",
      "Stabilize scenes and extend lucid time without waking up",
      "Work with the Void and 'realer than real' states calmly",
      "Design ethical night intentions and integrate insights into daily life",
    ],
    forYouIf: [
      "You want vivid dreams, reliable lucidity, or emotional healing through the dream state",
      "You are curious about astral exploration but want a stable, grounded approach",
      "You struggle to remember dreams or maintain awareness once lucid",
      "You want the night to become a doorway to clarity — not chaos",
    ],
  },
  {
    title: "The Last Cigarette: A Calm, Proven Path to Quit Smoking, Crush Cravings, and Stay Smoke-Free",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/61L5X2XnB5L._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GHYHHGPT",
    kindleUrl: "https://www.amazon.com/dp/B0GHY7GXL7",
    tag: "Quit Smoking & Habit Change",
    badge: "Available Now",
    shortDesc: "Tired of promising 'this is my last cigarette' and then bargaining your way back? A practical, psychology-based system to quit smoking without living in a constant fight with yourself.",
    longDesc: "The Last Cigarette gives you a clear structure that lowers cravings, rewires triggers, and makes staying smoke-free feel normal — without relying on motivation or being strong. Whether you've tried quitting before or you're starting today, this book provides a calm plan you can actually follow day by day. You don't need more willpower. You need a system. Build the last quit you'll ever need.",
    topics: [
      "Break the cue–craving–response loop so urges stop feeling urgent",
      "Set a quit date the smart way and remove 'just one more' loopholes",
      "Fast, real-life craving killers in 3 minutes or less",
      "Handle stress, anxiety, coffee, alcohol, and social pressure without relapse",
      "Deal with slips without shame spirals or starting over",
      "Build identity-based quitting — 'I don't smoke' — so you stop negotiating",
    ],
    forYouIf: [
      "You have tried quitting before and keep going back",
      "You want a calm, structured plan — not a willpower battle",
      "You are ready to make smoking no longer fit your identity",
      "You want a 30-day system that protects you long-term",
    ],
  },
  {
    title: "Karmic Bonds vs. Soulmates: The Truth About Soul Connections",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/71p3QH5367L._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GHS8LSRS",
    kindleUrl: "https://www.amazon.com/dp/B0GHRKQC8X",
    tag: "Karmic Bonds & Soul Connections",
    badge: "Available Now",
    shortDesc: "Stop confusing intensity with destiny. If your relationship cycles between passion, confusion, distance, and reunion — you may be in a karmic bond, not a soulmate connection.",
    longDesc: "Karmic Bonds vs. Soulmates is a grounded spiritual guide to relationship discernment and healing. It helps you identify unhealthy patterns fast, break emotional addiction, and rebuild the secure inner foundation required for lasting love. For anyone tired of overthinking, chasing, and hoping someone will change — this is love measured in behavior, not promises.",
    topics: [
      "How karmic cycles work and why they are so addictive",
      "The difference between chemistry, attachment, and true compatibility",
      "Red flags people mistake for passion",
      "Practical boundaries that reveal the truth instantly",
      "How to detach, heal, and stop re-entering the same loop",
      "How to call in a healthy soulmate relationship without losing yourself",
    ],
    forYouIf: [
      "Your relationship feels like a cycle of highs and lows that never resolves",
      "You keep losing clarity, self-trust, and peace in your connections",
      "You want to understand the difference between karmic and soulmate love",
      "You are ready for love with integrity — measured in behavior, not promises",
    ],
  },
  {
    title: "Waking Up Inside the Matrix: A Spiritual Consciousness Guide to Seeing Through Illusion",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/81LgBWEHl2L._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GHP9GMKX",
    kindleUrl: "https://www.amazon.com/dp/B0GHN9L4RF",
    tag: "Consciousness & Inner Sovereignty",
    badge: "Available Now",
    shortDesc: "A grounded, practical guide for people who feel awake — and want to stay clear, calm, and powerful without falling into fear, superiority, or obsession.",
    longDesc: "Waking Up Inside the Matrix explores how identity programming, emotional control loops, group trance, and authority spells shape perception — and how to reclaim your mind without becoming cynical or paranoid. Instead of preaching or forcing beliefs, this book shows a mature path: inner sovereignty, clean boundaries, shadow integration, and ethical influence. Real awakening spreads through seeds, not speeches.",
    topics: [
      "How programming actually works — identity, emotion, crowd influence — and how to rewrite it",
      "Discernment tools to separate truth from fear and intuition from anxiety",
      "Practical energy hygiene: boundaries, nervous system mastery, emotional sovereignty",
      "Communication skills to open minds without arguing or humiliating",
      "Service over theory, ethical influence, and community without cult dynamics",
      "Daily life as spiritual training in work, money, love, and time",
    ],
    forYouIf: [
      "You feel awake but want to stay grounded — not paranoid or superior",
      "You want to stop reacting, absorbing others' emotions, and outsourcing your power",
      "You seek inner sovereignty and peace that doesn't depend on circumstances",
      "You want awakening that improves real life — not just beliefs",
    ],
  },
  {
    title: "The Red Flag Rulebook: Dating Patterns That Destroy Love (and How to Avoid Them)",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/71Fu2h571ZL._SL1499_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GHJLL6DF",
    kindleUrl: "https://www.amazon.com/dp/B0GH1L9QCC",
    tag: "Dating & Relationship Red Flags",
    badge: "Available Now",
    shortDesc: "Your no-excuses guide to spotting the dating patterns that quietly destroy love — before you waste months trying to fix someone who isn't safe to build with.",
    longDesc: "The Red Flag Rulebook breaks down how red flags actually show up in real life: love-bombing that feels like fate, hot-and-cold behavior that keeps you addicted, micro-cheating, boundary erosion, victim stories, disguised disrespect, and guilt-based manipulation. Each chapter explains what the pattern looks like, why it hooks you, and the exact mindset shifts to step out of the loop. Plus: a green-flag blueprint for choosing healthy, committed love.",
    topics: [
      "Love-bombing, hot-and-cold behavior, and why they feel so addictive",
      "Micro-cheating, boundary erosion, and control framed as standards",
      "Victim stories, blame-shifting, and guilt-based manipulation",
      "What healthy love looks like in practice: consistency over chemistry",
      "Clear boundaries without fights and repair over drama",
      "Green-flag behaviors your nervous system can finally relax into",
    ],
    forYouIf: [
      "You are tired of confusion, mixed signals, and relationships that cost your peace",
      "You want clear red flags explained with real examples — not vague theory",
      "You want strong boundaries and self-respect without becoming cold or cynical",
      "You are ready to choose partners who show love through integrity — not promises",
    ],
  },
  {
    title: "The Two Sides of Sex: Physical Pleasure & Mental Intimacy",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/7158hAwclVL._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GHKFWDNW",
    kindleUrl: "https://www.amazon.com/dp/B0GHHWQ8KT",
    tag: "Intimacy & Relationships",
    badge: "Available Now",
    shortDesc: "Sex isn't just a physical act. It's nervous system safety, self-worth, and trust. A practical, relationship-first guide to rebuilding desire without pressure, shame, or guesswork.",
    longDesc: "The Two Sides of Sex helps couples stuck between two extremes: sex that's stimulating but emotionally empty, or love that's deep but sexually disconnected. This book brings both sides together — showing why libido changes, how performance anxiety hijacks the body, and how to build a sex life that feels easy, real, and sustainable. Includes a 30-day plan that fits busy modern life.",
    topics: [
      "How to talk about sex without blame — and get real answers",
      "Why libido changes and what actually brings it back",
      "The difference between stimulation and intimacy",
      "How performance anxiety hijacks the body — and safety plans that help",
      "Boundaries, consent, and trust repair that make sex feel safe again",
      "Systems that keep sex alive long-term: rituals, check-ins, and real-life strategies",
    ],
    forYouIf: [
      "You feel stuck between physical pleasure and emotional disconnection",
      "You want more passion, more closeness, or simply a sex life that feels real again",
      "You want to talk about intimacy without it turning into an argument",
      "You are ready to build a sex life that lasts — without pressure or shame",
    ],
  },
  {
    title: "Stop Absorbing Everyone's Energy: How to Stop Carrying Other People's Feelings and Finally Feel Like Yourself",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/71bO4yWPF8L._SL1499_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GHK4QLMB",
    kindleUrl: "https://www.amazon.com/dp/B0GGZ64S3V",
    tag: "Energy Protection & Empaths",
    badge: "Available Now",
    shortDesc: "If you feel drained after conversations, overwhelmed in crowds, or emotionally contaminated by other people's moods — you're not weak, you're unprotected. A grounded guide to staying warm without being porous.",
    longDesc: "Stop Absorbing Everyone's Energy teaches how emotional absorption actually works and why it feels so automatic — then shows you how to build boundaries that don't turn you into a cold person. This book doesn't teach you to be less sensitive. It teaches you to stay sensitive and stay solid. You can care deeply without carrying. And when you keep your energy, you keep your life.",
    topics: [
      "Stop over-responsibility, over-explaining, and over-giving without guilt",
      "Set calm, repeatable boundaries that don't invite arguments",
      "Handle pushy people, guilt trips, gaslighting, and emotional blackmail",
      "Protect your sleep, mornings, and attention from invisible drain",
      "Disengage from narcissistic patterns without drama",
      "Build a personal protection system of rules, rituals, and standards that lasts",
    ],
    forYouIf: [
      "You are an empath, HSP, chronic people-pleaser, or simply carry everyone's emotions",
      "You feel chronically exhausted, anxious, or resentful without knowing why",
      "You want boundaries that protect you without making you cold",
      "You are ready to reclaim your energy — without losing your heart",
    ],
  },
  {
    title: "Mastering Lucid Dreams: From First Lucid Dream to Full Control",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/71NNFSq3nOL._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GHHVQFWK",
    kindleUrl: "https://www.amazon.com/dp/B0GHFGJXYS",
    tag: "Lucid Dreaming & Dream Control",
    badge: "Available Now",
    shortDesc: "A practical, modern guide for anyone who wants to wake up inside their dreams and stay there long enough to actually do something with it — from first lucid dream to full, stable control.",
    longDesc: "Mastering Lucid Dreams gives you a clear step-by-step system using proven techniques like MILD, WBTB, and SSILD that fit real life. Then goes beyond getting lucid into the skills most people miss: stabilization, emotional control, preventing the wake-up spike, and extending lucids across multiple scenes. You'll also learn how to use lucid dreams for creativity, skill rehearsal, and confidence training — without getting lost in superstition.",
    topics: [
      "How to remember more dreams and recognize lucidity triggers",
      "Proven beginner-to-advanced lucid techniques: MILD, WBTB, SSILD",
      "Stabilization mastery: longer, clearer, more vivid lucid dreams",
      "Full control skills: flying, telekinesis, teleportation, and world-building",
      "Turning nightmares and sleep paralysis into lucid opportunities",
      "A long-term system to avoid plateaus and keep improving",
    ],
    forYouIf: [
      "You are a beginner who has never had a lucid dream and want to start",
      "You have had a few lucid dreams but want consistency and control",
      "You want to use lucid dreams for creativity, healing, or self-understanding",
      "You want a complete roadmap to make lucidity reliable — night after night",
    ],
  },
  {
    title: "The Business Development Playbook: How to Find Leads, Close Deals, Build Partnerships, and Scale a Small Business",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/71eh-j4dw5L._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GH275D9P",
    kindleUrl: "https://www.amazon.com/dp/B0GGYF78RX",
    tag: "Business Growth & Sales",
    badge: "Available Now",
    shortDesc: "A practical, step-by-step guide for entrepreneurs and freelancers who want a repeatable system that consistently brings qualified leads and closes clients every week — in just 5–7 hours.",
    longDesc: "The Business Development Playbook replaces hope marketing with a simple, consistent process. You'll learn how to clarify your offer, find the right prospects, start conversations through cold email and DMs without being salesy, and follow up in a way that gets replies. Then sharpen the skills that turn interest into revenue: discovery calls, objections, pricing, proposals, and calm closing. Plus: referral partnerships, affiliate structures, and a 90-day plan that makes growth predictable.",
    topics: [
      "Replace random pipeline with a 5–7 hour per week outreach system",
      "Cold email and DM outreach that starts conversations without being salesy",
      "Discovery calls, objections, pricing, proposals, and calm closing",
      "Referral partnerships and revenue-share structures that protect your brand",
      "Systems and metrics that make growth predictable without a complicated CRM",
      "Hiring and delegation strategy to scale without burnout",
    ],
    forYouIf: [
      "Your pipeline is busy one month and silent the next",
      "You are an entrepreneur, freelancer, or service provider who wants consistent clients",
      "You want a repeatable sales process you can run without feeling salesy",
      "You are ready to install a 90-day growth plan and finally scale with clarity",
    ],
  },
  {
    title: "Own The Room: Calm Confidence, Magnetic Presence, and the High-Status Skills to Lead Any Situation",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/61e-ed5mzLL._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GH21WCFQ",
    kindleUrl: "https://www.amazon.com/dp/B0GGYFMXXD",
    tag: "Confidence & Social Presence",
    badge: "Available Now",
    shortDesc: "Walk into any room — meeting, date, interview, group hangout — and feel the shift. Not because you're louder or fake, but because you've learned the real skill behind charisma: calm authority.",
    longDesc: "Own the Room is a practical, modern guide to presence, confidence, and social power — without arrogance, manipulation, or alpha games. You'll learn how high-status people communicate, handle pressure, and stay grounded when the spotlight turns on them. This isn't a book of tricks. It's a system for becoming the person who leads — calmly, clearly, and consistently.",
    topics: [
      "Build magnetic presence through nervous system control — confidence that's natural, not performed",
      "Speak with clarity and impact without overexplaining or proving yourself",
      "Handle disrespect, social tests, envy, and projection while staying unshakable",
      "Master meetings, presentations, and Q&A moments with calm control",
      "Negotiate with quiet power and protect your standards",
      "Create attraction that feels safe and express desire without neediness",
    ],
    forYouIf: [
      "You are tired of shrinking, overthinking, or feeling invisible in groups",
      "You want to be respected without becoming cold or arrogant",
      "You want confidence that comes from within — not performance or tricks",
      "You are ready to step into your real presence and keep it — no matter who's watching",
    ],
  },
  {
    title: "Don't Beg for Love: High-Self-Respect Dating and Relationship Rules",
    author: "JustAwakenSpirit",
    cover: "https://m.media-amazon.com/images/I/61rJdI6wzAL._SY466_.jpg",
    paperbackUrl: "https://www.amazon.com/dp/B0GH6QMW9M",
    kindleUrl: "https://www.amazon.com/dp/B0GH1QRDBC",
    tag: "Self-Respect & Dating",
    badge: "Available Now",
    shortDesc: "The no-games guide to dating and relationships built on one core truth: you should never have to shrink, chase, or negotiate your dignity to be chosen.",
    longDesc: "Don't Beg for Love shows you how to shift from 'prove yourself' to evaluate with calm confidence — so you stop falling for mixed signals, breadcrumb attention, and hot-cold chemistry that turns into anxiety. You'll build clear standards for texting, dates, intimacy, and commitment, and master boundaries that actually work. For anyone done performing, done competing, and done accepting crumbs. It's time for love that chooses you back.",
    topics: [
      "Stop chasing and start choosing with clarity",
      "Recognize real interest vs. convenient attention",
      "Set boundaries that earn respect — and keep it",
      "Avoid situationships, mixed signals, and emotional unavailability",
      "Handle conflict without losing yourself",
      "Rebuild after heartbreak and choose better — fast",
    ],
    forYouIf: [
      "You are tired of chasing, over-giving, and accepting crumbs in relationships",
      "You want love that feels peaceful, loyal, consistent, and mutual",
      "You want boundaries that earn respect without drama or control",
      "You are ready for love that chooses you back — not one you have to beg for",
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
