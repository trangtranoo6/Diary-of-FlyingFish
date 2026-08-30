// ─────────────────────────────────────────────────────────────
// EDIT ME: this is the only file you need to touch to add posts.
// ─────────────────────────────────────────────────────────────

const SITE = {
  name: "Flying Fish is on the cloud",
  tagline: "I write random stuff as a third person in this world",
  heroWords: ["experience", "stray thoughts", "imaginary company"], 
  about: `
    <p>Hi from the sky. This is where I keep things that
    don't fit anywhere else — random stories, half-formed thoughts I
    wanted to write down before they disappeared, and the occasional visit
    from characters who exist only in my head.</p>
    <p>There's no theme here on purpose. Some stories are true, some are
    invented, and I usually won't tell you which is which because that line is very blurry.</p>
    <p>Say hello — <a href="mailto:you@example.com">you@example.com</a></p>
  `
};

// Each post: id (used in the URL), date, title, tags, excerpt, and body.
// Body supports basic HTML: <p>, <h2>, <blockquote>, and
// <em class="aside">...</em> for little handwritten-style asides.
const POSTS = [
  {
    id: "the-day-the-elevator-agreed-with-me",
    date: "2026-08-24",
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
    id: "notes-from-mr-pockets",
    date: "2026-08-19",
    title: "Notes from Mr. Pockets, a small imaginary raccoon",
    tags: ["imaginary"],
    excerpt: "He lives in my second desk drawer and has opinions about my inbox.",
    body: `
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
