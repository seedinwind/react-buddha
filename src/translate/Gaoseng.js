/**
 * Created by seedinwind on 18/12/4.
 */
import React, {Component} from 'react';
import 'whatwg-fetch'
import {SourceList} from './SourceList.js'
import {TaskEditor} from './TaskEditor.js'

class Gaoseng extends Component {
    constructor(props) {
        super(props)
        this.state = {
            passage: [],
            current: ""
        }
        console.log("constructor start")
        this.onSelectSourceChange = this.onSelectSourceChange.bind(this)
    }

    componentWillMount() {
        console.log("componentWillMount start")

        //网络请求，获取内容
        fetch("http://47.94.95.216/wise/admin/translate/gaoseng", {method: "get"})
            .then((response) => {
                return response.json()
            })
            .then((res) => {
                this.setState({passage: res.data})
                console.log(res)
            })
            .catch(function (error) {
                console.log(error.toString())
            })
    }

    onSelectSourceChange(currentPassage) {
        console.log(currentPassage)
        this.setState({current: currentPassage.content})
    }

    render() {
        let list;
        if (JSON.stringify(this.state.passage) !== '[]') {
            console.log("showlist")
            list = <SourceList passages={this.state.passage} onSelectSourceChange={this.onSelectSourceChange}/>;
        } else {
            console.log("showEmpty")
            list = <ul></ul>;
        }

        let editor
        if (this.state.current !== "") {
            editor = <TaskEditor/>
        }else{
                editor=<br/>
        }
        return <div className="App-header">
            <div className="Gaoseng-menu">{list}</div>
            <div className="Gaoseng-content">{this.state.current}</div>
            <div className="Gaoseng-editor">
                {editor}
            </div>
        </div>
    }
}

export {Gaoseng}
