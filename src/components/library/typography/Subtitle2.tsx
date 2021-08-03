import React from 'react';
import styled from 'styled-components';

import theme from 'styles/theme';
import { TruncateTextProps, truncateOneLineStyles, truncateMultipleLinesStyles } from './truncateText';

type Subtitle2Props = {
    className?: string;
};

const Subtitle2: React.FC<TruncateTextProps & Subtitle2Props> = ({ truncateLines, className, children }) => {
    return (
        <StyledSubtitle2 truncateLines={truncateLines} className={`lib-Typography lib-Subtitle2 ${className}`}>
            {children}
        </StyledSubtitle2>
    );
};

const StyledSubtitle2 = styled.p<TruncateTextProps>`
    font-family: ${theme.typography.subtitle2.fontFamily};
    font-size: ${theme.typography.subtitle2.fontSize};
    font-weight: ${theme.typography.subtitle2.fontWeight};
    letter-spacing: ${theme.typography.subtitle2.letterSpacing};
    line-height: ${theme.typography.subtitle2.lineHeight};

    ${({ truncateLines }) => (truncateLines === 1 ? truncateOneLineStyles : truncateMultipleLinesStyles(truncateLines))}
`;

export default Subtitle2;
