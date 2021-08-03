import React from 'react';
import styled from 'styled-components';

import theme from 'styles/theme';
import { TruncateTextProps, truncateOneLineStyles, truncateMultipleLinesStyles } from './truncateText';

type Heading3Props = {
    className?: string;
};

const StyledHeading3 = styled.h3<TruncateTextProps>`
    font-family: ${theme.typography.h3.fontFamily};
    font-size: ${theme.typography.h3.fontSize};
    font-weight: ${theme.typography.h3.fontWeight};
    line-height: ${theme.typography.h3.lineHeight};

    ${({ truncateLines }) => (truncateLines === 1 ? truncateOneLineStyles : truncateMultipleLinesStyles(truncateLines))}
`;

const Heading3: React.FC<TruncateTextProps & Heading3Props> = ({ truncateLines, className, children }) => {
    return (
        <StyledHeading3 truncateLines={truncateLines} className={`lib-Typography lib-Heading3 ${className}`}>
            {children}
        </StyledHeading3>
    );
};

export default Heading3;
