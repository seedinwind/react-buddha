import React, {Component} from 'react';
import '../css/TaskEditor.css'
import {postJson} from '../net/util.js'

class TaskEditor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: "",
            source: "",
            label: "",
            extra: "",
            title: ""
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.showNext=this.showNext.bind(this)
        this.showMore=this.showMore.bind(this)
        this.showLess=this.showLess.bind(this)

        this.updateProps(props)
    }

    updateProps(propsParam){
        this.passages=propsParam.passage.split("\n").filter((it)=>{
            return it!==""
        })
        this.index=0
        this.offset=0
        console.log(this.passages[0])
    }

    componentWillReceiveProps(nextProps) {
        this.updateProps(nextProps)
    }

    handleChange(type, e) {
        switch (type) {
            case 0:
                console.log("0")
                this.setState({title: e.target.value})
                break
            case 1:
                console.log("1")
                this.setState({content: e.target.value})
                break
            case 2:
                console.log("2")
                this.setState({source: e.target.value})
                break
            case 3:
                console.log("3")
                this.setState({label: e.target.value})
                break
            case 4:
                console.log("4")
                this.setState({extra: e.target.value})
                break
            default:
                break
        }

    }

    showNext(){
        if(this.index<this.passages.length){
            this.setState({content: this.passages[this.index]})
        }
        this.index++
    }

    showMore(){
        this.offset++
        if(this.index+this.offset<this.passages.length){
            this.setState({content:this.state.content+"\n"+ this.passages[this.index+this.offset]})
        }
    }
    showLess(){
        if(this.offset>0){
            this.offset--
        }
        this.setState({content:this.state.content.substring(0,this.state.content.lastIndexOf("\n"))})
    }

    onSubmit(event) {
        postJson("http://localhost:8089/admin/translate/gaoseng/task",  {
                title:this.state.title,
                content:this.state.content,
                source:this.state.source,
                label:this.state.label,
                extra:this.state.extra
            })
            .then(response => {
                    if (response.json().error=== 0) {
                        this.setState(
                            {
                                  title:"",
                                  content:"",
                                  source:"",
                                  label:"",
                                  extra:""
                            }
                        )
                        console.log("success")
                    }
                }
            )
        event.preventDefault();
    }

    render() {
        return <form className="TaskEditor" onSubmit={this.onSubmit}>
            <div className="TaskEditor-item">
                标题：
                <textarea className="TaskEditor-short-text" value={this.state.title}
                          onChange={this.handleChange.bind(this, 0)}/>
            </div>
            <br/>
            <div className="TaskEditor-item">
                原文：
                <div className="TaskEditor-long-text" >{this.state.content}</div>>
            </div>
            <br/>
            <div className="TaskEditor-item">
                来源：
                <textarea className="TaskEditor-short-text" value={this.state.source}
                          onChange={this.handleChange.bind(this, 2)}/>
            </div>
            <br/>
            <div className="TaskEditor-item">
                标签：
                <textarea className="TaskEditor-short-text" value={this.state.label}
                          onChange={this.handleChange.bind(this, 3)}/>
            </div>
            <br/>
            <div className="TaskEditor-item">
                备注：
                <textarea className="TaskEditor-short-text" value={this.state.extra}
                          onChange={this.handleChange.bind(this, 4)}/>
            </div>
            <br/>
            <input style={{selfAlign: "center"}} type="submit" value="保存"/>
            <input type="button" value="next" onClick={this.showNext} />
            <input type="button" value="more" onClick={this.showMore}/>
            <input type="button" value="less" onClick={this.showLess}/>

        </form>
    }
}

export {TaskEditor};