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

       //网络请求，获取内容
        this.setState({passage:"fetch"})
        fetch("http://localhost:8080/content/poem/title?title=%E6%AC%A1%E5%8C%97%E5%9B%BA%E5%B1%B1%E4%B8%8B",{method:"get"})
            .then((response)=> {
               return response.json()
            })
            .then((res)=>{
                this.setState({passage:res.data[0].content})
                console.log(res)
            })
            .catch(function (error) {
                console.log(error.toString())
            })
    }

    render(){
        return <p>this is the passage:{this.state.passage}</p>
    }
}

export {Gaoseng}
