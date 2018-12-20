import React from 'react'
import { Link, graphql } from 'gatsby'
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import Layout from '../components/layout'
const IndexPage = (props) => {
  const postList = props.data.allMarkdownRemark;
  
  return (
    
    <Layout>
      <div className=" Position">
      <div className="inside">
      <TwitterTimelineEmbed sourceType="profile" userId={2829884545} options={{height: 400}} />
      <br/>
      <TwitterTimelineEmbed sourceType="profile" userId={397377701} options={{height: 400}} />
      </div>
      </div>
     


      {postList.edges.map(({ node }, i) => (
        <Link to={node.fields.slug} className="link" >
          <div className="post-list">
            <h1>{node.frontmatter.title}</h1>
            <span>{node.frontmatter.date}</span>
            <p>{node.excerpt}</p>
          </div>
        </Link>
      ))}
      
    </Layout>
  )
}
export default IndexPage;
export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
          }
        }
      }
    }
  }
`