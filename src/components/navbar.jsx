import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <div className="container">
                    <a className="navbar-brand" href="#">Posts</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <h3 className="badge badge-danger">{this.props.count}</h3>
                    </ul>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Add post</button>
                    </div>
                    </div>
                </nav>
            </>
        );
    }
}
function mapStateToProps(state) {
    return {count:state.count}
}
 
export default connect(mapStateToProps)(Navbar) ;