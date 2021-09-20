import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { Project } from 'sdk/types/Project';

type DefaultProjectListItemProps = {
    project: Project;
};

const DefaultProjectListItem: React.FC<DefaultProjectListItemProps> = ({ project }) => {
    const cover = project.cover && getImage(project.cover.localFile);

    return (
        <div key={project.strapiId}>
            <li>{project.name}</li>
            {cover && <GatsbyImage image={cover} alt={project.name} />}
        </div>
    );
};

export default DefaultProjectListItem;
