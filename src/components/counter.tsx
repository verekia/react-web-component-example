import React, { useState } from 'react'

import Element from '@skatejs/element-react'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  return <button onClick={() => setCounter((x) => x + 1)}>{counter}</button>
}

class XCounter extends Element {
  render() {
    return <Counter />
  }
}

customElements.define('x-counter', XCounter)

export default Counter
