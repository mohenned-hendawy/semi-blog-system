import React, { Component } from 'react';
class DeletePost extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <div class="modal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>are you sure that you want to delete this post</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-danger">Delete</button>
                    </div>
                    </div>
                </div>
                </div>
            </>
         );
    }
}
 
export default DeletePost;