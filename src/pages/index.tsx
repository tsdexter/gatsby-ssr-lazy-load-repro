import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const PageList = React.lazy(() => import("../components/page-list"))

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>Welcome</h1>
      <PageList />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
