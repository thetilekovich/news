import React, {FC} from 'react'

interface ISectionTitleProps {
  title: string,
  size?: number,
  color?: string
}


const SectionTitle: FC<ISectionTitleProps> = ({title, size = 25, color="black"}) => {
  return (
      <h1 className="font-medium" style={{
        fontSize: `${size}px`,
        color: color,
    }}>
        {title}
    </h1>
  )
}

export default SectionTitle