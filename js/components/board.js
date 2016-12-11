import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';

export default function Board(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <List title={props.list1} card1="Card 1" card2="Card 2" card3="Card 3" />
            <List title={props.list2} card1="Card 1" card2="Card 2" card3="Card 3" />
            <List title={props.list3} card1="Card 1" card2="Card 2" card3="Card 3" />
        </div>
    );
}
