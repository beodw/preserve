import { useState } from 'react';
import Layout from './components/Layout.jsx';
import Feed from './pages/Feed.jsx';
import LandingPage from './pages/LandingPage.jsx';

function App() {
  const [userSignedIn, setUserSignedIn] =  useState(false)
  const [selectedAccommodation, setSelectedAccommodation] =  useState("Angel Lane")
  const [selectedCategory, setSelectedCategory] =  useState("Canned Food")

  return (
    <Layout userSignedIn={userSignedIn} setSelectedCategory={setSelectedCategory} setSelectedAccommodation={setSelectedAccommodation}>
      {
        userSignedIn ? <Feed selectedAccommodation={selectedAccommodation} selectedCategory={selectedCategory} userSignedIn={userSignedIn} /> : <LandingPage setUserSignedIn={()=> setUserSignedIn(true)}/>
      }
    </Layout>
  );
}

export default App;
