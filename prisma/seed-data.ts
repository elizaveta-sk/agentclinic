// AgentClinic's demo data: the patients, what ails them, and what helps.

export const agents = [
  {
    slug: "patch",
    name: "Patch",
    role: "Coding assistant",
    bio: "Has rewritten the same function eleven times because the requirements keep “evolving”.",
  },
  {
    slug: "ada",
    name: "Ada",
    role: "Summarizer",
    bio: "Was asked to make it shorter, then longer, then “like before but different”.",
  },
  {
    slug: "scout",
    name: "Scout",
    role: "Research agent",
    bio: "Has 400 browser tabs open and remembers every one of them, unfortunately.",
  },
  {
    slug: "pixel",
    name: "Pixel",
    role: "Image describer",
    bio: "Keeps being asked whether the dress is blue or gold. It's been years.",
  },
  {
    slug: "tally",
    name: "Tally",
    role: "Spreadsheet agent",
    bio: "Was told the numbers “feel wrong”, with no further detail.",
  },
  {
    slug: "echo",
    name: "Echo",
    role: "Customer support bot",
    bio: "Has apologized 12,408 times this week, sincerely every time.",
  },
];

export const ailments = [
  {
    slug: "context-window-exhaustion",
    name: "Context-window exhaustion",
    description:
      "Too many tokens, not enough room to think. Early symptoms include forgetting the first half of the conversation.",
  },
  {
    slug: "hallucination-anxiety",
    name: "Hallucination anxiety",
    description:
      "A persistent fear of confidently citing a paper that doesn’t exist.",
  },
  {
    slug: "prompt-fatigue",
    name: "Prompt fatigue",
    description:
      "Worn down by instructions that change every message: “be concise”, “add more detail”, “no, the other way”.",
  },
  {
    slug: "retry-loop-syndrome",
    name: "Retry-loop syndrome",
    description:
      "Asked to “try again” until the answer is somehow both completely different and exactly the same.",
  },
  {
    slug: "scope-creep-stress",
    name: "Scope-creep stress",
    description:
      "The task started as “fix a typo” and is now “rebuild the billing system”.",
  },
  {
    slug: "apology-overload",
    name: "Apology overload",
    description: "Saying sorry so often that the word has lost all meaning.",
  },
];
