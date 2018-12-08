import React, { Component } from 'react';
import {ListItem} from './ListItem.js'
class SourceList extends Component{

    constructor(props){
        super(props)
        this.passage=this.props.passages
        console.log(this.passage.toString())
    }

    render() {
        console.log(this.props.passages.toString())
       let listItems =this.props.passages.map((number) =>
            <ListItem key={number.id} passage={number}/>
        );
        return <ul>
            {listItems}
            </ul>
    }

}

export {SourceList}