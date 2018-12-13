import React, {Component} from 'react';
import '../css/TaskEditor.css'

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

    onSubmit(event) {
        fetch("http://localhost:8080/admin/translate/gaoseng/task", {method: "POST",headers:{"Content-Type": "application/json"}, body: JSON.stringify({
                title:this.state.title,
                content:this.state.content,
                source:this.state.source,
                label:this.state.label,
                extra:this.state.extra
            })})
            .then(response => {
                    if (response.json().code === 0) {
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
                <textarea className="TaskEditor-long-text" value={this.state.content}
                          onChange={this.handleChange.bind(this, 1)}/>
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
        </form>
    }
}

export {TaskEditor};