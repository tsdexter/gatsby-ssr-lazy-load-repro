import React, {Suspense} from "react"
import {useStaticQuery, graphql, Link} from "gatsby"

function PageList(): React.ReactElement {
  const pageListQuery: Queries.PageListQuery = useStaticQuery(graphql`
    query PageList {
      allWpPage {
        nodes {
          id
          databaseId
          title
          content
          uri
        }
      }
    }
  `)

  console.log(pageListQuery)

  return <div>
    {pageListQuery.allWpPage.nodes.map((page) => {
      return <div key={page.id}>
        <Link to={`${page.uri}`}>
          {page.title}
        </Link>
      </div>
    })}
  </div>
}

export default (): React.ReactElement => (
  <Suspense fallback={<div>Loading...</div>}>
    <PageList />
  </Suspense>
)