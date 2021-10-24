import React from 'react';
import styled, { css } from 'styled-components';

import { ThemeName } from 'styles/Theme/ThemeStore';
import { truncateMultipleLinesStyles, truncateOneLineStyles, TruncateTextProps } from './truncateText';

type TypographyProps = {
    className?: string;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'strong';
    weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold' | 'extrabold';
    customWeight?: number;
    highlighted?: boolean;
    isLink?: boolean;
};

const StyledTypography = styled.p<TruncateTextProps & TypographyProps>`
    font-family: ${theme.typography.fonts};
    line-height: 1.33;

    & * {
        display: inline !important;
    }

    ${({ weight }) =>
        (weight === undefined && {
            fontWeight: 400,
        }) ||
        (weight === 'light' && {
            fontWeight: 300,
        }) ||
        (weight === 'regular' && {
            fontWeight: 400,
        }) ||
        (weight === 'medium' && {
            fontWeight: 500,
        }) ||
        (weight === 'semibold' && {
            fontWeight: 600,
        }) ||
        (weight === 'bold' && {
            fontWeight: 700,
        }) ||
        (weight === 'extrabold' && {
            fontWeight: 800,
        })}

    ${({ customWeight }) =>
        customWeight !== undefined &&
        css`
            font-weight: ${customWeight};
        `};

    ${({ highlighted }) =>
        highlighted && {
            color: theme.color.primary.start,
        }};

    ${({ isLink }) =>
        isLink && {
            textDecoration: 'underline',
        }};

    ${({ truncateLines }) => (truncateLines === 1 ? truncateOneLineStyles : truncateMultipleLinesStyles(truncateLines))}
`;

const Typography: React.FC<TruncateTextProps & TypographyProps> = ({
    className,
    truncateLines,
    as,
    children,
    weight,
    customWeight,
    isLink,
    highlighted,
}) => (
    <StyledTypography
        as={as}
        truncateLines={truncateLines}
        className={`lib-Typography ${className}`}
        weight={weight}
        customWeight={customWeight}
        isLink={isLink}
        highlighted={highlighted}
    >
        {children}
    </StyledTypography>
);

export default Typography;
