import React, { Component } from "react";

import Navbar from "./navbar";
import { List } from 'antd';
import { connect } from "react-redux";
import {  getPosts } from "../redux/actionCreators";


class Home extends Component {


  state = {
     data: [
      {
        title: 'Ant Design Title 1',
      },
      {
        title: 'Ant Design Title 2',
      },
      {
        title: 'Ant Design Title 3',
      },
      {
        title: 'Ant Design Title 4',
      },
    ]

  }


  render() {

    return(
      <>
          <Navbar />
          <List
            className="text-white"
            itemLayout="horizontal"
            dataSource={this.state.data}
            renderItem={item => (
              <List.Item style={{listStyleType:"none"}}>
                <List.Item.Meta
                  title={<p>{this.state.data}</p>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                <button className="btn btn-info">edit</button>
                <button className="btn btn-danger">delete</button>
              </List.Item>
            )}
          />
      </>
    )

  }

}
function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { getPosts })(Home);
