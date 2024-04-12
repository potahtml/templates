import { render, signal, memo } from 'pota'
import { Route } from 'pota/router'

import styles from './index.module.css'
import logo from './assets/logo.svg'

function App() {
  return (
    <div class={styles.app}>
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
    <button onClick={increment}>
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
    <Route path="/">
      <Route>Home!</Route>
      <Route.Default>404 Not Found!</Route.Default>
      <Route path="moon">Buttiful</Route>
      <Route path="rick" collapse={true}>
        <iframe
          width="560"
          height="315"
          style="height:315px"
          src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?si=U8aoXoxgc77CKWOo&start=1"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </Route>
    </Route>
  )
}

render(App)
