import React, { useContext } from "react";
import "./Leadership.css";
import LeadershipCard from "../../components/leadershipCard/LeadershipCard";
import { leadershipSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Achievement() {
  const { isDark } = useContext(StyleContext);
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
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
            {leadershipSection.achievementsCards.map((card) => {
              return (
                <LeadershipCard
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    footer: card.footerLink,
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
