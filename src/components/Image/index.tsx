import React from 'react'

const Image = ({width, height, alt}: {width: number | string, alt?: string, height: number | string}) => {
  const s = new Date().getMilliseconds().toString()
  return (
    <div style={{width: width, minHeight: height, background: 'gray'}}>
      <p>{s}</p>
    </div>
  )
}

export default Image