import './App.css'
import { AboutMe } from '../aboutme/aboutme';
import { Top10 } from '../top10/Top10';
import { Card } from '../card/Card';
import { Cookie } from '../cookie/cookie';
function App() {
  return (
    <>
      <AboutMe/>
      <Top10/>
      <Cookie/>
      <Card name="jap"/>
      <Card name="jap2"/>
      <Card name="jap3"/>
      <Card name="jap4"/>
    </>
  )
}

export default App
