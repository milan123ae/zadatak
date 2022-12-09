import React from 'react'

function PageTitle({children, ...rest}) {
  return (
        <p className="mt-5 d-flex justify-content-center" {...rest}>{children}</p>
    
  )
}

export default PageTitle