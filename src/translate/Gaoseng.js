/**
 * Created by seedinwind on 18/12/4.
 */
import React, { Component } from 'react';
import 'whatwg-fetch'
import {SourceList} from './SourceList.js'

class Gaoseng extends Component{
    constructor(props){
        super(props)
        this.state={passage:[]}
        console.log("constructor start")
    }

    componentWillMount(){
        console.log("componentWillMount start")

       //网络请求，获取内容
        fetch("http://localhost:8080/admin/translate/gaoseng",{method:"get"})
            .then((response)=> {
               return response.json()
            })
            .then((res)=>{
                this.setState({passage:res.data})
                console.log(res)
            })
            .catch(function (error) {
                console.log(error.toString())
            })
    }

    render(){
        let list;
        if(JSON.stringify(this.state.passage)!=='[]') {
            console.log("showlist")
            list = <SourceList passages={this.state.passage}/>;
            }else{
            console.log("showEmpty")
            list = <ul></ul>;
        }
        return <div>{list}</div>
    }
}

export {Gaoseng}
