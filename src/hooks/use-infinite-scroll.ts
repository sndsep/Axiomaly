import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

interface UseInfiniteScrollOptions {
  loading: boolean
  hasNextPage: boolean | undefined
  onLoadMore: () => void
  threshold?: number
  rootMargin?: string
}

export function useInfiniteScroll({
  loading,
  hasNextPage,
  onLoadMore,
  threshold = 0.5,
  rootMargin = '100px'
}: UseInfiniteScrollOptions) {
  const { ref, inView } = useInView({
    threshold,
    rootMargin
  })

  useEffect(() => {
    if (inView && hasNextPage && !loading) {
      onLoadMore()
    }
  }, [inView, hasNextPage, loading, onLoadMore])

  return { ref }
}
