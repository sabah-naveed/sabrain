import React, {Suspense} from 'react'

const Spline = React.lazy(() => import('@splinetool/react-spline'));

import CanvasLoader from '../Loader'

const Earth = () => {
  return (
    <div>
      <Suspense fallback={<CanvasLoader/>}>
        <Spline 
          scene="https://prod.spline.design/cXbFeyg3QF12N0ZU/scene.splinecode" 
          style={{width: '100%', height: '100%', position: 'absolute', top: '10', left: '', zIndex: '2'}}
        />
      </Suspense>
    </div>
  )
}

export default Earth