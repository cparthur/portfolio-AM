import React from 'react';
import styled from 'styled-components';

import theme from '../../../styles/theme';
import { TruncateTextProps, truncateOneLineStyles, truncateMultipleLinesStyles } from './truncateText';

type Heading6Props = {
    className?: string;
};

const Heading6: React.FC<TruncateTextProps & Heading6Props> = ({ truncateLines, className, children }) => {
    return (
        <StyledHeading6 truncateLines={truncateLines} className={`lib-Typography lib-Heading6 ${className}`}>
            {children}
        </StyledHeading6>
    );
};

const StyledHeading6 = styled.h6<TruncateTextProps>`
    font-family: ${theme.typography.h6.fontFamily};
    font-size: ${theme.typography.h6.fontSize};
    font-weight: ${theme.typography.h6.fontWeight};
    line-height: ${theme.typography.h6.lineHeight};
    letter-spacing: ${theme.typography.h6.letterSpacing};

    ${({ truncateLines }) => (truncateLines === 1 ? truncateOneLineStyles : truncateMultipleLinesStyles(truncateLines))}
`;

export default Heading6;
