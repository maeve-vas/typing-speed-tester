const data = {
    movies: [
      {
        title: "The Godfather",
        text: `This classic crime drama explores the complex world of a powerful Italian-American mafia family. It tells the story of Vito Corleone, the patriarch, and his reluctant son Michael who eventually takes over the family business. The film delves into loyalty, betrayal, family honor, and the dark consequences of power and revenge. Michael's transformation from a war hero to a ruthless mafia boss is central to the narrative, highlighting the cyclical nature of violence. The Godfather explores the tension between family values and criminality, showing how personal ambition can corrupt even the most honorable of intentions. Its themes of loyalty, vengeance, and power resonate deeply, making it one of the most iconic films ever made. The film's cinematography and memorable lines, such as "I'm gonna make him an offer he can't refuse," have cemented its place in cinematic history.`
      },
      {
        title: "Forrest Gump",
        text: `Forrest Gump is a simple man with a kind heart who, through sheer coincidence and honesty, finds himself at the center of many key moments in American history. Despite being underestimated his entire life, he inspires people through his sincerity, determination, and unwavering love for his childhood friend Jenny. The film’s message is one of persistence and resilience, showing that anyone can make a significant impact, regardless of intelligence or background. Forrest's journey through the decades, from meeting Presidents to being a war hero, is both humorous and poignant. His unconditional love for Jenny, coupled with his naivety and kindness, provides emotional depth and complexity to the story. Through his eyes, we see an America in turmoil, but also a country capable of greatness through its people. The film’s iconic quotes, such as "Life is like a box of chocolates," capture the heart of its universal message.`
      },
      {
        title: "The Dark Knight",
        text: `This superhero thriller follows Batman as he faces off against the Joker, a chaotic villain who seeks to upend order in Gotham City. The movie explores moral dilemmas, justice, fear, and the thin line between hero and vigilante. It’s a dark, gripping tale about how far one must go to do the right thing. Batman's struggle with his identity and his willingness to sacrifice for the greater good is at the heart of the film. The Joker, portrayed by Heath Ledger, challenges Batman’s principles and forces him to confront his own darkness. The film’s philosophical exploration of good versus evil, the consequences of vigilantism, and the nature of societal order makes it one of the most profound superhero films ever made. The action sequences, especially the iconic truck chase scene, combined with the emotionally charged story, make this film a groundbreaking achievement. The Dark Knight’s impact goes beyond just entertainment; it questions the very nature of heroism and what it means to truly protect people.`
      },
      {
        title: "Star Wars",
        text: `Set in a galaxy far, far away, this epic space opera tells the story of the battle between the Rebel Alliance and the tyrannical Galactic Empire. The story follows a young hero, Luke Skywalker, as he discovers his destiny and learns to harness the mystical power known as the Force. As the saga unfolds, Luke faces personal trials, familial revelations, and epic battles against a dark empire led by the Sith Lord, Darth Vader. The film’s exploration of good versus evil, destiny, and personal growth has made it a cultural phenomenon. Through the story of Luke and his friends—Leia, Han Solo, and Obi-Wan Kenobi—viewers experience the triumphs and sacrifices that define the path of heroes. The visual effects, groundbreaking at the time, have helped establish Star Wars as a benchmark for future sci-fi cinema. The theme of redemption, notably through Darth Vader’s arc, is central to the franchise. The original Star Wars movie (later retitled *A New Hope*) set the stage for one of the most successful franchises in film history, with a legacy that continues to influence pop culture to this day.`
      },
      {
        title: "Titanic",
        text: `This romantic tragedy follows the love story of Jack and Rose, two passengers from different social classes aboard the ill-fated RMS Titanic. As the ship sinks after hitting an iceberg, their bond deepens, leaving a lasting emotional impact about love, loss, and survival. Jack, a poor artist, and Rose, an aristocratic young woman, represent two opposing worlds that collide on the ship. Their passionate love story becomes all the more poignant as the disaster unfolds, with the couple fighting against the inevitable sinking of the ship. The movie not only explores their love but also examines the class divisions and societal expectations of the time. Titanic's lavish sets, combined with James Cameron’s direction, created a cinematic masterpiece that captured audiences worldwide. The haunting theme song "My Heart Will Go On," performed by Celine Dion, became synonymous with the film's emotional power. The movie's depiction of heroism and sacrifice in the face of tragedy, especially by characters like the ship's captain and crew, adds to its timeless appeal.`
      },
      {
        title: "The Matrix",
        text: `A hacker named Neo discovers that reality as he knows it is a simulation controlled by machines. He joins a group of rebels who seek to free humanity from the illusion. The film explores philosophical themes like free will, perception, and what it means to be truly awake. Neo's journey from skepticism to belief in his own potential mirrors the journey of self-realization, questioning the very nature of reality. The Matrix’s groundbreaking special effects, particularly the "bullet time" sequence, became an iconic symbol of the film’s innovative approach. The movie’s existential questions about the role of technology in society continue to resonate, particularly in an increasingly digital world. Neo's battle to free humanity from the machines becomes a metaphor for the human struggle for autonomy and control. The film’s mix of action, philosophy, and futuristic imagery set the standard for cyberpunk and influenced a generation of filmmakers and audiences alike.`
      },
      {
        title: "Back to the Future",
        text: `Teenager Marty McFly accidentally travels back in time using a time machine invented by eccentric scientist Doc Brown. He must navigate the past to ensure his parents fall in love and then find a way back to the future without altering history. The movie combines science fiction, humor, and adventure, exploring the complexities of time travel and its potential consequences. Marty’s antics in the past are both comedic and tense, especially as he interacts with his younger parents, trying to preserve the timeline. The relationship between Marty and Doc, one of mentorship and friendship, adds heart to the film. Back to the Future is a beloved classic that blends action, adventure, and time-bending concepts into an unforgettable ride. Its iconic DeLorean time machine and the concept of alternate timelines have influenced countless other works in the genre. The phrase "Where we're going, we don't need roads" has become synonymous with the movie’s adventurous spirit.`
      },
      {
        title: "Casablanca",
        text: `Set during World War II, Casablanca follows an American expatriate who runs a nightclub in Morocco. When a former lover re-enters his life with her resistance-leader husband, he faces a moral choice between love and duty. It’s a timeless tale of sacrifice and romance. The tension between Rick Blaine, the nightclub owner, and Ilsa, his former lover, creates a compelling emotional backdrop to the story. The film’s portrayal of the morally ambiguous choices people make during times of war speaks to universal themes of loyalty, duty, and love. Casablanca's famous quote, "Here's looking at you, kid," encapsulates the bittersweet nature of love lost and found. The political backdrop of the film, set against the turmoil of World War II, adds depth to its romantic storyline, making it a powerful commentary on personal sacrifice. The combination of unforgettable performances, stirring dialogue, and a hauntingly beautiful score solidified Casablanca as a cinematic masterpiece.`
      },
      {
        title: "Jerry Maguire",
        text: `A sports agent has a crisis of conscience and writes a mission statement about caring for clients as people, not profits. Fired for his honesty, he starts his own agency with a single client and finds deeper meaning in love, work, and personal integrity. Jerry Maguire's journey from corporate greed to personal redemption reflects the theme of rediscovering one’s true values in life. The relationship between Jerry and his assistant, Dorothy, provides both comedic and heartfelt moments, leading to a romantic subplot that enhances the film’s emotional depth. The movie's tagline "Show me the money!" became a cultural catchphrase, symbolizing the film’s comedic exploration of materialism. Jerry’s transformation from self-centered ambition to genuine connection with others is at the heart of the film’s message about the importance of authenticity. The film’s balance of humor, romance, and drama has made it a beloved favorite. Its examination of loyalty, love, and the importance of personal connection resonates with audiences on a deeper level.`
      },
      {
        title: "The Shawshank Redemption",
        text: `Wrongfully imprisoned, Andy Dufresne uses patience, intelligence, and inner strength to survive decades in Shawshank prison. He forges a deep friendship with fellow inmate Red and eventually earns his freedom, embodying the enduring power of hope. The Shawshank Redemption highlights the idea that true freedom lies in the mind, not in physical confinement. Andy's ability to remain hopeful and focused, despite the harsh conditions of the prison, is a testament to the strength of the human spirit. The film’s exploration of friendship, perseverance, and redemption resonates deeply with audiences. The bond between Andy and Red becomes a central theme of the movie, showing how meaningful connections can help people endure even the most dire situations. The movie’s poignant message about the power of hope and second chances has made it a favorite among audiences and critics alike. Its enduring popularity, despite initially having a lukewarm box office reception, is a testament to its emotional depth and lasting impact.`
      }
    ],
    songs: [
      {
        title: "A Sky Full of Stars - Coldplay",
        text: `This song celebrates love and admiration. It compares a beloved person to a sky full of stars, emphasizing how they light up the singer’s life. It's uplifting and emotional, expressing both devotion and a sense of awe. The music’s soaring melody and energizing beat perfectly mirror the sense of wonder and admiration conveyed in the lyrics. The song also touches on the feelings of vulnerability and longing that come with love, as the singer expresses a desire to be close to someone who brings light into their life. Its theme of boundless love resonates deeply with listeners who have experienced the transformative power of love in their own lives. The emotional power of the song is intensified by its vivid imagery, invoking the idea of love as something infinite and celestial. "A Sky Full of Stars" has become one of Coldplay's most iconic tracks, with its uplifting tone and message of devotion appealing to a global audience.`
      },
      {
        title: "Uptown Funk - Mark Ronson ft. Bruno Mars",
        text: `This high-energy funk song is about confidence, flair, and having a good time. With retro vibes and catchy beats, it encourages listeners to dance, be bold, and enjoy life to the fullest. Bruno Mars’ infectious energy and vocal charisma shine through, making the song a celebration of self-expression and joy. The track’s funky groove, coupled with its upbeat lyrics, has made it a staple at parties and celebrations. The song emphasizes enjoying the present moment and exuding confidence, no matter the situation. Its catchy hook and bold brass instrumentation have made it a pop culture phenomenon, appearing in commercials, films, and live performances. "Uptown Funk" has become a quintessential party anthem, known for getting people on their feet and into the groove. The song’s infectious beat and upbeat message make it impossible not to smile and dance along.`
      },
      {
        title: "Shake It Off - Taylor Swift",
        text: `This song is a cheerful anthem about ignoring critics and staying positive. It encourages people to keep dancing, moving on, and not letting negativity slow them down. Taylor Swift's empowering message is that no matter what others say, one should always stay true to themselves and keep going. The catchy beat and fun, carefree vibe of the song make it a feel-good anthem for those facing adversity. Its message is universally relatable, resonating with anyone who has ever faced criticism or doubt. "Shake It Off" became an anthem for self-confidence and resilience, symbolizing the ability to rise above the noise. The song marked a shift in Taylor Swift's career, from country to pop, and became one of her biggest hits. It’s an anthem for anyone who believes in their own worth and isn’t afraid to show it.`
      },
      {
        title: "Happy - Pharrell Williams",
        text: `A feel-good anthem about pure joy and freedom. The upbeat melody and lyrics remind listeners to focus on what makes them happy, regardless of external circumstances. Its infectious rhythm encourages dancing and celebrating life’s simple pleasures, turning it into a global movement. The song’s bright, joyful tone instantly lifts the spirit and brings a smile to anyone who listens to it. “Happy” became a cultural phenomenon, with people across the world joining in flash mobs and performances to share the love. Its universal theme of happiness and the pursuit of joy resonated deeply, making it a chart-topping success. The song also highlights the power of optimism and a positive outlook in overcoming challenges. Its cheerful, catchy chorus continues to inspire people to embrace happiness wherever they can find it.`
      },
      {
        title: "Roar - Katy Perry",
        text: `This empowering pop anthem is about reclaiming one's voice and inner strength. It tells the story of rising above self-doubt and speaking up with confidence and courage. Katy Perry’s bold lyrics and powerful delivery emphasize the importance of standing up for oneself and asserting one’s worth. The song is a reminder that everyone has the strength to overcome obstacles and express their true selves. With its triumphant chorus and uplifting message, "Roar" became an anthem for self-empowerment. The catchy beat and infectious energy of the song encourage listeners to rise above fear and uncertainty. "Roar" inspired many to embrace their inner power and take control of their lives, no matter the challenges they faced. Its themes of self-empowerment and personal growth continue to resonate with listeners around the world.`
      },
      {
        title: "Count on Me - Bruno Mars",
        text: `A heartfelt song about friendship and loyalty. It expresses the comfort of knowing someone will always be there for you through tough times and happy moments alike. Bruno Mars' soothing voice and the song’s gentle melody convey a message of unwavering support and love between friends. The lyrics remind listeners that true friendship is built on trust, reliability, and emotional connection. The song has become a timeless anthem for those who value the bonds of friendship and the importance of being there for each other. It’s a reminder that no matter the distance or the challenge, a real friend will always be there to lend a helping hand. The simple yet profound message of "Count on Me" continues to inspire people to cherish and nurture their closest relationships. It’s a feel-good track that resonates deeply with anyone who values love, loyalty, and support.`
      },
      {
        title: "Let It Go - Idina Menzel (Frozen)",
        text: `An emotional anthem about self-acceptance and letting go of past fears. It speaks to embracing who you truly are and no longer hiding it from the world. In *Frozen*, Elsa sings "Let It Go" as she sheds her inhibitions and embraces her powers, symbolizing the process of self-discovery and liberation. The song’s soaring vocals and sweeping melody elevate the powerful message of personal freedom and self-expression. "Let It Go" became an instant classic, representing not just Elsa’s personal journey but also the universal struggle for acceptance and belonging. Its empowering lyrics encourage listeners to stop living in fear and to embrace their true selves. The song’s success helped *Frozen* become a cultural phenomenon and solidified its place in musical history. The message of "Let it go" has resonated with generations, inspiring countless people to be proud of who they are.`
      },
      {
        title: "Stronger - Kelly Clarkson",
        text: `This song is about resilience and personal growth after a heartbreak. It highlights how pain can make someone tougher and more confident than ever before. Kelly Clarkson’s powerful vocals and the song’s anthem-like chorus make it a rallying cry for anyone who has faced hardship and come out stronger on the other side. The lyrics reflect the journey of overcoming adversity and finding strength through self-empowerment. “Stronger” resonates with those who have battled personal challenges, be it in love, life, or self-identity. The song emphasizes that hardship is not the end, but an opportunity to grow and evolve into a better version of oneself. Clarkson’s raw emotion and energy in the song have made it an enduring anthem of empowerment. It’s a reminder that, no matter how tough life gets, we have the power to rise above and become stronger than before.`
      },
      {
        title: "Fight Song - Rachel Platten",
        text: `A motivational anthem about standing up for oneself. It talks about inner strength and refusing to be ignored or discouraged, even when feeling small. Rachel Platten’s empowering lyrics and emotive delivery inspire listeners to push through obstacles and fight for their dreams. "Fight Song" became a symbol of resilience and determination, motivating people to persevere in the face of challenges. The song’s simple yet profound message is that anyone can be their own hero, no matter how hard life gets. Its soaring chorus and heartfelt lyrics have made it a go-to song for moments of self-reflection and encouragement. "Fight Song" is a declaration of strength and defiance, embodying the spirit of perseverance and hope. It encourages people to take ownership of their life and their future, empowering them to fight for what they believe in.`
      },
      {
        title: "On Top of the World - Imagine Dragons",
        text: `This upbeat track expresses the feeling of achieving something great after a long journey. It’s about gratitude, joy, and celebration after overcoming challenges. Imagine Dragons’ energetic performance and the infectious rhythm of the song make it a celebration of hard work and perseverance. "On Top of the World" is a feel-good anthem that reflects the thrill of reaching a long-awaited goal and the satisfaction that comes with it. The song’s positive message encourages listeners to celebrate their victories, no matter how big or small. Its anthemic chorus and uplifting melody have made it a favorite for moments of triumph. The song inspires people to keep pushing toward their dreams and to appreciate the successes they achieve along the way. It’s a reminder that success is a journey, and enjoying the ride is just as important as the destination.`
      }
    ],
    memes: [
        {
          title: "Distracted Boyfriend",
          text: `A man walks with his girlfriend but turns to check out another woman, representing how people often get distracted from what they already have. The meme is used to show shifting attention from one thing to something newer or more exciting, often in humorous or ironic situations. It highlights how easy it is to become interested in something else, despite the loyalty or commitment to something else. This meme has been applied in a variety of contexts, including relationships, work, and hobbies. It’s frequently used to poke fun at the idea of people ignoring important things in favor of temporary distractions. In some cases, it's used to comment on consumerism or the constant pull of new trends.`
        },
        {
          title: "This Is Fine",
          text: `A dog sits calmly in a room engulfed in flames, saying “This is fine.” It humorously captures the feeling of denial or forced calmness during chaotic or stressful situations, often used to mock people pretending everything is okay when it clearly isn't. The meme speaks to the phenomenon of people trying to maintain composure despite overwhelming problems. It’s frequently used in the context of personal or professional crises, where people continue to act unaffected. Over time, the dog’s calm demeanor in the face of impending disaster has come to represent ignoring or downplaying major issues. It’s become a symbol for coping mechanisms, denial, and the absurdity of acting unfazed while things are falling apart.`
        },
        {
          title: "Woman Yelling at a Cat",
          text: `A split image shows a woman screaming on one side and a confused cat sitting at a dinner table on the other. It represents extreme overreaction versus indifference, and is used to create absurd arguments or mismatched conversations between two ideas. The woman’s exaggerated reaction contrasts with the cat’s calm and confused expression, making it humorous. This meme has been used in countless situations to depict someone overreacting to something trivial, while the other party is completely unbothered. It's become a go-to meme for illustrating the ridiculousness of arguing over petty things. People often use it to make fun of social or political debates, where one side is extremely emotional, while the other side is indifferent or unresponsive.`
        },
        {
          title: "Surprised Pikachu",
          text: `A screenshot of Pikachu with a shocked face, used sarcastically to express surprise at a predictable outcome. It pokes fun at people who act shocked when their actions have obvious consequences. This meme highlights the irony of being "surprised" by something that was easily foreseeable, making it an effective commentary on poor decision-making. It’s commonly used to mock individuals who don't learn from their past mistakes. The meme is often used in personal or political commentary, where the outcome of certain actions was inevitable. Pikachu's wide-eyed, surprised look has become an iconic symbol for moments of sheer disbelief at something that was always bound to happen.`
        },
        {
          title: "Mocking Spongebob",
          text: `SpongeBob bends over and repeats words in a mocking tone. It's used to ridicule someone's complaint or statement by mimicking them in a childish or exaggerated way, symbolizing sarcasm or petty arguments. The meme features an image of SpongeBob in an exaggerated, distorted posture, mocking the person or idea in question. It's often used in response to overdramatic, illogical, or humorous statements, serving as a way to dismiss someone's argument. This meme is popular for its simplicity and how it captures the essence of sarcastic, mocking humor. It’s widely used on social media to poke fun at trivial complaints or exaggerated opinions in a humorous and sometimes childish manner.`
        },
        {
          title: "Drakeposting",
          text: `Drake rejects one idea in the first panel and approves another in the second. It’s used to show preference or make light of contrasting choices. The meme’s strength lies in simple, clear comparisons of what’s “not cool” vs. what’s “cool.” It can be used to depict personal preferences, like choosing one movie over another or deciding on a lifestyle choice. The simplicity of the two-panel format makes it easy to adapt to almost any situation. The meme’s appeal also comes from how relatable the choices can be, making it easy for people to express humor about their decisions. It’s often used to showcase common opinions, such as rejecting bad habits or trends in favor of something better.`
        },
        {
          title: "Is This a Pigeon?",
          text: `A character mistakes a butterfly for a pigeon, representing misinterpretation. It's used humorously when people completely misidentify or misunderstand something obvious. The meme has become synonymous with a person trying to make a statement or claim that is widely seen as incorrect or nonsensical. The character's confused expression is often paired with situations where someone is oblivious to the obvious truth. It’s frequently used to point out ignorance or a complete lack of understanding of basic concepts. This meme has evolved into a way of illustrating misunderstandings in everything from politics to pop culture, often drawing attention to how people can mislabel or misinterpret things in the world around them.`
        },
        {
          title: "Change My Mind",
          text: `A man sits at a table with a sign stating an opinion and invites others to “change his mind.” It’s used to present controversial, funny, or blatantly absurd opinions with confidence, often baiting debate. The meme is typically used in situations where someone feels strongly about something, even if it's an opinion that most people may find odd or humorous. It's often accompanied by statements that are extreme or polarizing, such as "Pineapple belongs on pizza" or "Dogs are overrated." The challenge presented in the sign has made it a popular meme for expressing bold or contrarian views. It’s also become a humorous way of mocking people who present opinions with absolute certainty, even when they’re not entirely informed. This meme is often used to generate debates, but also to demonstrate playful, exaggerated confidence in a stance.`
        },
        {
          title: "Two Buttons",
          text: `A sweating man is faced with two buttons, each representing a difficult choice. It reflects indecision or the struggle of picking between two equally hard (or funny) options. The meme is typically used in scenarios where a person is torn between two possible choices, each with its own pros and cons. It has been used to show the comedic side of making decisions, where both options seem equally challenging or humorous. The sweating man’s expression highlights the stress and discomfort of making a tough choice, making it relatable to anyone who has faced a difficult decision. People often use this meme in lighthearted discussions about everyday dilemmas, such as choosing what to eat or how to spend free time. The meme has evolved to illustrate even more absurd scenarios, where the options are not just difficult, but hilariously mismatched.`
        },
        {
          title: "Success Kid",
          text: `A toddler clenches his fist in victory, symbolizing small personal wins or unexpected success. It’s used to celebrate even minor achievements with exaggerated pride. The meme's appeal comes from the way it elevates small wins into monumental triumphs, making it a way to humorously exaggerate success. People often use it to highlight moments where they’ve managed to overcome minor obstacles or do something they didn’t expect to succeed at. The image captures the unbridled joy of victory, especially for things that seem insignificant to others but are incredibly satisfying in the moment. It has become a go-to meme for celebrating moments of triumph in everyday life, like finishing a task or getting the last item on sale. Success Kid is often used in posts about small victories in work, school, and even personal growth.`
        }
      ]
      
  };
  
  
  let currentTopic = null;
  let currentText = "";
  let pos = 0;
  
  // Metrics variables
  let startTime = null;
  let timerInterval = null;
  let totalKeystrokes = 0;
  let correctKeystrokes = 0;
  
  const timerEl = document.getElementById('timer');
  const wpmEl = document.getElementById('wpm');
  const accuracyEl = document.getElementById('accuracy');
  
  // Update metrics display
  function updateStats() {
    if (startTime) {
      const elapsed = Date.now() - startTime;
      const seconds = Math.floor(elapsed / 1000);
      timerEl.textContent = `Time: ${seconds}s`;
      const minutes = elapsed / 1000 / 60;
      const wpm = minutes > 0 ? Math.round((correctKeystrokes / 5) / minutes) : 0;
      wpmEl.textContent = `WPM: ${wpm}`;
      const accuracy = totalKeystrokes > 0 ? Math.round((correctKeystrokes / totalKeystrokes) * 100) : 100;
      accuracyEl.textContent = `Accuracy: ${accuracy}%`;
    } else {
      timerEl.textContent = 'Time: 0s';
      wpmEl.textContent = 'WPM: 0';
      accuracyEl.textContent = 'Accuracy: 100%';
    }
  }
  
  // Theme toggle
  const toggleBtn = document.getElementById('toggleTheme');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
  });
  if (localStorage.getItem('theme') === 'light') document.body.classList.add('light-theme');
  
  // Navigation elements
  const landing = document.getElementById('landing');
  const topicView = document.getElementById('topic');
  const subtopicsDiv = document.getElementById('subtopics');
  const typingBox = document.getElementById('typingBox');
  
  document.querySelectorAll('.topic-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentTopic = btn.dataset.topic;
      showTopicView();
    });
  });
  
  document.getElementById('backBtn').addEventListener('click', () => {
    topicView.classList.add('hidden');
    landing.classList.remove('hidden');
    resetTyping();
  });
  
  function showTopicView() {
    landing.classList.add('hidden');
    topicView.classList.remove('hidden');
    renderSubtopics();
  }
  
  function renderSubtopics() {
    subtopicsDiv.innerHTML = '';
    data[currentTopic].forEach(item => {
      const btn = document.createElement('button');
      btn.textContent = item.title;
      btn.addEventListener('click', () => loadText(item.text));
      subtopicsDiv.appendChild(btn);
    });
  }
  
  function loadText(text) {
    // Reset metrics and timer
    clearInterval(timerInterval);
    startTime = null;
    totalKeystrokes = 0;
    correctKeystrokes = 0;
    updateStats();
  
    currentText = text;
    pos = 0;
    typingBox.innerHTML = '';
    text.split('').forEach(ch => {
      const span = document.createElement('span');
      span.textContent = ch;
      span.classList.add('rune');
      typingBox.appendChild(span);
    });
    typingBox.focus();
  }
  
  typingBox.addEventListener('keydown', e => {
    e.preventDefault();
    if (e.key === 'Backspace') {
      if (pos > 0) {
        pos--;
        typingBox.children[pos].classList.remove('correct');
      }
    } else if (e.key.length === 1) {
      // Start timer on first character
      if (!startTime) {
        startTime = Date.now();
        timerInterval = setInterval(updateStats, 1000);
      }
      totalKeystrokes++;
      if (pos < currentText.length && e.key === currentText[pos]) {
        typingBox.children[pos].classList.add('correct');
        correctKeystrokes++;
        pos++;
        if (pos === currentText.length) {
          clearInterval(timerInterval);
        }
      }
      updateStats();
    }
  });
  
  function resetTyping() {
    clearInterval(timerInterval);
    startTime = null;
    totalKeystrokes = 0;
    correctKeystrokes = 0;
    updateStats();
    typingBox.innerHTML = '';
    pos = 0;
    currentText = '';
  }
  