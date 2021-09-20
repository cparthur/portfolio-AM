import { ImageDataLike } from 'gatsby-plugin-image';

export interface Project {
    strapiId: number;
    description: string;
    name: string;
    cover: {
        localFile: ImageDataLike;
    };
}

export interface ProjectNode {
    node: Project;
}
