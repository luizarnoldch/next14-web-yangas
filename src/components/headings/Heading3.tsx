import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

import React from 'react'

const heading3Variants = cva(
  'text-white text-center font-bold text-sm sm:text-lg xl:text-2xl'
)

export interface Heading1Props
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof heading3Variants> {}

function Heading3({ className, children, ...props }: Heading1Props) {
  return (
    <h3 className={cn(heading3Variants(), className)} {...props}>
      {children}
    </h3>
  )
}

export default Heading3
