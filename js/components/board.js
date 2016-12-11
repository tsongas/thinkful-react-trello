import React from 'react';
import List from './list';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    onAddInputChanged() {
        console.log('onAddInputChanged');
    }

    onAddSubmit(event) {
        event.preventDefault();
        console.log('onAddSubmit');
    }

    render(props) {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <List onChange={this.onAddInputChanged} onSubmit={this.onAddSubmit} title={this.props.list1} card1="Card 1" card2="Card 2" card3="Card 3" />
                <List onChange={this.onAddInputChanged} onSubmit={this.onAddSubmit} title={this.props.list2} card1="Card 1" card2="Card 2" card3="Card 3" />
                <List onChange={this.onAddInputChanged} onSubmit={this.onAddSubmit} title={this.props.list3} card1="Card 1" card2="Card 2" card3="Card 3" />
            </div>
        );
    }
}
