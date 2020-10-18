import React, { useEffect } from 'react'
import { connect } from 'react-redux'


export default (ChildComponent) => {
    
    const ComposedComponents = (props) => {

        useEffect(() => {
            shouldNavigateAway();
        })
    
        const shouldNavigateAway = () => {
            if (!props.auth) {
                props.history.push('/')
            }
        }

        return <ChildComponent {...props} />
    }

    function mapStateToProps(state) {
        return { auth: state.auth}
    }

    return connect(mapStateToProps)(ComposedComponents)
}