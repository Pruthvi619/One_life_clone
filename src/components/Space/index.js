import { useState } from "react";
import { Link } from "react-router-dom";
import SpaceCards from "../SpaceCards";
import { GoPlus } from "react-icons/go";
import { FaSortDown } from "react-icons/fa";
import "./index.css";
import Counsellor from "../Counsellor";

const posts = [
  {
    username: "Anonymouskick",
    title:
      "Trapped by Tradition: A Man's Struggle Between Family Duty and Personal Despair",
    description:
      "Hi, I’m a 32 year old man. I belong from a very lower middle class family but I was very good in studies, so I started living outside home in metro cities away from my parents to support them. I spent 8 years away from my home town. I got scholarship through which I became engineer and got a good job in Chennai. Everything was going more than I expected my life to be. I got a call from my parents that they have planned my marriage, they got me engaged when I was 16 year old, to a girl in the village. I couldn’t say no and got married to her. My wife is a very nice human being but she is very ugly, she is way to ugly than even an uglier girl. Initially I was ok as my parents fixed me long back and she always dreamt to be with me. I thought this is my destiny. But when we started living, I hate seeing her, when I see other girls around me I feel sad and depressed. She is totally dependent on me, uneducated. I cant divorce her as my parents still live there & I wont be able to face my parents. I don’t know what to do.",
    daysAgo: 53,
    likes: 5,
    comments: 1,
    views: 21,
  },
  {
    username: "Hyperloop88",
    title: "Concerned About My Children's Future Due to Physical Traits.",
    description:
      "I’m a 33-year-old woman, married to my husband for the past four years in an arranged setup, as our families know each other well. He is a very nice guy, and we have a good relationship. A year ago, I gave birth to our first child. My concern is that my husband has a unique physique with very narrow shoulders, which makes him look different from other men. While this never mattered to me because I love him as a person, I’ve started worrying about our son, who seems to have inherited the same physique. I fear that this might cause him difficulties in the future. I want to have another child, but I'm afraid that if we have a daughter, she might also inherit this body structure and face challenges finding a match or being accepted by society. This fear has led me to consider having another child but not with my husband, which is a difficult and confusing thought. I’m unsure how to address this with my husband or if my concerns are misguided. I am deeply worried about the future of my children and want the best for them. Am I wrong to think this way, and how should I approach this sensitive issue? Any advice would be appreciated.",
    daysAgo: 36,
    likes: 0,
    comments: 0,
    views: 9,
  },
  {
    username: "Anonymouswolf",
    title: "Haunted by a Past Mistake",
    description:
      "I'm a 30-year-old man grappling with the guilt of a past mistake that's come back to haunt me. Ten years ago, I got into a drunken fight with a stranger at a bar, and it ended with him getting seriously injured. I was arrested and charged with assault, but I managed to avoid jail time with a plea deal. I thought I had moved on from that dark chapter of my life, but recently, the victim's family reached out to me, demanding compensation for his medical bills and lost wages. I'm terrified of the legal and financial repercussions, and I don't know how to make amends for my actions.",
    daysAgo: 35,
    likes: 0,
    comments: 0,
    views: 6,
  },
  {
    username: "Anonymouswolf",
    title: "Living with Guilt: My Hidden Secret",
    description:
      "I'm a 26-year-old woman who's hiding a dark secret. When I was in college, I was involved in a hit-and-run accident that left someone seriously injured. I've never told anyone about what happened, and the guilt eats away at me every day. I'm terrified of the consequences if the truth were to come out.",
    daysAgo: 48,
    likes: 1,
    comments: 0,
    views: 5,
  },
  {
    username: "Anonymouswolf",
    title:
      "Blackmailed and Insecure: Seeking Help After a Dating App Encounter",
    description:
      "I'm a 27-year-old guy who has been very active on dating apps like Tinder, Bumble, and Happn, looking for a serious relationship. Six months ago, I matched with a 32-year-old woman. After chatting for a week, we met for coffee and then for dinner, which ended with a kiss. We grew closer, and one night, after drinking, we went to her place and made love. Later, she asked for a loan of 10k, promising to return it in a month, but she didn't. She then asked for another 20k, which I also gave her. When she asked for 15k more and I refused, she blackmailed me, threatening to post on social media that I use dating apps to exploit women and to go to the police with false charges. I feel very insecure and don't know how to handle this situation.",
    daysAgo: 52,
    likes: 1,
    comments: 1,
    views: 4,
  },
  {
    username: "Anonymouswolf",
    title:
      "Eternal Paw Prints: Navigating the Pain of Loss with Love and Memories",
    description:
      "At 32, I find myself engulfed in the profound grief of bidding farewell to my cherished companion, a beloved pet whose absence has left an indelible void in my heart. The mere thought of facing life without their comforting presence feels like an insurmountable burden, their departure casting a shadow over my world. Yet amidst the overwhelming pain, I take solace in the precious memories we shared, each moment a testament to the unconditional love and joy they brought into my life. Though the ache of their absence may linger, I find solace in knowing that their paw prints will forever remain etched upon my heart, a reminder of the profound bond we shared and the enduring power of love.",
    daysAgo: 51,
    likes: 1,
    comments: 0,
    views: 4,
  },
  {
    username: "Anonymouskick",
    title:
      "Wealth and Family: A Successful Businessman's Dilemma Between Generosity and Prudence",
    description:
      "Hi, I’m a 52 year old man & own a company in Gujarat. I born and broughtup in a middle class gujju family but when I lost my parents I just left everything to build something. Started travelling & doing small jobs at an age of 19, Since then I never turned back and worked very hard. I got married to my love. I’m happy with my life & everything is going good. I don’t have any kid & I have no interest in having one. Now my problem is I have good wealth that I created myself and enjoying it. When I see my brothers, as I have 2 real siblings they are still living in a very middle class setup and hardly meeting daily needs. I want to give half of my wealth to them so that they get good living too but my wife stops me from doing this. Saying this is their luck and nothing will happen if you give your wealth to them, we would become poor as we need for our old age. I ‘m getting multiple thoughts like if they waste my wealth or would I have enough by my old age. I’m confused, because I feel I should make their living comfortable too. But they are big families too so I would need to at least give them 10 cr each. Through which they can have good house & setup some of their business. Should I go ahead or just forget about my family.",
    daysAgo: 54,
    likes: 3,
    comments: 0,
    views: 4,
  },
  {
    username: "Hyperloop88",
    title:
      "Rebuilding from Scratch: A Single Mother's Journey to Financial Stability",
    description:
      "Hi, I’m a 34 year old woman. I got divorced 3 years back. I came from a village in Rajasthan and got married to my husband. He worked in Bangalore. It was good initially but later he started drinking and cheating on a daily basis, I had to leave him and start a new life. I have a daughter and she is 6 years old. I didn’t want to go to my village back and stayed here. I’m a graduate but never worked before. After leaving my husband I started working as a home tutor & nanny for small kids. I hardly make much money. I never wanted to take any alimony from my husband because that goes against my life principles. Recently my job as a nanny came to an end and they shifted abroad. Now my problem is, I don’t have money to submit fees for my daughter for next month and due date is coming. I’m just not feeling good and feel broken. I’m a very strong individual but still. I don’t want donation or anything but ideas as how to survive. I’m happy in limited money. But want to fulfil my basic needs. It’s a challenging phase of my life but I know I will overcome it one day. Thanks TCB for refunding my money after hearing my confession.",
    daysAgo: 52,
    likes: 2,
    comments: 0,
    views: 3,
  },
  {
    username: "despondentsoul",
    title: "Drifting Apart: Can We Reconnect After Motherhood?",
    description:
      "My best friend had her first baby a year ago, and everything's shifted. Her life revolves around her child and husband. She's only been to my house a few times since then, leaving early if the baby gets fussy. She complains about being busy, but whenever I suggest hanging out, she makes excuses about how the baby won't her relax. I haven't visited much either, as she works full-time and craves quiet time on her days off. I've given her space because negativity always followed my suggestions for activities – it was always about her family. Recently, she proposed catching up and getting drunk like the old days, but it came with a string of worries: how the baby would handle it, what if they got sick? She even wanted to stay nearby just in case. This is frustrating. She clearly wants fun, but her focus on the baby feels suffocating. The distance is growing, and while I've tried to be flexible, I'm exhausted by her excuses. It feels like empty words – she says she wants to reconnect, but her actions don't align. My frustration is building.",
    daysAgo: 53,
    likes: 2,
    comments: 0,
    views: 3,
  },
  {
    username: "Anonymouswolf",
    title: "Conflicted Loyalty: A Friend’s Moral Dilemma",
    description:
      "I'm a 32-year-old woman, I'm facing a profound moral dilemma. My best friend recently confided in me that she's involved in an affair with her married boss. She’s deeply torn between her strong feelings for him and the guilt of betraying his family. She’s pleaded with me to keep her secret, but the weight of this knowledge is overwhelming. I'm struggling to decide whether to confront her about the situation or remain silent. I'm afraid that no matter what I choose, it will strain or even damage our friendship.",
    daysAgo: 51,
    likes: 0,
    comments: 0,
    views: 2,
  },
];

