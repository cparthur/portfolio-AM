import React from 'react';
import styled from 'styled-components';

import theme from 'styles/theme';
import { TruncateTextProps, truncateOneLineStyles, truncateMultipleLinesStyles } from './truncateText';

type Heading4Props = {
    className?: string;
};

const StyledHeading4 = styled.h4<TruncateTextProps>`
    font-family: ${theme.typography.h4.fontFamily};
    font-size: ${theme.typography.h4.fontSize};
    font-weight: ${theme.typography.h4.fontWeight};
    line-height: ${theme.typography.h4.lineHeight};

    ${({ truncateLines }) => (truncateLines === 1 ? truncateOneLineStyles : truncateMultipleLinesStyles(truncateLines))}
`;

const Heading4: React.FC<TruncateTextProps & Heading4Props> = ({ truncateLines, className, children }) => (
    <StyledHeading4 truncateLines={truncateLines} className={`lib-Typography lib-Heading4 ${className}`}>
        {children}
    </StyledHeading4>
);

export default Heading4;
