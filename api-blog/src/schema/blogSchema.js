import { gql } from 'apollo-server-express';

const blogSchema = gql`
  # A blog entry
  type Blog {
    id: ID!
    title: String
    tagline: String
    body: String
    user: ID
  }
  # Queries from blog service
  type Query {
    # List of all our blogs
    allBlogs: [Blog]
    # A single blog
    blog(id: ID!): Blog
    # A single blog
    blogsByAuthorId(authorId: ID!): [Blog]
  }

  type Mutation {
    # ADD Blog
    addBlog(title: String, tagline: String, body: String, user: ID): Blog
    # UPDATE Blog
    updateBlog(
      id: ID!
      title: String
      tagline: String
      body: String
      user: ID
    ): Blog
    # REMOVE Blog
    deleteBlog(id: ID!, user: ID!): String!
    deleteBlogsByUserId(user: ID!): String!
  }
`;

export default blogSchema;