const Space = () => {
  const [expandedPostIndex, setExpandedPostIndex] = useState(null);

  const handleToggleExpand = (index) => {
    if (expandedPostIndex === index) {
      setExpandedPostIndex(null); // Collapse if the same post is clicked again
    } else {
      setExpandedPostIndex(index); // Expand the clicked post
    }
  };
  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="logo-container">
          <img
            src="https://cdn.onelifehealth.care/assets/one-life-logo-white.png"
            alt="logo"
            className="logo-image"
          />
        </div>
        <div className="footer-space">
          <nav className="footer-nav">
            <ul className="footer-list">
              <Link to="/">
                <li id="home-text">Home</li>
              </Link>
              <li>About us</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Contact us</li>
              <li>Terms & Conditions</li>
              <li>Support</li>
              <li className="footer-copyright">
                © Fly Fare Technologies LLP 2024. All rights reserved.
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <header className="header">
        <div className="header-content">
          <h1>Speak It Out!</h1>
          <div className="header-actions">
            <input type="text" placeholder="Search..." className="search-bar" />
            <button className="post-button">
              <GoPlus className="new-post" />
            </button>
            <button className="login-button">Login/Sign up</button>
          </div>
        </div>
      </header>
      <div className="main-content-container">
        <main className="main-content-post">
          <div className="horizontal-line-container">
            <div className="sort-container">
              <hr className="horizontal-line" />
              <span className="label">
                Sort by: Top
                <FaSortDown />
              </span>
            </div>
            {posts.map((post, index) =>
              expandedPostIndex === null || expandedPostIndex === index ? (
                <SpaceCards
                  key={index}
                  username={post.username}
                  title={post.title}
                  description={post.description}
                  daysAgo={post.daysAgo}
                  likes={post.likes}
                  comments={post.comments}
                  views={post.views}
                  isExpanded={expandedPostIndex === index}
                  onToggleExpand={() => handleToggleExpand(index)}
                />
              ) : null
            )}
          </div>
        </main>
      </div>
      <aside className="right-panel">
        <Counsellor />
        <div className="chat-bot-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSLrukrV1xZUuwFdA97kt1T9B-3DN8ebL5lg&s"
            alt="bot"
            className="chat-bot"
          />
        </div>
      </aside>
    </div>
  );
};

export default Space;
