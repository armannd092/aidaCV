import About from '../src/component/About'
import Skill from '../src/component/Skills'
import Image from 'next/image'


export default function Home() {
  //const profile =<img className="profile" width="500px" height="500px"  src={require('./../public/Aida.jpg')}/>
  const profile =<Image className="profile" width="500px" height="500px" src='/Aida.jpg'/>
  
  return(
    <>
      <About image = {profile}/>
      <Skill />
    </>
  )
}
