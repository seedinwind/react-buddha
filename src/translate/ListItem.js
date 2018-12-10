import React, { Component } from 'react';
class ListItem extends Component{

    constructor(props){
        super(props)
        this.onClick=this.onClick.bind(this)
    }

    onClick(){
        this.props.onItemClick(this.props.value)
    }
    render() {
        return <li onClick={this.onClick}>
            <a>{this.props.value.content.trim().split("\n")[0]}</a>
        </li>;
    }
}

export {ListItem}