import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));
import CanvasLoader from '../Loader';

const Computers = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden', // This hides horizontal overflow.
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Spline
          scene="https://prod.spline.design/cXbFeyg3QF12N0ZU/scene.splinecode"
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 300, // Change left to 0 to prevent horizontal scrolling.
            zIndex: '2',
          }}
        />
      </Suspense>
    </div>
  );
};

export default Computers;
