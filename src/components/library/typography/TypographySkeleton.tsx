import React from 'react';
import styled from 'styled-components';

import theme from '../../../styles/theme';
import { shimmerDark, shimmer as shimmerLight } from '../../../styles/utils/shimmer';

type TypographySkeletonProps = {
    className?: string;
    component:
        | 'heading1'
        | 'heading2'
        | 'heading3'
        | 'heading4'
        | 'heading5'
        | 'heading6'
        | 'subtitle1'
        | 'subtitle2'
        | 'body1'
        | 'body2'
        | 'button'
        | 'caption'
        | 'overline';
    color?: string;
    width?: string;
    shimmer?: 'shimmerLight' | 'shimmerDark';
};

const StyledTypographySkeleton = styled.div<TypographySkeletonProps>`
    width: ${({ width }) => (width !== undefined ? width : '100%')};
    background-color: ${({ color }) => (color !== undefined ? color : theme.color.onLight.divider)};
    border-radius: 0.25rem;

    ${({ shimmer }) => (shimmer === 'shimmerLight' && shimmerLight) || (shimmer === 'shimmerDark' && shimmerDark)}

    /* Default height and margin set to body1 properties in case all components are not done yet */
    height: calc(24px - (24px - 16px));
    margin: calc((24px - 16px) / 2) 0 calc((24px - 16px) / 2);

    /*
     * Height is calculated from figma branding file -> lineHeight - (lineHeight - fontSize)
     * Margin is set to match typography line-height placement
    */
    ${({ component }) =>
        (component === 'heading5' && {
            height: 'calc(29px - (29px - 24px))',
            margin: 'calc((29px - 24px)) 0 calc((29px - 24px) / 2)',
        }) ||
        ((component === 'subtitle1' || component === 'body1') && {
            height: 'calc(24px - (24px - 16px))',
            margin: 'calc((24px - 16px) / 2) 0 calc((24px - 16px) / 2)',
        }) ||
        ((component === 'subtitle2' || component === 'body2') && {
            height: 'calc(20px - (20px - 14px))',
            margin: 'calc((20px - 14px) / 2) 0 calc((20px - 14px) / 2)',
        }) ||
        (component === 'caption' && {
            height: 'calc(16px - (16px - 12px))',
            margin: 'calc((16px - 12px) / 2) 0 calc((16px - 12px) / 2)',
        })}
`;

const TypographySkeleton: React.FC<TypographySkeletonProps> = ({ className, component, color, width, shimmer }) => (
    <StyledTypographySkeleton
        className={`lib-TypographySkeleton ${className}`}
        component={component}
        color={color}
        width={width}
        shimmer={shimmer}
    />
);

export default TypographySkeleton;
