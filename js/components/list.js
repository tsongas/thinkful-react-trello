import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';

export default function List() {
    return (
        <div>
            <Card text="foo" />
            <Card text="bar" />
            <Card text="baz" />
        </div>
    );
}
