import { css } from 'styled-components';

export type TruncateTextProps = {
    truncateLines?: number;
};

export const truncateOneLineStyles = css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const truncateMultipleLinesStyles = (nbLines?: number) => css`
    /* stylelint-disable */
    display: -webkit-box;
    -webkit-line-clamp: ${nbLines};
    -webkit-box-orient: vertical;
    /* stylelint-enable */
    overflow: hidden;
`;
