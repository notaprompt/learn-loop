// Sample bank so the page works the moment you open it. It teaches the research the game is built on.
// Your agent replaces this file when you say "build a question bank from docs/". A copy lives in examples/.
window.LEARN_BANK = {
  title: "How learning works (sample)",
  passMark: 0.7,
  mock: { questions: 14, minutes: 15 },
  domains: [
    { id: "practice", name: "How to practice", weight: 0.4 },
    { id: "timing", name: "When to practice", weight: 0.3 },
    { id: "judgment", name: "Judging what you know", weight: 0.3 }
  ],
  items: [
    {
      id: "prc-001", domain: "practice", concepts: ["retrieval-practice"], difficulty: 1,
      stem: "Two students have one hour with the same chapter. One reads it three times. The other reads it once, closes the book, and spends the rest of the hour trying to write down everything from memory. Who is likely to remember more a week later?",
      options: ["The one who read it three times, because they saw the material more", "The one who recalled it from memory", "They will remember about the same", "Whichever one felt more confident at the end of the hour"],
      answer: [1],
      keyword: "a week later",
      why: "Pulling information out of memory strengthens it more than putting it in again. Rereading often wins on a test five minutes later and loses on a test days later.",
      wrong: ["More exposure helps in the short run, but the advantage flips after a delay.", "(correct)", "The difference is reliable and has been repeated many times.", "Rereading makes people feel more confident while leaving them with less."],
      trap: "Treats time spent looking at material as the same thing as learning it.",
      source: "Roediger & Karpicke 2006, https://doi.org/10.1111/j.1467-9280.2006.01693.x"
    },
    {
      id: "prc-002", domain: "practice", concepts: ["retrieval-practice"], difficulty: 2,
      stem: "A student has highlighted the whole textbook and reread the highlights twice. She says the material now feels familiar and easy. What does that feeling tell her?",
      options: ["That she will be able to recall it without the page in front of her", "That highlighting is working and she should keep going", "That she recognizes the material, which is a different skill from recalling it", "That she has reached the limit of what rereading can teach"],
      answer: [2],
      keyword: "feels familiar",
      why: "Familiarity comes from recognizing text you have seen. A test asks you to produce the answer with nothing in front of you, and recognition says little about whether you can.",
      wrong: ["Recall is the thing she has not tested.", "The feeling is the problem here, not evidence of success.", "(correct)", "She may be at that limit, but the feeling of ease is not how you would know."],
      trap: "Uses how easy the material feels as a measure of how well it is known.",
      source: "Adesope, Trevisan & Sundararajan 2017, https://doi.org/10.3102/0034654316689306"
    },
    {
      id: "prc-003", domain: "practice", concepts: ["pretesting"], difficulty: 3,
      stem: "A learner is about to start a topic she has never studied. A tutor suggests she try five questions on it first, before any reading, knowing she will get most of them wrong. What does the research say about this?",
      options: ["It helps, as long as she gets the correct answers afterward", "It hurts, because the wrong guesses get stored as facts", "It makes no difference, because you cannot retrieve what was never learned", "It helps only for the questions she happens to guess correctly"],
      answer: [0],
      keyword: "before any reading",
      why: "A failed attempt to answer makes the correct answer stick better when it arrives. The condition is feedback: the guess has to be followed by the right answer.",
      wrong: ["(correct)", "With feedback, wrong guesses are corrected, and they are corrected more easily than if she had made no guess.", "The attempt itself prepares memory for the answer, even with nothing to retrieve.", "The benefit shows up on the questions she got wrong, too."],
      trap: "Assumes errors made while learning are harmful and should be avoided.",
      source: "Kornell, Hays & Bjork 2009, https://doi.org/10.1037/a0015729"
    },
    {
      id: "prc-004", domain: "practice", concepts: ["self-explanation"], difficulty: 3,
      stem: "After getting a practice question wrong, a learner reads the correct answer and its explanation. Which next step is most likely to make the correction last?",
      options: ["Reading the explanation a second time, slowly", "Copying the explanation into his notes word for word", "Moving straight to the next question to keep momentum", "Saying in his own words why the right answer is right and why his was wrong"],
      answer: [3],
      keyword: "make the correction last",
      why: "Explaining it yourself forces you to connect the new answer to what you believed before, and that is where the wrong belief gets repaired. Reading and copying can be done without understanding.",
      wrong: ["A second reading adds familiarity, not understanding.", "Copying is possible with no comprehension at all.", "Speed feels productive but skips the repair.", "(correct)"],
      trap: "Offers activities that look like effort but ask for no thinking.",
      source: "Chi et al. 1994, https://doi.org/10.1207/s15516709cog1803_3"
    },
    {
      id: "prc-005", domain: "practice", concepts: ["ai-help"], difficulty: 4,
      stem: "A school gives one group of students an AI chatbot that will answer any practice problem in full, and a second group a version that only gives hints. Both groups do better on practice than students with no AI. Then all three groups take a test with no AI. Based on a large 2025 field study, what is the most likely result?",
      options: ["Both AI groups beat the no-AI group, since both practiced more successfully", "The full-answer group does worse than students who never had AI, and the hints group does not", "The full-answer group does best, because they saw the most correct solutions", "All three groups score about the same, because practice performance does not carry over"],
      answer: [1],
      keyword: "a test with no AI",
      why: "Students with the full-answer tool let it do the thinking, so their practice scores rose while their own skill did not; without it they scored below the no-AI group. Hints kept the students doing the work.",
      wrong: ["Practice scores measured the tool's ability, not the students'.", "(correct)", "Seeing solutions is not the same as producing them.", "The hints group shows that the design of the help changes the outcome."],
      trap: "Takes performance while being helped as evidence of learning.",
      source: "Bastani et al. 2025, https://doi.org/10.1073/pnas.2422633122"
    },
    {
      id: "prc-006", domain: "practice", concepts: ["retrieval-practice", "ai-help"], difficulty: 5,
      stem: "A learner has an AI tutor and two hours before bed. Plan A: ask the tutor to explain each topic clearly, then ask follow-up questions until every explanation makes sense. Plan B: have the tutor ask her questions, answer each one before seeing anything, and get the explanation only after she commits. She finds Plan A more pleasant and feels she learns more from it. Which plan should she choose for a test next week, and why?",
      options: ["Plan A, because understanding has to come before testing", "Plan A, because her own sense of what works for her is the best guide", "Plan B, because she does the retrieving and the explanations land on a committed answer", "Either, as long as the total time is the same"],
      answer: [2],
      keyword: "answer each one before seeing anything",
      why: "Plan B makes her retrieve and commit, so each explanation corrects something specific. Plan A produces a feeling of understanding that fades, and how pleasant a method feels does not track how much it teaches.",
      wrong: ["Attempting first works even on new material, provided feedback follows.", "Learners reliably prefer the methods that teach them less, because those feel smoother.", "(correct)", "Equal time does not mean equal learning; what she does in that time matters."],
      trap: "Two reasonable-sounding defenses of the comfortable option.",
      source: "Kornell, Hays & Bjork 2009, https://doi.org/10.1037/a0015729; Bastani et al. 2025, https://doi.org/10.1073/pnas.2422633122"
    },
    {
      id: "tim-001", domain: "timing", concepts: ["spacing"], difficulty: 1,
      stem: "A learner has three hours to give to one topic before a test that is two weeks away. Which schedule is likely to leave her remembering the most on test day?",
      options: ["All three hours tonight, while motivation is high", "All three hours the night before the test", "Three hours split across today and tomorrow", "One hour today, one in a few days, one a few days after that"],
      answer: [3],
      keyword: "two weeks away",
      why: "Each review that comes after some forgetting rebuilds the memory stronger and makes it last longer. Spreading the same hours out gives her three of those rebuilds.",
      wrong: ["One block tonight leaves two weeks of forgetting with no review.", "Cramming can pass tomorrow's test and leaves little after it.", "Better than one block, but the gap is too short to get much benefit.", "(correct)"],
      trap: "Offers cramming in two flavors.",
      source: "Tabibian et al. 2019, https://doi.org/10.1073/pnas.1815156116"
    },
    {
      id: "tim-002", domain: "timing", concepts: ["spacing"], difficulty: 3,
      stem: "A flashcard app shows a card again one day after you first get it right, then four days later, then two weeks later. You get a card wrong at the two-week review. What should a well-designed app do with that card?",
      options: ["Keep it on the long schedule, since one miss is noise", "Show it again soon, and rebuild the gaps from short to long", "Show it every day from now on", "Remove it and replace it with an easier card"],
      answer: [1],
      keyword: "get a card wrong",
      why: "The gap should match how strong the memory is. A miss means it was weaker than the schedule assumed, so the gap shrinks and then grows again as you get it right.",
      wrong: ["Ignoring the miss means the next review also arrives after you have forgotten.", "(correct)", "Daily review forever wastes time once the memory is strong again.", "The card is the one you most need."],
      trap: "Overreacts or underreacts to a single miss.",
      source: "Settles & Meeder 2016, https://doi.org/10.18653/v1/P16-1174"
    },
    {
      id: "tim-003", domain: "timing", concepts: ["interleaving"], difficulty: 2,
      stem: "A student is learning to tell apart four kinds of problem that look alike. She can do 20 problems of type A, then 20 of B, then C, then D. Or she can do the same 80 problems shuffled together. Which is better for the test, where the problems come in random order?",
      options: ["Type by type, because she masters each before moving on", "Type by type, because it produces fewer errors during practice", "Shuffled, but only after she is already good at all four", "Shuffled, because she has to work out which type each problem is"],
      answer: [3],
      keyword: "look alike",
      why: "When problems are grouped, she already knows the type before reading the problem, so she never practices telling them apart. Shuffling forces that decision every time, and that decision is what the test demands.",
      wrong: ["She masters doing each type, not recognizing which type she is facing.", "Fewer errors in practice is a sign the practice is too easy, not that it works.", "Mixing helps while learning, not only after.", "(correct)"],
      trap: "Treats smooth practice as good practice.",
      source: "Rohrer & Taylor 2007, https://doi.org/10.1007/s11251-007-9015-8"
    },
    {
      id: "tim-004", domain: "timing", concepts: ["interleaving"], difficulty: 4,
      stem: "A meta-analysis of interleaving found that mixing topics helped most in some conditions and hurt in others. A learner wants to apply this to his study plan. Which use of mixing fits the evidence best?",
      options: ["Mix everything all the time; mixing always beats grouping", "Mix unrelated subjects, such as vocabulary lists with geometry, to keep the brain alert", "Mix the things that are easy to confuse with each other, and expect less from mixing unrelated material", "Group everything; the gains from mixing were too small to matter"],
      answer: [2],
      keyword: "helped most in some conditions and hurt in others",
      why: "The benefit came from comparing similar things side by side, so it was largest when the categories were easy to confuse. For material like word lists, grouping did better.",
      wrong: ["The same analysis found grouping winning for some material.", "Unrelated subjects give nothing to compare, which is where the benefit comes from.", "(correct)", "The overall effect was moderate and reliable where categories were similar."],
      trap: "Turns a conditional finding into an absolute rule in either direction.",
      source: "Brunmair & Richter 2019, https://doi.org/10.1037/bul0000209"
    },
    {
      id: "jdg-001", domain: "judgment", concepts: ["confidence-calibration"], difficulty: 2,
      stem: "On a practice quiz, a learner marks how sure she is of each answer. She gets one question wrong that she was certain about, and another wrong that she had guessed. After seeing the correct answers to both, which correction is she more likely to remember next week?",
      options: ["The one she was certain about", "The one she guessed on", "Both equally", "Neither, because being wrong once does not teach much"],
      answer: [0],
      keyword: "certain about",
      why: "Being confidently wrong is surprising, and the surprise makes people pay attention to the correction. This is called the hypercorrection effect.",
      wrong: ["(correct)", "A guess carries no expectation, so the right answer is less of a jolt.", "The difference is consistent across studies.", "Errors followed by feedback are some of the most effective learning events."],
      trap: "Assumes strongly held errors are the hardest to fix.",
      source: "Butterfield & Metcalfe 2001, https://doi.org/10.1037/0278-7393.27.6.1491"
    },
    {
      id: "jdg-002", domain: "judgment", concepts: ["confidence-calibration"], difficulty: 3,
      stem: "A learner is averaging 82% on practice tests for an exam with a 70% pass mark. When she says she is sure of an answer, she is right 70% of the time. What is the main risk for exam day?",
      options: ["None; 82% is well clear of the pass mark", "She will run out of time from checking answers she was right about", "Her score is inflated because the practice tests were too easy", "She cannot tell which of her answers to trust, so she will not review the ones that need it"],
      answer: [3],
      keyword: "she is right 70% of the time",
      why: "Nearly a third of the answers she feels certain about are wrong. On the exam she will skip reviewing exactly those, and in study she will skip the topics behind them.",
      wrong: ["The average hides a set of beliefs she holds firmly and wrongly.", "Her problem is the opposite: she checks too little.", "Nothing in the scenario says the tests were easy.", "(correct)"],
      trap: "Reads the headline score and ignores what the confidence figure says.",
      source: "Metcalfe 2017, https://doi.org/10.1146/annurev-psych-010416-044022"
    },
    {
      id: "jdg-003", domain: "judgment", concepts: ["optimal-difficulty"], difficulty: 3,
      stem: "A learner can choose how hard her practice questions are. At one setting she gets nearly everything right. At another she gets about half right. A third setting has her right roughly four times out of five. Which setting is the best guess for the fastest progress?",
      options: ["Nearly everything right, to build confidence and momentum", "About half right, because struggle is where learning happens", "Roughly four out of five right", "Whichever setting she enjoys most, since she will practice longer"],
      answer: [2],
      keyword: "fastest progress",
      why: "If everything is right, there is nothing to correct. If half is wrong, the errors are too many to learn from and discouraging. Theory work on learning systems puts the best error rate near 15%, so around 80 to 85% correct is a sensible target.",
      wrong: ["No errors means no information about what to fix.", "Too many errors at once swamps the signal.", "(correct)", "Enjoyment matters for sticking with it, but it is not what the question asks."],
      trap: "Offers 'easy builds confidence' and 'hard builds strength' as the two intuitive extremes.",
      source: "Wilson et al. 2019, https://doi.org/10.1038/s41467-019-12552-4"
    },
    {
      id: "jdg-004", domain: "judgment", concepts: ["optimal-difficulty", "confidence-calibration"], difficulty: 5,
      stem: "An adaptive quiz app always picks questions the learner has about an 80% chance of getting right. After a month her accuracy in the app has held at 80% the whole time. She concludes she has stopped improving and that she would score about 80% on the real exam. Which reading of the number is correct?",
      options: ["Both conclusions are right; the number is her accuracy", "She has stopped improving, but 80% is still a fair exam estimate", "Neither conclusion follows: the app holds accuracy at 80% by raising difficulty, so the number shows the app's target, not her level", "She is improving, and her exam score will be above 80% because the app's questions are harder than the exam's"],
      answer: [2],
      keyword: "always picks questions the learner has about an 80% chance of getting right",
      why: "Steady accuracy in an adaptive system means the questions got harder as she did. To learn her level she needs a fixed test the app did not tune to her, such as a full mock exam.",
      wrong: ["The number is set by the app's design.", "Flat accuracy under rising difficulty is what improvement looks like here.", "(correct)", "She may be improving, but nothing says where the exam sits relative to her current questions."],
      trap: "Reads a controlled number as a measurement.",
      source: "Wilson et al. 2019, https://doi.org/10.1038/s41467-019-12552-4; Pelánek 2016, https://doi.org/10.1016/j.compedu.2016.03.017"
    }
  ]
};
