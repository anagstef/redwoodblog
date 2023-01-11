import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  const useAuthInfo = useAuth();
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div>hello</div>
      isAuthenticated ={useAuthInfo?.isAuthenticated ? 'yes' : 'no'}
      <div><pre>{JSON.stringify(useAuthInfo, null, 2)}</pre></div>
      <ArticlesCell />
    </>
  )
}

export default HomePage
