import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { ProjectNode } from 'sdk/types/Project';
import DefaultProjectListItem from './DefaultProjectListItem';
import * as S from './DefaultProjectList.styled';

const DefaultProjectList = () => {
    const data = useStaticQuery(query);

    return (
        <S.DefaultProjectListContainer>
            {data.allStrapiProject.edges.map((project: ProjectNode) => (
                <DefaultProjectListItem key={project.node.name} project={project.node} />
            ))}
        </S.DefaultProjectListContainer>
    );
};

export default DefaultProjectList;

const query = graphql`
    query {
        allStrapiProject {
            edges {
                node {
                    strapiId
                    name
                    description
                    cover {
                        localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    }
`;
