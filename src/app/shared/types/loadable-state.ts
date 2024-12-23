export type LoadableState<T> = {
  data: T | null
  loading: boolean
  error: string | null
}
