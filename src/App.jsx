/* eslint-disable no-unused-vars */
// Css
import './App.css'

// React Router
import React from 'react';

// All Components
import Banner from './components/Banner'
import Search from './components/SearchCourses'
import ExternalLearning from './components/ExternalLearning'
import MyLearning from './components/MyLearning'
import Recommend from './components/Recommend'
import Interesting from './components/InterestingCategories'
import HighlightedCourse from './components/HighlightedCourse'
import TopCoures from './components/TopCoures'
import Other from './components/otherSources'

import Modal from './components/Block/Modal';

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get('username');
  const urlHostname = urlParams.get('hostname');

  const urlList = {
    username: username,
    hostname: urlHostname
  }


  return (
    <>
      <Modal data={username} />
      <Banner />
      <Search data={urlHostname} />
      <ExternalLearning />
      <MyLearning data={urlList} />
      <Recommend data={urlList} />
      <Interesting data={urlList} />
      <HighlightedCourse />
      <TopCoures />
      <Other />
    </>
  )
}

export default App
