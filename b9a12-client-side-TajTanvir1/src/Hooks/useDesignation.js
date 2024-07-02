import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth'
import useAxiosSecure from './useAxiosSecure'

const useDesignation = () => {
  const { user, loading } = useAuth()
  const axiosSecure = useAxiosSecure()

  const { data: designation = '', isLoading } = useQuery({
    queryKey: ['designation', user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(`/users/${user?.email}`)
      return data.designation
    },
  })

  //   Fetch user info using logged in user email

  return [designation, isLoading]
}

export default useDesignation
