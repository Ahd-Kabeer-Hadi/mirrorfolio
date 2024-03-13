import { env } from "./env";
import request, { gql } from "graphql-request";
import {
  GetPostBySlugResponse,
  GetPostsArgs,
  GetPostsResponse,
  PublicationName,
  SubscribeToNewsletterResponse,
} from "./types";

const blogEndpoint = env.NEXT_PUBLIC_HASHNODE_ENDPOINT;
const blogPublicationId = env.NEXT_PUBLIC_HASHNODE_PUBLICATION_ID;

export async function getBLogName() {
  const query = gql`
    query getBlogName($blogPublicationId: ObjectId!) {
      publication(id: $blogPublicationId) {
        title
        displayTitle
        favicon
      }
    }
  `;
  const response = await request<PublicationName>(blogEndpoint, query, {
    blogPublicationId,
  });

  return {
    displayTitle: response.publication.displayTitle,
    favicon: response.publication.favicon,
    title: response.publication.title,
  };
}

export async function getPosts({ first = 9, pageParam = "" }: GetPostsArgs) {
  const query = gql`
    query getPosts(
      $blogPublicationId: ObjectId!
      $first: Int!
      $after: String
    ) {
      publication(id: $blogPublicationId) {
        posts(first: $first, after: $after) {
          edges {
            node {
              id
              title
              subtitle
              slug
              readTimeInMinutes
              content {
                text
              }
              coverImage {
                url
              }
              author {
                name
                profilePicture
              }
            }
            cursor
          }
        }
      }
    }
  `;

  const response = await request<GetPostsResponse>(blogEndpoint, query, {
    blogPublicationId,
    first,
    after: pageParam,
  });

  return response.publication.posts.edges;
}

export async function subscribeToNewsletter(email: string) {
  const mutation = gql`
    mutation subscribeToNewsletter(
      $blogPublicationId: ObjectId!
      $email: String!
    ) {
      subscribeToNewsletter(
        input: { email: $email, publicationId: $blogPublicationId }
      ) {
        status
      }
    }
  `;

  const response = await request<SubscribeToNewsletterResponse>(
    blogEndpoint,
    mutation,
    {
      blogPublicationId,
      email,
    }
  );

  return response;
}

export async function getPostBySlug(slug: string) {
  const query = gql`
    query getPostBySlug($blogPublicationId: ObjectId!, $slug: String!) {
      publication(id: $blogPublicationId) {
        post(slug: $slug) {
          title
          subtitle
          publishedAt
          readTimeInMinutes
          coverImage {
            url
          }
          content {
            html
          }
          author {
            name
            profilePicture
          }
        }
      }
    }
  `;

  const response = await request<GetPostBySlugResponse>(blogEndpoint, query, {
    blogPublicationId,
    slug,
  });

  return response.publication.post;
}
