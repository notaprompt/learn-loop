# Learn Loop

Learn anything faster by getting it wrong quickly, on purpose, and fixing exactly what broke.

You point a coding agent (Codex, Claude Code, or anything that reads `AGENTS.md`) at your own study material. It writes a question bank. You play the bank in your browser as a game that gets harder as you get better. Then the agent reads what you missed and writes the next round aimed at it. Repeat.

Nothing is hosted. Your documents and your progress stay on your machine.

## Start

```bash
git clone https://github.com/notaprompt/learn-loop
cd learn-loop
```

1. **Try it now.** Open `play.html` in a browser (double-click it). It ships with a 14-question sample bank about how learning works.
2. **Add your material.** Drop PDFs, notes, slides, or an exam guide into `docs/`.
3. **Build your bank.** Open the folder in your agent and say:

   ```
   build a question bank from docs/
   ```

   It writes `bank.js` and checks its own answer key. Reload `play.html`.

## The loop

```
   play.html  ──►  progress.json  ──►  your agent
       ▲                                   │
       └──────  new questions in bank.js ◄─┘
```

1. **Play a Climb**: 12 questions, about 10 minutes.
2. After a few runs, press **Save progress.json** at the bottom of the page and put the file in this folder.
3. Tell your agent: `read progress.json and extend the bank`.
4. Reload the page. The new questions target the things you got wrong, and especially the things you were sure about and got wrong.

## Ask your agent anything

The agent is also the tutor. It is told to work with your understanding instead of handing you a definition:

```
is a database index like the index in the back of a book?
```

You get a yes, partly, or no, what's right in your picture, where it breaks and why, a closer comparison, and one quick question to check it landed. Ask the same thing three different ways if you need to. It is told to try a new angle each time.

After any question in the game, **Copy a question for my agent** puts the question and your answer on the clipboard so you can paste it in and say what you were thinking.

## What the game does

| Mechanic | What happens | Why |
|---|---|---|
| Every screen is a question | No lessons first. The explanation comes after you answer. | Recalling beats rereading. [Roediger & Karpicke 2006](https://doi.org/10.1111/j.1467-9280.2006.01693.x), [Adesope et al. 2017](https://doi.org/10.3102/0034654316689306) |
| Options start hidden | You read the question and guess before you see the choices. | A guess, even a wrong one, makes the answer stick. [Kornell, Hays & Bjork 2009](https://doi.org/10.1037/a0015729) |
| You say how sure you are | Guess, Think so, or Sure locks in each answer. A "sure" miss returns two questions later. | Confident errors are the easiest to correct once exposed. [Butterfield & Metcalfe 2001](https://doi.org/10.1037/0278-7393.27.6.1491) |
| Difficulty follows you | Each concept has a skill rating. The next question is one you're about 80% likely to get. | [Wilson et al. 2019](https://doi.org/10.1038/s41467-019-12552-4) (a theory result; treat 80 to 85% as a target to tune), [Pelánek 2016](https://doi.org/10.1016/j.compedu.2016.03.017) |
| Each question has a forgetting clock | Right answers come back after longer gaps, misses after shorter ones. Review mode serves what's fading. | [Settles & Meeder 2016](https://doi.org/10.18653/v1/P16-1174), [Tabibian et al. 2019](https://doi.org/10.1073/pnas.1815156116) |
| Topics are mixed | Never two in a row from the same topic. | Mixing helps most for things that are easy to confuse. [Brunmair & Richter 2019](https://doi.org/10.1037/bul0000209) |
| The agent never answers first | It asks, you try, then it explains. | Students given full AI answers did worse once the AI was removed. [Bastani et al. 2025](https://doi.org/10.1073/pnas.2422633122) |
| "Ready" needs full mocks | Two timed mocks above the pass mark with margin, and "sure" answers right 90% of the time. | Adaptive practice holds you near 80% by design, so it can't tell you your level. A fixed test can. |

## Modes

- **Climb**: 12 adaptive questions. Misses come back within the run.
- **Review**: what's due and what you've missed.
- **Boss run**: 10 harder questions on a clock.
- **Mock**: timed, no feedback until the end. The only mode that counts toward "ready".

Keys: `1`–`5` pick an option, `Q` `W` `E` lock it in as guess, think so, or sure, `Enter` for the next question.

## Honest limits

- A bank is only as good as the documents and the agent that wrote it. The agent is told to verify its answer key and cite where each answer comes from, and `node tools/validate.mjs` catches structural mistakes, but neither replaces an official practice test. If one exists for your exam, take it before you book.
- The readiness estimate is a model of your answers on this bank. It is not a prediction from real exam data.
- Most of the research above used simpler material than a professional exam. The direction should carry over; the size of the effect may not.

## Files

| File | What it is |
|---|---|
| `play.html` | The game. One file, no build step, no server. |
| `bank.js` | The question bank the game plays. Your agent writes it. |
| `AGENTS.md` | The agent's instructions: how to build a bank, close the loop, explain, and quiz. |
| `tools/validate.mjs` | Checks a bank for broken answer keys and structure. Needs Node. |
| `docs/` | Your study material. Git-ignored. |
| `examples/` | The sample bank, kept so you can get it back. |

MIT license.
