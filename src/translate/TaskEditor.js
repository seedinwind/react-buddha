import React, {Component} from 'react';

class TaskEditor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: "",
            source: "",
            label: "",
            extra: "",
            title:""
        }
        this.onSubmit=this.onSubmit.bind(this)
    }

    handleChange(type,e){
        switch (type) {
            case 0:
                console.log("0")
                this.setState({title:e.target.value})
                break
            case 1:
                console.log("1")
                this.setState({content:e.target.value})
                break
            case 2:
                console.log("2")
                this.setState({source:e.target.value})
                break
            case 3:
                console.log("3")
                this.setState({label:e.target.value})
                break
            case 4:
                console.log("4")
                this.setState({extra:e.target.value})
                break
            default:
                break
        }
        console.log(this.state.title+"\n"
            +this.state.content+"\n"
            +this.state.source+"\n"
            +this.state.label)

    }

    onSubmit(event){
        console.log(this.state.title+"\n"
        +this.state.content+"\n"
        +this.state.source+"\n"
        +this.state.label)
        event.preventDefault();
    }

    render() {
        return <form className="TaskEditor" onSubmit={this.onSubmit}>
            <label>
               标题：
                <textarea value={this.state.title} onChange={this.handleChange.bind(this,0)} />
            </label>
            <label>
                原文：
                <textarea value={this.state.content} onChange={this.handleChange.bind(this,1)} />
            </label>
            <label>
                来源：
                <textarea value={this.state.source} onChange={this.handleChange.bind(this,2)} />
            </label>
            <label>
                标签：
                <textarea value={this.state.label} onChange={this.handleChange.bind(this,3)} />
            </label>
            <label>
                备注：
                <textarea value={this.state.extra} onChange={this.handleChange.bind(this,4)} />
            </label>
            <input type="submit" value="保存" />
        </form>
    }
}

export {TaskEditor};