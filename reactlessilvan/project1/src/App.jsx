import './App.css'
import './aboutme'
import { AboutMe } from './aboutme';
import { Top10 } from './Top10';
import { Card } from './card';
function App() {
  return (
    <>
      <AboutMe/>
      <Top10/>
      <Card name="jap"/>
      <Card name="jap2"/>
      <Card name="jap3"/>
      <Card name="jap4"/>
    </>
  )
}

export default App
