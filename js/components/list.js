import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';

export default function List(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <Card text={props.card1} />
            <Card text={props.card2} />
            <Card text={props.card3} />
        </div>
    );
}
