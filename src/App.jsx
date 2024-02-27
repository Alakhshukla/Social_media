import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Slidebar from './Components/Slidebar';
import CreatePost from './Components/CreatePost';
import PostList from './Components/PostList';
import { useState } from 'react';
import PostListProvider from '../Store/post-list-Store';

function App() {

  const [selectedTab, setSelectedTab]=useState("Home");
  
  return (
    <PostListProvider>
  <div className='App-container'>
    <Slidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Slidebar>
    <div className='content'>

    <Header></Header>
    {selectedTab === "Home" ?(<PostList></PostList>): (<CreatePost></CreatePost>)}
  <Footer></Footer>

    </div>
  </div>
  </PostListProvider>
  );
}

export default App
