import './App.css'
import { About } from './Components/About'
import { useRef } from 'react'
import { Hero } from './Components/Hero'
import { Layout } from './Components/Layout'
import { Proyects } from './Components/Proyects'
import Typewriter from 'typewriter-effect/dist/core'
import { useEffect } from 'react/cjs/react.development'
import { Heart } from './Icons/heart'
import { Fire } from './Icons/Fire'
import { date, dateTime } from '../constants/time'
import { newLineCmd } from '../constants/image'

function App () {
  const node = useRef()

  useEffect(() => {
    if (node?.current) {
      const typewriter = new Typewriter(node.current, {
        loop: true,
        delay: 75,
        wrapperClassName: 'typewriter-wrapper'
      })
      typewriter
        .pauseFor(2500)
        .typeString(`<span style="color: red;"=>${newLineCmd} nmap </span>`)
        .pauseFor(300)
        .typeString('<span style="color: green;">-sS --min-rate 5000 -p- --open -vvv -n -Pn 76.76.21.241 -oG openPorts</span>')
        .pauseFor(4000)
        .typeString(`<span style="display: block; color:darkcyan;">${newLineCmd} Starting Nmap 7.92 ( https://nmap.org ) at ${date} ${dateTime} -04</span>`)
        .pauseFor(5000)
        .typeString(`<span style="display: block; color:darkcyan;">${newLineCmd} Initiating SYN Stealth Scan at ${dateTime}</span>`)
        .pauseFor(6000)
        .typeString(`<span style="display: block; color:darkcyan;">${newLineCmd} Scanning 76.76.21.241 [65535 ports]</span>`)
        .start()
    }
  }, [])

  console.log(new Date().toLocaleTimeString())
  console.log(new Date().toLocaleDateString())

  return (
    <>
      <Hero />
      <Layout>
        <Proyects />
        <About />
        <div className='pwd'>
          <Heart />
          <Fire />
          <span>~/c/cv <img src='github.webp' id='github' />
            <span id='gitlog'> main </span>
            <span id='time'>13s</span>
          </span>
        </div>
        <div id='nmap' ref={node} />
      </Layout>
    </>
  )
}

export default App
