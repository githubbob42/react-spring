import React, { useState, useCallback, useEffect } from 'react'
import { useSpring, animated as a } from 'react-spring/hooks'
import './styles.css'

export default function Card() {
  const [flipped, set] = useState(true)
  console.log('flipped', flipped)

  //const [, fU] = useState()
  // It should not matter if the component is re-rendered, it shouldn't drop out of sync
  //useEffect(() => void setInterval(fU, 100), [])

  const { transform, opacity } = useSpring({
    config: { mass: 6, tension: 500, friction: 80 },
    /*opacity: flipped ? 1 : 0,
    transform: `perspective(1400px) rotateX(${flipped ? 180 : 0}deg)`*/
    from: {
      opacity: flipped ? 1 : 0,
      transform: `perspective(1400px) rotateX(0deg)`,
    },
    //to: { transform: `perspective(1400px) rotateX(${flipped ? 180 : 0}deg)` },
    to: [
      { transform: `perspective(1400px) rotateX(45deg)` },
      { transform: `perspective(1400px) rotateX(${flipped ? 180 : 0}deg)` },
    ],
    /*to: async next => {
      await next({ transform: `perspective(1400px) rotateX(45deg)` })
      await next({
        transform: `perspective(1400px) rotateX(${flipped ? 180 : 0}deg)`,
      })
    },*/
    onRest: () => console.log('hi'),
  })
  return (
    <div className="flip-main" onClick={() => set(state => !state)}>
      <a.div
        className="flip-c flip-back"
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      />
      <a.div
        className="flip-c flip-front"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
        }}
      />
    </div>
  )
}
