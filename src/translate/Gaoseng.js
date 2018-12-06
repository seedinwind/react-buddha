/**
 * Created by seedinwind on 18/12/4.
 */
import React, { Component } from 'react';
import 'whatwg-fetch'

class Gaoseng extends Component{
    constructor(props){
        super(props)
        this.state={passage:"init"}
        console.log("constructor start")
    }

    componentWillMount(){
        console.log("componentWillMount start")
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
       //网络请求，获取内容
        this.setState({passage:"fetch"})
        fetch("http://47.94.95.216/content/poem/author?author=李商隐",{method:"get",headers: new Headers({
            'Access-Control-Allow-Origin':'*',
// 响应类型
        'Access-Control-Allow-Methods':'GET',
// 响应头设置
        'Access-Control-Allow-Headers':'x-requested-with,content-type',
        })})
            .then(function (response) {
                this.setState({passage:response.statusText})
            })
            .catch(function (error) {
                console.log(error.toString())
            })
    }



    tick(){
        this.setState({
            passage:""
        });
    }

    render(){
        return <p>this is the passage:{this.state.passage}</p>
    }
}

export {Gaoseng}
