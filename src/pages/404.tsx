import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Page not found</h1>
      <Link to="/">Go home</Link>.
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
