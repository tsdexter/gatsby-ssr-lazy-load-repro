import React from "react"
import { graphql, Link } from "gatsby"

export default function Page(props: Queries.PageContentQuery): React.ReactElement {
  const page = props.data.wpPage

  return (
    <main>
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
      <Link to="/">Home</Link>
    </main>
  )
}

export const query = graphql`
  query PageContent($uri: String!) {
    wpPage(uri: { eq: $uri }) {
      id
      title
      content
      uri
    }
  }
`