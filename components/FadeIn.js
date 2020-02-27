import React from 'react'
import { useSpring, animated as Animated } from 'react-spring'

const FadeIn = ({ children }) => {
  const animation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 }
  })

  return <Animated.div style={animation}>{children}</Animated.div>
}

export default FadeIn
