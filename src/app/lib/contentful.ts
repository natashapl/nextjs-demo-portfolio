import { gql, GraphQLClient } from "graphql-request";

// Initialize Contentful GraphQL Client
const client = new GraphQLClient(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  },
});

// Type for Fetching a Single Project
interface ProjectResponse {
  projectCollection: {
    items: {
      title: string;
      slug: string;
      description: string;
      thumbnail: {
        url: string;
        title: string;
        description: string;
        width: number;
        height: number;
      };
      galleryImagesCollection?: {
        items: {
          url: string;
          title?: string;
          description: string;
          width?: number;
          height?: number;
        }[];
      };
      tags: string[];
    }[];
  };
}

// Type for Fetching All Projects
interface ProjectsResponse {
  projectCollection: {
    items: {
      title: string;
      slug: string;
      description: string;
      thumbnail: {
        url: string;
        title: string;
        description: string;
        width: number;
        height: number;
      };
      galleryImagesCollection?: {
        items: {
          url: string;
          title?: string;
          description: string;
          width?: number;
          height?: number;
        }[];
      };
      tags: string[];
    }[];
  };
}

// Define the `Project` Type
export interface Project {
  title: string;
  slug: string;
  description: string;
  thumbnail: {
    url: string;
    title: string;
    description: string;
    width: number;
    height: number;
  };
  gallery?: {
    url: string;
    title?: string;
    description: string;
    width?: number;
    height?: number;
  }[];
  tags: string[];
}

// GraphQL Query to Fetch a Single Project
const GET_PROJECT_QUERY = gql`
  query GetProject($slug: String!) {
    projectCollection(where: { slug: $slug }, limit: 1) {
      items {
        title
        slug
        description
        thumbnail {
          url
          title
          description
          width
          height
        }
        galleryImagesCollection(limit: 10) { # Ensures the gallery exists
          items {
            url
            title
            description
            width
            height
          }
        }
        tags
      }
    }
  }
`;

// Fetch a Single Project
export async function getProject(slug: string): Promise<Project | null> {
  try {
    const data = await client.request<ProjectResponse>(GET_PROJECT_QUERY, { slug });

    console.log("🚀 Fetching project data for:", slug);
    console.log("🔍 GraphQL Response:", JSON.stringify(data, null, 2)); // Debugging

    if (!data.projectCollection.items.length) return null;

    return {
      ...data.projectCollection.items[0],
      gallery: data.projectCollection.items[0].galleryImagesCollection?.items || [], // Ensure gallery exists
    };
  } catch (error) {
    console.error("❌ Error fetching project:", error);
    return null;
  }
}

// GraphQL Query to Fetch All Projects
const GET_PROJECTS_QUERY = gql`
  query GetProjects {
    projectCollection {
      items {
        title
        slug
        description
        thumbnail {
          url
          title
          description
          width
          height
        }
        galleryImagesCollection(limit: 10) {
          items {
            url
            title
            description
            width
            height
          }
        }
        tags
      }
    }
  }
`;

// Fetch All Projects (for Homepage)
export async function getProjects(): Promise<Project[]> {
  try {
    const data = await client.request<ProjectsResponse>(GET_PROJECTS_QUERY);
    
    // Transform the data to match the Project interface
    const transformedProjects = data.projectCollection.items.map(item => ({
      ...item,
      gallery: item.galleryImagesCollection?.items || [] // Map galleryImagesCollection to gallery
    }));
    
    return transformedProjects || [];
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}