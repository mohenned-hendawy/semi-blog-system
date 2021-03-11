import React, { Component } from 'react';
class AddPost extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <div className="modal" tabindex="-1">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title">Modal title</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <input type="text" className="form-control w-100"/>
                    <textarea name="" id="" cols="30" rows="10" className="form-control w-100"></textarea>
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">add</button>
                    </div>
                </div>
                </div>
                </div>
            </>
         );
    }
}
 
export default AddPost;