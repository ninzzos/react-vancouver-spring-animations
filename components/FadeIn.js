import React from 'react'
import { useSpring, animated } from 'react-spring'

const FadeIn = ({ children }) => {
  const animation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 }
  })

  return <animated.div style={animation}>{children}</animated.div>
}

export default FadeIn
