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
    position: relative;
    font-family: ${({ theme }) => theme.typography.fonts};
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

    ${({ highlighted, theme }) => {
        if (highlighted) {
            if (theme.name === ThemeName.LIGHT) {
                return css`
                    color: ${theme.color.primary.start};
                    background-image: ${theme.color.primary.gradient};
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                `;
            }

            return css`
                color: ${theme.color.primary.start};
            `;
        }

        return null;
    }}

    ${({ isLink, theme }) =>
        isLink &&
        css`
            &:after {
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0.125rem;
                height: 0.0625rem;
                background: ${(theme.name === ThemeName.LIGHT && theme.color.primary.gradient) ||
                (theme.name === ThemeName.DARK && theme.color.primary.start)};
            }
        `};

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
