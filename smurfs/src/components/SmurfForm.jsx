import React, { useState } from 'react'
import { connect } from 'react-redux'
import { postSmurf } from '../actions/index'

const SmurfForm = (props) => {
    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })

    const changeHandler = e => {
        setSmurf({...smurf, [e.target.name]: e.target.value })
    }

    const submitHandler = e => {
        e.preventDefault()
        props.postSmurf(smurf)
        document.getElementById("smurfForm").reset()
    }

    return (
        <div>
            <form onSubmit={submitHandler} id="smurfForm">
                <label> Name
                    <input name="name" 
                    type="text" 
                    value={props.name} 
                    onChange={changeHandler}
                    placeholder="smurf name">
                    </input>

                </label>

                <label> Age
                    <input name="age" 
                    type="text" 
                    value={props.age} 
                    onChange={changeHandler}
                    placeholder="smurf age">
                    </input>

                </label>

                <label> Height
                    <input name="height" 
                    type="text" 
                    value={props.height} 
                    onChange={changeHandler}
                    placeholder="smurf height">
                    </input>

                </label>

                <button>Add Smurf</button>
            </form>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect(mapStateToProps, {postSmurf})(SmurfForm)
