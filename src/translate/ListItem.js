import React, { Component } from 'react';
class ListItem extends Component{
    render() {
        return <li>
            {this.props.passage.content.trim().split("\n")[0]}
        </li>;
    }
}

export {ListItem}