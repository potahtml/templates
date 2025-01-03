import { memo, render, signal } from 'pota'
import { Router } from 'pota/web'

import logo from './assets/logo.svg'
import styles from './index.module.css'

import type { JSX } from 'pota'

declare module 'pota' {
  namespace JSX {
    /** New attributes to elements */

    // HTML
    interface IntrinsicHTMLAttributes {
      alt?: string
    }

    // SVG
    interface IntrinsicSVGAttributes {}

    // MathML
    interface IntrinsicMathMLAttributes {}

    /** Explicit bypass attribute vs property heuristics */

    // `<element prop:myFoo="bar"/>`
    interface ExplicitProperties {}

    // `<element attr:foo="bar"/>`
    interface ExplicitAttributes {}

    // `<element bool:foo={true}/>`
    interface ExplicitBooleans {}

    /** Custom elements */

    interface IntrinsicElements {
      'my-custom-element': { hello: true | false }
    }
  }
}

function App() {
  return (
    <div class={styles.app}>
      <my-custom-element hello={true} />
      <header>
        <img src={logo} alt="logo" />
      </header>
      <p>
        <a alt="pota comes from potable" href="https://pota.quack.uy">
          https://pota.quack.uy
        </a>
      </p>
      <p>We love buttons</p> <Counter />
      <p>
        Routing
        <Menu />
        <Routing />
      </p>
    </div>
  )
}
function Counter() {
  const [count, setCount, updateCount] = signal(1)
  const double = memo(() => count() * 2)
  const increment = () => updateCount(count => count + 1)

  return (
    <button on:click={increment}>
      {count} / {double} /{() => (count() % 2 == 0 ? 'even' : 'odd')}
    </button>
  )
}

function Menu() {
  return (
    <p>
      <a href="/">Home</a> - <a href="/rick">Rick</a> -{' '}
      <a href="/moon">Moon</a>- <a href="/broken">Broken link 💀</a>
    </p>
  )
}
function Routing() {
  return (
    <Router path="/">
      <Router>Home!</Router>
      <Router.Default>404 Not Found!</Router.Default>
      <Router path="moon">Buttiful</Router>
      <Router path="rick" collapse={true}>
        <iframe
          width="560"
          height="315"
          style="height:315px"
          src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?si=U8aoXoxgc77CKWOo&start=1"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </Router>
    </Router>
  )
}

render(App)
