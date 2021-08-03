import React from 'react';
import styled from 'styled-components';

import { TruncateTextProps, truncateOneLineStyles, truncateMultipleLinesStyles } from './truncateText';
import theme from 'styles/theme';

type Body1Props = {
    className?: string;
};

const Body1: React.FC<TruncateTextProps & Body1Props> = ({ truncateLines, className, children }) => {
    return (
        <StyledBody1 truncateLines={truncateLines} className={`lib-Typography lib-Body1 ${className}`}>
            {children}
        </StyledBody1>
    );
};

const StyledBody1 = styled.p<TruncateTextProps>`
    font-family: ${theme.typography.body1.fontFamily};
    font-size: ${theme.typography.body1.fontSize};
    font-weight: ${theme.typography.body1.fontWeight};
    letter-spacing: ${theme.typography.body1.letterSpacing};
    line-height: ${theme.typography.body1.lineHeight};

    ${({ truncateLines }) => (truncateLines === 1 ? truncateOneLineStyles : truncateMultipleLinesStyles(truncateLines))}
`;

export default Body1;
