

import Banner from "./common/Banner"
import Contact from "./common/Contact"
import CT from "./common/CT"
import Header from "./common/Header"
import NavBar from "./common/NavBar"
import Service from "./common/Service"
import Skill from "./common/Skill"


function App() {
  return (

    <div className="bg-spaceBlue text-2xl">
      <NavBar />
      <Banner/>
      <Header/>
      <Contact/>
      <Skill/>  
      <Service/>
      <CT/>
      <div className="h-[4000px]"></div>
    </div>
  
 
  )
}

export default App