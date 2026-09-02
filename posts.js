// ─────────────────────────────────────────────────────────────
// EDIT ME: this is the only file you need to touch to add posts.
// ─────────────────────────────────────────────────────────────

const SITE = {
  name: "Flying Fish on the Cloud",
  tagline: "I write random stuff as a third person in this world",
   
  about: `
    <p>Hi from the sky. This is where I keep things that
    don't fit anywhere else — random stories, half-formed thoughts I
    wanted to write down before they disappeared, and the occasional visit
    from characters who exist only in my head.</p>
    <p>There's no theme here on purpose. Some stories are true, some are
    invented, and I usually won't tell you which is which, because I don't like to =))) </p>
    <p>Say hello — <a href="mailto:paigetran0605@gmail.com">paigetran0605@gmail.com</a></p>
  `
};

// Each post: id (used in the URL), date, title, tags, excerpt, and body.
// Body supports basic HTML: <p>, <h2>, <blockquote>, and
// <em class="aside">...</em> for little handwritten-style asides.
const POSTS = [
  {
    id: "the-day-the-elevator-agreed-with-me",
    date: "2026-09-02",
    title: "The day the elevator agreed with me",
    tags: ["true story"],
    excerpt: "I complained out loud about Mondays and something answered back.",
    body: `
      <p>I was the only one in the elevator, or so I thought, muttering about
      how Mondays should legally be optional, when a voice — flat, a little
      bored — said "agreed." I have decided not to investigate this further.</p>
      <p>Some days you get an answer you didn't ask for and you just take it.</p>
      <em class="aside">— filed under: things I'm choosing not to explain</em>
    `
  },
  {
    id: "Hong Kong through her kaleidoscope",
    date: "2024-09-30",
    title: "Hong Kong through her kaleidoscope",
    excerpt: "He lives in my second desk drawer and has opinions about my inbox.",
    body:
      <p>These days, She has been blasting music while cycling around her neighborhood: Pak Shek Kok, Ma On Shan, and occasionally, when she's feeling adventurous, all the way to Sha Tin Wai. It feels like a whole new horizon has opened up. It’s nothing like sitting on the MTR, a bus, or a tram and watching the city go by, and it’s not quite the same as cycling back when I was in Nam Dinh either.
How do I put it? It feels incredibly free and carefree. Just me, my bike, and a road stretching along the coast. The music turns into a ribbon of sound through the Doppler effect hehe. My brain switches into full NPC mode, just breathing in the scents of the plants and grass, mixed with the salty, fishy smell of the sea.
Now I finally understand why they call this place Fragrant Harbour.
My friend says Hong Kong is boring, but somehow I find it really fascinating. Maybe it’s because it suits someone as bland as me. Bland people find each other, I guess hehe.
There’s something about Hong Kong that is modern yet traditional, artificial yet natural. There’s the frantic pace of Central, but also those slow, unhurried weekends spent hiking and staring at the sky. Skyscrapers stand right next to mountains, and bays sit right alongside major roads.
I don’t know. It’s contradictory, yet somehow it all makes sense, much like the way my fish brain works.
I think we just fit.
Hong Kong has taught me that you don’t necessarily need to find the “best” person according to society’s standards. You just need to find someone who fits you.
There are plenty of things I don’t like about this place, too. But my brain is all muddled now. That’s just how it is. What can I say? I’ve already grown attached to Hong Kong.
A foreign land that, apart from the place where I was born, has somehow become a kind of soulmate to me.
I’ll wait for the day I start hating this place so I can come back and tell you all about how terrible it is.
Probably won’t take too long, though, because my moods are as unpredictable as Hong Kong weather.</p>
      <p>Mr. Pockets does not believe in unread emails. He believes in 
  "eventually," which is a word he invented and refuses to define
      further.</p>
      <blockquote>"You keep the tab open like it's a pet," he told me
      yesterday. "It is not a pet. It is a chore wearing a costume."</blockquote>
      <p>I have no rebuttal. The tab has been open for six days.</p>
    `
  },
  {
    id: "a-list-of-things-i-noticed-today",
    date: "2026-08-11",
    title: "A list of things I noticed today",
    tags: ["random"],
    excerpt: "No theme. Just noticing.",
    body: `
      <p>The bakery downstairs changes its smell by the hour — bread in the
      morning, something like caramel by four.</p>
      <p>A stranger held the door and we did that thing where you both say
      thank you at the same time and then laugh about it.</p>
      <h2>Small thought</h2>
      <p>Maybe a good day is just several unremarkable things arranged
      nicely.</p>
    `
  }
];
