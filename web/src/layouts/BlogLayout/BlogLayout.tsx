import { SignInButton, UserButton } from "@clerk/clerk-react";
import { useAuth } from "@redwoodjs/auth";
import { Link, routes } from "@redwoodjs/router";

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const { isAuthenticated } = useAuth();

  return (
    <>
    <header>
      <h1>
        <Link to={routes.home()}>Redwood Blog</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to={routes.home()}>Home</Link>
          </li>
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
          <li className={isAuthenticated ? 'ml-2' : null}>
            {isAuthenticated ? (
              <UserButton />
            ) : (
              <SignInButton mode="modal">
                <button className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded">
                  Log in
                </button>
              </SignInButton>
            )}
          </li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
  </>
  );
}

export default BlogLayout
