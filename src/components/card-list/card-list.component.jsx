/**
 * Base libraries
 */
import React from "react";
/**
 * Import CSS
 */
import "./card-list.style.css";
/**
 * Import Component
 */
import { Card } from "../card/card.component";

export const CardList = (props) => (
  <div className="card-list">
    {props.monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
