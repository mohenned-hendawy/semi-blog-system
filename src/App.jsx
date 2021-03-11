import React, { Component, useState, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Login from "./components/login";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from './components/home';
import AddPost from "./components/add";
import DeletePost from "./components/delete";
import EditPost from "./components/edit";





// import decodedToken from "./token";

// console.log(decodedToken+" from app")

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <ClipLoader color={"#30CEAE"} loading={loading} size={50} />
        </div>
      ) : (
        <BrowserRouter>
        <Switch>
          <Route path="/login"  component={Login}/> 
          <ProtectedRoute path="/home"  component={Home} /> 
          <Route path="/addPost"  component={AddPost}/>
          <Route path="/deletePost"  component={DeletePost}/>
          <Route path="/editPost"  component={EditPost}/>
          <Redirect path="/" to="/home"/>
        </Switch>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
