import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

import React from 'react'

const heading1Variants = cva(
  'text-white text-center font-bold xl:text-5xl sm:text-3xl text-xl tracking-tight'
)

export interface Heading1Props
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof heading1Variants> {}

function Heading1({ className, children, ...props }: Heading1Props) {
  return (
    <h1 className={cn(heading1Variants(), className)} {...props}>
      {children}
    </h1>
  )
}

export default Heading1
