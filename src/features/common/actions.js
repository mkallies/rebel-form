import { IS_LOADING } from './constants'

export const setIsLoading = (key, isLoading) => ({
  type: IS_LOADING,
  payload: {
    key,
    isLoading,
  },
})
