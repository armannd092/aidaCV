import About from '../src/component/About'
import Skill from '../src/component/Skills'


export default function Home() {
  const profile =<img className="profile" width="500px" height="500px" src={require('/../public/Aida.jpg')} />
  return(
    <>
      <About image = {profile}/>
      <Skill />
    </>
  )
}
