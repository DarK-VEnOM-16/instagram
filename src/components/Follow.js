import React ,{Component} from "react";
const s={
    backgroundColor:'#3796f0',
    width : '250px',
    color : 'white'
}
class Counter extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            count :0,
            data: 'Follow'
        }
    }
    update()
    {
        this.setState({
            count : this.state.count+1
        })
        console.log(this.state.count)
        if (this.state.count%2==0)
        this.setState({
            data : "Followed"
        })
        else
        this.setState({
            data : "Follow"
        })
        
    }
    render(){
        return(
            <div>
                <br></br>
                <button style={s} onClick={()=>this.update()} >{this.state.data}</button>
            </div>
        )
    }
}

export default Counter