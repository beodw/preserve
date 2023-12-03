import { useState } from 'react';
import Layout from './components/Layout.jsx';
import Feed from './pages/Feed.jsx';
import LandingPage from './pages/LandingPage.jsx';

function App() {
  const [userSignedIn, setUserSignedIn] =  useState(false)

  return (
    <Layout userSignedIn={userSignedIn}>
      {
        userSignedIn ? <Feed userSignedIn={userSignedIn} /> : <LandingPage setUserSignedIn={()=> setUserSignedIn(true)}/>
      }
    </Layout>
  );
}

export default App;
