import React from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import CommentBox from './CommentBox'
import CommentList from './CommentList'
import * as actions from '../actions'
import requireAuth from './requireAuth'

const App = (props) => {

    const renderButton = () => {
        let buttonText = "Sign In"
        if (props.auth) {
            buttonText = "Sign Out"    
        }
        return <button onClick={() => props.changeAuth(props.auth)}>{buttonText}</button>
    }

    function renderHeader() {
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/post">Post A Comment</Link>
                </li>
                <li>
                    {renderButton()}
                    </li>
            </ul>
        )
    }

    return (
        <div>
            {renderHeader()}
            <Route path="/post" component={requireAuth(CommentBox)} />
            <Route path="/" exact component={CommentList} />
        </div>
    )
}

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);