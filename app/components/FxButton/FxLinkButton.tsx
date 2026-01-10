'use client'

import Link from 'next/link'
import { FxButtonBase } from './FxButton'

type FxLinkButtonProps = {
  href: string
  children: React.ReactNode
}

export function FxLinkButton({
  href,
  children
}: FxLinkButtonProps) {
  return (
    <Link href={href} className="inline-block">
      <FxButtonBase>{children}</FxButtonBase>
    </Link>
  )
}
