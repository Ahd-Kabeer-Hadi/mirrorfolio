import type { QueryFunctionContext } from "@tanstack/react-query";

export type PublicationName = {
  publication: {
    title: string;
    displayTitle?: string;
    favicon?: string;
  };
};

export type PostMetadata = {
  title: string;
  subtitle?: string;
  slug: string;
  readTimeInMinutes: number;
  content: {
    text: string;
  };
  coverImage: {
    url: string;
  };
  author: {
    name: string;
    profilePicture?: string;
  };
};

type GetPostsResponse = {
  publication: {
    posts: {
      edges: {
        node: PostMetadata;
        cursor: string;
      }[];
    };
  };
};

type GetPostsFunctionArgs = {
  first: number;
  after: string;
};

export type GetPostsArgs = QueryFunctionContext & GetPostsArgs;

export type SubscribeToNewsletterResponse = {
  data?: {
    subscribeToNewsletter: {
      status: string;
    };
  };

  errors?: { message: string }[];
};

export type GetPostBySlugResponse = {
  publication: {
    post: {
      title: string;
      subtitle?: string;
      publishedAt: string;
      readTimeInMinutes: number;
      coverImage: {
        url: string;
      };
      content: {
        html: string;
      };
      author: {
        name: string;
        profilePicture?: string;
      };
    };
  };
};


export interface JobExperience {
  title: string;       
  company: string;      
  tenure: string;       
  responsibilities: string[]; 
  links?: { title: string; url: string }[];  
}

export type TimelineProps = {
  experience: JobExperience;
}