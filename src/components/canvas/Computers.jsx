import React, {Suspense} from 'react'

const Spline = React.lazy(() => import('@splinetool/react-spline'));

import CanvasLoader from '../Loader'

const Computers = () => {
  return (
    <div className="z-0 ">
      <Suspense fallback={<CanvasLoader/>}>
        <Spline 
          scene="https://prod.spline.design/cXbFeyg3QF12N0ZU/scene.splinecode" 
          style={{width: '150%', height: '100%', position: 'absolute', top: '10', left: '', zIndex: '2'}}
        />
      </Suspense>
    </div>

  )
}

export default Computers