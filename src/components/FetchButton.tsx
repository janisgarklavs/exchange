import React from 'react'

interface FetchButtonProps {
  loading: boolean
  clickHandler: () => void
}

export const FetchButton: React.SFC<FetchButtonProps> = ({ loading, clickHandler }) => (
  <button onClick={clickHandler} disabled={loading}>
    Get
  </button>
)
