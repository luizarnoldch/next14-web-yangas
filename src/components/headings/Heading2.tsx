import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

import React from 'react'

const heading2Variants = cva(
  'text-white text-center font-medium text-lg sm:text-xl xl:text-2xl'
)

export interface Heading1Props
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof heading2Variants> {}

function Heading2({ className, children, ...props }: Heading1Props) {
  return (
    <h2 className={cn(heading2Variants(), className)} {...props}>
      {children}
    </h2>
  )
}

export default Heading2
