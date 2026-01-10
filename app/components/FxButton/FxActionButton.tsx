'use client'

import { FxButtonBase } from './FxButton'

type FxActionButtonProps = {
  children: React.ReactNode
  onClick: () => void
  disabled?: boolean
}

export function FxActionButton({
  children,
  onClick,
  disabled
}: FxActionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="bg-transparent border-none p-0 cursor-pointer"
    >
      <FxButtonBase>{children}</FxButtonBase>
    </button>
  )
}
