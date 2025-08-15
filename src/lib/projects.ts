import { client } from "@/sanity/lib/client"
import { Project } from "@/types/interfaces";

export function getProjects() {
    const query = `*[_type == "projects"] | order(publishedAt desc) {
      _id, 
      title,
      description,
      images,
      demolink,
      githubLink,
      publishedAt,
      isResponsive,
      tags,
    }`;

    // const query = `*[_type == "skills"]{
    const data = client.fetch(query)
    return data as Project[];
}       