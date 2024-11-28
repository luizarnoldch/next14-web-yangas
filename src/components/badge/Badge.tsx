import * as React from "react"

interface BadgeProps {
  text: string
  bgColor?: string
  textColor?: string
  width?: string
  height?: string
  className?: string
}

const Badge: React.FC<BadgeProps> = ({
  text,
  bgColor = "bg-[#FE7818]",
  textColor = "text-white",
  width = "w-72",
  height = "h-12",
  className = "",
}) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div
        className={`
          text-center font-semibold text-base mx-auto rounded-full
          ${bgColor} ${textColor}
          ${width} ${height}
          flex justify-center items-center
        `}
      >
        <span>{text}</span>
      </div>
    </div>
  )
}

export default Badge
