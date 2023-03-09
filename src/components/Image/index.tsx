import React from 'react'

const Image = ({width, height}: {width: number | string, height: number | string}) => {
  const s = new Date().getMilliseconds().toString()
  return (
    <div style={{width: width, minHeight: height, background: 'gray'}}>
      <p>{s}</p>
    </div>
  )
}

export default Image