import React from 'react';
import styled from 'styled-components';

import theme from 'styles/theme';
import { truncateMultipleLinesStyles, truncateOneLineStyles, TruncateTextProps } from './truncateText';

type Body1Props = {
    className?: string;
};

export const StyledBody1 = styled.p<TruncateTextProps>`
    font-family: ${theme.typography.body1.fontFamily};
    font-size: ${theme.typography.body1.fontSize};
    font-weight: ${theme.typography.body1.fontWeight};
    letter-spacing: ${theme.typography.body1.letterSpacing};
    line-height: ${theme.typography.body1.lineHeight};

    ${({ truncateLines }) => (truncateLines === 1 ? truncateOneLineStyles : truncateMultipleLinesStyles(truncateLines))}
`;

const Body1: React.FC<TruncateTextProps & Body1Props> = ({ truncateLines, className, children }) => (
    <StyledBody1 truncateLines={truncateLines} className={`lib-Typography lib-Body1 ${className}`}>
        {children}
    </StyledBody1>
);

export default Body1;
