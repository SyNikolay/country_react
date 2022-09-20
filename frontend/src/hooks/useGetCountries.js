import { useState } from 'react';

export const useGetCountries = (cb) => {
  const [isLoading,setIsLoading] = useState(false);
  const [error,setError] = useState('');

  const fetcing = async () => {
    try {
      setIsLoading(true);
      await cb()
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return [fetcing, isLoading, error];
}