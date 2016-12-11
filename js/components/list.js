import React from 'react';
import Card from './card';

export default function List(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <Card text={props.card1} />
            <Card text={props.card2} />
            <Card text={props.card3} />
            <form onSubmit={props.onSubmit}>
                <input type="text" onChange={props.onChange} /><input type="submit" />
            </form>
        </div>
    );
}
