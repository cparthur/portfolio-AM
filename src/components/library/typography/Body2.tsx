import React from 'react';
import styled from 'styled-components';

import theme from 'styles/theme';
import { TruncateTextProps, truncateOneLineStyles, truncateMultipleLinesStyles } from './truncateText';

type Body2Props = {
    className?: string;
};

const StyledBody2 = styled.p<TruncateTextProps>`
    font-family: ${theme.typography.body2.fontFamily};
    font-size: ${theme.typography.body2.fontSize};
    font-weight: ${theme.typography.body2.fontWeight};
    letter-spacing: ${theme.typography.body2.letterSpacing};
    line-height: ${theme.typography.body2.lineHeight};

    ${({ truncateLines }) => (truncateLines === 1 ? truncateOneLineStyles : truncateMultipleLinesStyles(truncateLines))}
`;

const Body2: React.FC<TruncateTextProps & Body2Props> = ({ truncateLines, className, children }) => (
    <StyledBody2 truncateLines={truncateLines} className={`lib-Typography lib-Body2 ${className}`}>
        {children}
    </StyledBody2>
);

export default Body2;
