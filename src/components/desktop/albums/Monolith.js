import React, { Component } from "react";
import monolith from "../../../assets/monolith.png";
import "./styling.css";
import "./stylingMedia.css";

export default class Monolith extends Component {
  render() {
    return (
      <div className="monolith-container">
        <div className="monolith-card">
          <div className="monolith-jacket">
            <a
              href="https://friendship.lnk.to/monolith"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={monolith}
                className="monolith-image"
                alt="album-jacket"
              />
            </a>
          </div>
          <div className="monolith-songs">
            <ul>
              <li>monolith</li>
              <li>upgrade [Remaster]</li>
              <li>Ego [Remaster]</li>
              <li>Wang</li>
              <li>Train</li>
              <li>COLOR GIRL (feat.　ウツモトカナ) album version</li>
              <li>double</li>
              <li>Heart</li>
              <li>etude (feat. ウツモトカナ) album version</li>
              <li>pool [Remaster]</li>
              <li>terminus</li>
            </ul>
          </div>
          <div className="monolith-info">
            <h1 className="monolith-header">first album: monolith</h1>
            <div className="monolith-link">
              <a
                href="https://friendship.lnk.to/monolith"
                target="_blank"
                rel="noopener noreferrer"
              >
                listen
              </a>
            </div>
            <div className="monolith-text">sneak peek (Ego)</div>
            <div className="monolith-link-preview">
              <iframe
                className="monolith-ego"
                src="https://www.youtube.com/embed/eSId8lrb2nI"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="ego"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
