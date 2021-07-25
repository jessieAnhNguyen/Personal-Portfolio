import React from "react";
import "./TalkCard.scss";

export default function TalkCard({talkDetails}) {
  return (
    <div>
      <div className="container">
        <div
          className={
            talkDetails.isDark ? "dark-rectangle rectangle" : "rectangle"
          }
        >
          <div className="diagonal-fill"></div>
          <div className="talk-card-title">{talkDetails.title}</div>
          <p className="talk-card-subtitle">{talkDetails.subtitle}</p>

          <div className="card-footer-button-div">
<<<<<<< HEAD
            <a href={talkDetails.url} target="_" class="talk-button">
              Recording
=======
            <a href={talkDetails.slides_url} target="_" className="talk-button">
              Slides
            </a>
            <a href={talkDetails.event_url} target="_" className="talk-button">
              Event
>>>>>>> 18c1a9fd72f89bf91d5e45bf31d7c36b5df88e6c
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
