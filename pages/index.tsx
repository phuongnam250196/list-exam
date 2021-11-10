import React, { Suspense } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
const useUser = () => ({ user: null, loading: false })
const Home: React.FC = () => {
  const { user, loading } = useUser()
  const router = useRouter()
  useEffect(() => {
    if (!(user || loading)) {     
      router.push('/auth')
    }
  }, [user, loading])

  return <p>Redirecting...</p>
}

export default Home;