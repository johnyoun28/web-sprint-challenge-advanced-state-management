import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSmurfs } from '../actions/index'
import SmurfCard from './SmurfCard'

const SmurfList = (props) => {
    console.log(props)
    useEffect(() => {
        props.fetchSmurfs()
    }, [])

 return (
        <div>
            <h3>Smurf List</h3>
            <hr/>
            {props.smurfs.map(smurf => (
                <SmurfCard key={smurf.id} smurf={smurf}/>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error
    }
}
export default connect(mapStateToProps, {fetchSmurfs})(SmurfList)
