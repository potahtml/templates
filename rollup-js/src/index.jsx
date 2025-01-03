import { memo, render, signal } from 'pota'
import { Router } from 'pota/web'

function App() {
  return (
    <div class="app">
      <header>
        <svg
          width="239.64"
          height="239.64"
          version="1.1"
          viewBox="0 0 63.405 63.404"
          xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <linearGradient
              id="linearGradient12"
              x1="57.261"
              x2="58.02"
              y1="139.77"
              y2="186.2"
              gradientTransform="translate(48.183)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0af" offset="0" />
              <stop stop-color="#005f8f" offset="1" />
            </linearGradient>
            <linearGradient
              id="linearGradient14"
              x1="57.178"
              x2="57.039"
              y1="169.74"
              y2="186.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0af" offset="0" />
              <stop stop-color="#005f8f" offset="1" />
            </linearGradient>
            <linearGradient
              id="linearGradient16"
              x1="57.045"
              x2="57.13"
              y1="151"
              y2="153.78"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0af" offset="0" />
              <stop stop-color="#005f8f" offset="1" />
            </linearGradient>
          </defs>
          <g transform="translate(-88.538 -137.31)">
            <g transform="matrix(.82572 .82572 -.82572 .82572 168.99 -53.143)">
              <path
                transform="matrix(2.1733 0 0 2.1733 -19.057 -213.42)"
                d="m57.082 158.54c-0.13012 0.24277-0.26372 0.55753-0.40039 0.95312-1.1161 3.2305-4.7142 8.0578-7.1934 12.695-1.0043 1.8787-1.4534 4.0624-1.3613 5.8379 0.29627 5.711 4.7205 8.6888 8.9395 8.7305 0.0052 5e-5 0.01041-5e-5 0.01563 0 0.0052-5e-5 0.01041 5e-5 0.01563 0 4.219-0.0417 8.6451-3.0194 8.9414-8.7305 0.0921-1.7755-0.35699-3.9592-1.3613-5.8379-2.4792-4.6375-6.0773-9.4648-7.1934-12.695-0.13667-0.39559-0.27222-0.71035-0.40234-0.95312z"
                fill="#9dddff"
              />
              <g stroke-linecap="round" stroke-linejoin="round">
                <path
                  transform="translate(47.917)"
                  d="m57.082 158.54c-0.13012 0.24277-0.26372 0.55753-0.40039 0.95312-1.1161 3.2305-4.7142 8.0578-7.1934 12.695-1.0043 1.8787-1.4534 4.0624-1.3613 5.8379 0.29627 5.711 4.7205 8.6888 8.9395 8.7305 0.0052 5e-5 0.01041-5e-5 0.01563 0 0.0052-5e-5 0.01041 5e-5 0.01563 0 4.219-0.0417 8.6451-3.0194 8.9414-8.7305 0.0921-1.7755-0.35699-3.9592-1.3613-5.8379-2.4792-4.6375-6.0773-9.4648-7.1934-12.695-0.13667-0.39559-0.27222-0.71035-0.40234-0.95312z"
                  fill="url(#linearGradient14)"
                  stroke="#004b70"
                  stroke-width=".56559"
                />
                <path
                  transform="translate(47.917)"
                  d="m57.082 148.68c-0.02354 0.0439-0.04754 0.10032-0.07227 0.17188-0.20187 0.58432-0.85236 1.458-1.3008 2.2969-0.18173 0.3398-0.26269 0.73548-0.24609 1.0566 0.05359 1.033 0.85407 1.5701 1.6172 1.5781h0.0059c0.76312-8e-3 1.5636-0.54515 1.6172-1.5781 0.0166-0.32116-0.06436-0.71684-0.24609-1.0566-0.44842-0.83882-1.0989-1.7126-1.3008-2.2969-0.02472-0.0716-0.05068-0.12797-0.07422-0.17188z"
                  fill="url(#linearGradient16)"
                  stroke="#004d70"
                  stroke-width=".252"
                />
                <path
                  d="m105 125.92c-8.4804 26.581-20.584 29.468-20.764 47.197 0.69033 13.307 10.926 20.294 20.764 20.496 9.8373-0.20235 20.072-7.1893 20.762-20.496-0.17942-17.729-12.282-20.616-20.762-47.197zm0 5.7604c7.2747 23.358 17.656 25.894 17.81 41.474-0.59217 11.694-9.3712 17.833-17.81 18.011-8.4386-0.17781-17.219-6.3173-17.811-18.011 0.1539-15.58 10.537-18.116 17.811-41.474z"
                  fill="url(#linearGradient12)"
                  stroke="#004b70"
                  stroke-width=".428"
                />
              </g>
            </g>
          </g>
        </svg>
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
