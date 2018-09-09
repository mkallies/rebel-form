export const isLoading = (state, key) => {
  const isLoading = state.common.isLoading[key]

  if (isLoading === undefined) return true

  return isLoading
}
