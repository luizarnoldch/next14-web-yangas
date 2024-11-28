import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

import React from 'react'

const pharagraphVariants = cva(
  'text-center font-medium text-xs sm:text-base xl:text-xl'
)

export interface Heading1Props
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof pharagraphVariants> {}

function Paragraph({ className, children, ...props }: Heading1Props) {
  return (
    <p className={cn(pharagraphVariants(), className)} {...props}>
      {children}
    </p>
  )
}

export default Paragraph
