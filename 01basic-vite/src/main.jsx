import React from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

const reactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click me to visit google'
}

function MyApp() {
  return (
    <div><h1>Custom React App</h1></div>
  )
}

const AnotherElement = (
  <a href="https://google.com">Visit Google</a>
)

const aReactElement = React.createElement(
  'a',
  {href: reactElement.props.href, target: reactElement.props.target,
  },
  'Visit Google 2'
)


createRoot(document.getElementById('root')).render(
  aReactElement
)
