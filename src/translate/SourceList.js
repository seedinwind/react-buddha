import React, { Component } from 'react';
import {ListItem} from './ListItem.js'
class SourceList extends Component{

    constructor(props){
        super(props)
        this.passage=this.props.passages
        console.log(this.passage.toString())
        this.clickItem=this.clickItem.bind(this)
    }

    clickItem(e){
         this.props.onSelectSourceChange(e)
    }

    render() {
        console.log(this.props.passages.toString())
       let listItems =this.props.passages.map((number) =>
            <ListItem onItemClick={this.clickItem} key={number.id} value={number}/>
        );
        return <ul>
            {listItems}
            </ul>
    }

}

export {SourceList}