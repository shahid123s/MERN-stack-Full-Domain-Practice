import React , {lazy, Suspense} from "react";

const lazyComponent = lazy(() => import("./Component.jsx"));


function LazyComponent() {
  return (
    <div>
        <Suspense fallback={<div>loading</div>}>
            <lazyComponent/>
        </Suspense>
    </div>
  )
}

export default LazyComponent
