import React, { Component } from 'react' ;

class Addpizza extends Component{

    state={
        name:"",
        desc:"",
    }
    
    handleChange = (e) => {
        console.log(e.target.value);

        this.setState({
            [e.target.id]:e.target.value
        })
        
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state, this.props);
        this.props.addCard(this.state)
    }
    render(){
        return(
            <div id="add-pizza">
                <form onSubmit={this.handleSubmit}>
                <br></br><br></br>
                    <h2>New Card-</h2>
                    <input type='text' name='name' id='name' placeholder='enter name..' onChange={this.handleChange}></input><br></br>
                    {/* <label forHtml="forHtml">Enter description</label><br></br> */}<br></br>
                    <textarea rows='4' cols='20' id='desc' placeholder='enter description..' onChange={this.handleChange}></textarea><br></br>             
                    <input type='submit' value='add-card'></input>
                </form>
            </div>
        )
    }
}

export default Addpizza;