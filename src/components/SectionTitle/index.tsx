import React from 'react'

const SectionTitle = ({title, size = 25, color="white"}: {title: string, size?: number, color?: string}) => {
  return (
    <h1 className="font-bold" style={{
        fontSize: `${size}px`,
        color: color,
    }}>
        {title}
    </h1>
  )
}

export default SectionTitle