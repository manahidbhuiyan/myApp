import React from "react";
import '../assets/From.css'

 class Form extends React.Component{
    state= {
        title: "",
        details: "",
        lybrary: 'react',
        isAccept: false
    }

    handleChange = (e) =>{
           if(e.target.type === 'text'){
            this.setState({
                title : e.target.value
            })
           } else if(e.target.type === 'textarea'){
            this.setState({
                details : e.target.value
            })
           } else if (e.target.type === 'select-one'){ 
            this.setState({
                lybrary : e.target.value
            })
           } else if(e.target.type === 'checkbox'){
            this.setState({
                isAccept : e.target.checked
            })
           }
            else{
            console.log("nothing here");
           }
    }

    submitHandler = (e) =>{
        e.preventDefault()
        const {title, details, lybrary, isAccept} = this.state
        console.log(title, details,lybrary,isAccept)
    }


    render(){
        const {title, details, lybrary, isAccept} = this.state
        return (
            <div>

                <form className="from" action="" onSubmit={this.submitHandler} >
                    <label htmlFor=""> Title </label><br />
                    <input type="text" placeholder="programming language" value={title} onChange={this.handleChange} /> <br /> <br />
                    <label htmlFor=""> Description </label><br />
                    <textarea name="" placeholder="Description....." cols="30" rows="10" value={details} onChange={this.handleChange} ></textarea> <br /> <br />
                    <label htmlFor=""> Select Additional </label> <br />
                    <select name="" id="" value={lybrary} onChange={this.handleChange} >
                        <option value='react'>React</option>
                        <option value='vue'>Vue</option>
                        <option value='angular'>Angular</option>
                    </select> <br /><br />
                    <label htmlFor="">Accept Tearms & Conditions</label>
                    <input type="checkbox" checked={isAccept} onChange={this.handleChange} /> <br /><br />
                    <input type="submit" value='submit' />
                </form>
            </div>
        )
    }
}

export default Form