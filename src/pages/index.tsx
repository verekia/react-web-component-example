import React from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'x-counter': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
    }
  }
}

const IndexPage = () => (
  <div>
    <h1>App</h1>
    <x-counter></x-counter>
  </div>
)

export default IndexPage
