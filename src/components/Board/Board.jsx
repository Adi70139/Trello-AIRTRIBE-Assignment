import React from "react";
import { Trash } from "react-feather";
import Card from "../Card/Card";
import Editable from "../Editable/Editable";
import "./Board.css";

function Board(props)
{
  return (
    <div className="board">
      <div className="board_header">
        <p className="board_header_title">
          {props.board?.title}
          <span className="sp">{props.board?.cards?.length || 0}</span>
        </p>
       
        <button className="del_btn" onClick={() => props.removeBoard()}>
          <Trash size={17} />
        </button>
      </div>
      <div className="board_cards custom-scroll">
        {props.board?.cards?.map((item) => (
          <Card
            key={item.id}
            card={item}
            boardId={props.board.id}
            removeCard={props.removeCard}
            dragEntered={props.dragEntered}
            dragEnded={props.dragEnded}
            updateCard={props.updateCard}
          />
        ))}
        <Editable
          text="+ New"
          placeholder="Enter Card Title"
          displayClass="board_add-card"
          editClass="board_add-card_edit"
          onSubmit={(value) => props.addCard(props.board?.id, value)}
        />
      </div>
    </div>
  );
}

export default Board;