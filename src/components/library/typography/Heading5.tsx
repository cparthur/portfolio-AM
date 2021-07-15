import React from 'react';
import styled from 'styled-components';

import theme from '../../../styles/theme';
import { TruncateTextProps, truncateOneLineStyles, truncateMultipleLinesStyles } from './truncateText';

type Heading5Props = {
    className?: string;
};

const Heading5: React.FC<TruncateTextProps & Heading5Props> = ({ truncateLines, className, children }) => {
    return (
        <StyledHeading5 truncateLines={truncateLines} className={`lib-Typography lib-Heading5 ${className}`}>
            {children}
        </StyledHeading5>
    );
};

const StyledHeading5 = styled.h5<TruncateTextProps>`
    font-family: ${theme.typography.h5.fontFamily};
    font-size: ${theme.typography.h5.fontSize};
    font-weight: ${theme.typography.h5.fontWeight};
    line-height: ${theme.typography.h5.lineHeight};

    ${({ truncateLines }) => (truncateLines === 1 ? truncateOneLineStyles : truncateMultipleLinesStyles(truncateLines))}
`;

export default Heading5;
