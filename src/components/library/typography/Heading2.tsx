import React from 'react';
import styled from 'styled-components';

import theme from 'styles/theme';
import { TruncateTextProps, truncateOneLineStyles, truncateMultipleLinesStyles } from './truncateText';

type Heading2Props = {
    className?: string;
};

const StyledHeading2 = styled.h2<TruncateTextProps>`
    font-family: ${theme.typography.h2.fontFamily};
    font-size: ${theme.typography.h2.fontSize};
    font-weight: ${theme.typography.h2.fontWeight};
    line-height: ${theme.typography.h2.lineHeight};

    ${({ truncateLines }) => (truncateLines === 1 ? truncateOneLineStyles : truncateMultipleLinesStyles(truncateLines))}
`;

const Heading2: React.FC<TruncateTextProps & Heading2Props> = ({ truncateLines, className, children }) => (
    <StyledHeading2 truncateLines={truncateLines} className={`lib-Typography lib-Heading2 ${className}`}>
        {children}
    </StyledHeading2>
);

export default Heading2;
