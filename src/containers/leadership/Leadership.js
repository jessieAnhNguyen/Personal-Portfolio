<<<<<<< HEAD:src/containers/leadership/Leadership.js
import React, { useContext } from "react";
import "./Leadership.css";
import LeadershipCard from "../../components/leadershipCard/LeadershipCard";
import { leadershipSection } from "../../portfolio";
import { Fade } from "react-reveal";
=======
import React, {useContext} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
>>>>>>> 18c1a9fd72f89bf91d5e45bf31d7c36b5df88e6c:src/containers/achievement/Achievement.js
import StyleContext from "../../contexts/StyleContext";
export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  if (!achievementSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {leadershipSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {leadershipSection.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
<<<<<<< HEAD:src/containers/leadership/Leadership.js
            {leadershipSection.achievementsCards.map((card) => {
              return (
                <LeadershipCard
=======
            {achievementSection.achievementsCards.map((card, i) => {
              return (
                <AchievementCard
                  key={i}
>>>>>>> 18c1a9fd72f89bf91d5e45bf31d7c36b5df88e6c:src/containers/achievement/Achievement.js
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    footer: card.footerLink
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
