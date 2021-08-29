import About from '../src/component/About'
import Skill from '../src/component/Skills'
import Image from 'next/image'

export default function Home() {
  const profile =<Image className="profile" width="500px" height="500px" src='/../public/Aida.jpg'/>
  return(
    <>
      <About image = {profile}/>
      <Skill />
    </>
  )
}
