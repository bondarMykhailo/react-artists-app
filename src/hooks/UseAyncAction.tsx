import React, { useEffect, useState } from 'react'

export enum AsyncStatus {
  Idle,
  Success,
  Error,
  Executing,
}

export function useAsyncAction<Result>(
  action: () => Promise<Result>,
  imediately: boolean
) {
  const [status, setStatus] = useState(AsyncStatus.Idle)
  const [value, setValue] = useState<Result | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const mutate = React.useCallback(async () => {
    setStatus(AsyncStatus.Executing)
    setValue(null)
    setError(null)
    return action()
      .then(response => {
        setValue(response)
        setStatus(AsyncStatus.Success)
      })
      .catch(error => {
        setError(error)
        setStatus(AsyncStatus.Error)
      })
  }, [action])

  useEffect(() => {
    if (imediately) {
      mutate()
    }
  }, [mutate, imediately])

  useEffect(() => {
    if (status === AsyncStatus.Success) {
      setIsLoading(false)
    }
  }, [status])

  return { mutate, status, value, error, isLoading }
}
