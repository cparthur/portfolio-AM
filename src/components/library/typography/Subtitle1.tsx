import React from 'react';
import styled from 'styled-components';

import theme from '../../../styles/theme';
import { TruncateTextProps, truncateOneLineStyles, truncateMultipleLinesStyles } from './truncateText';

type Subtitle1Props = {
    className?: string;
};

const Subtitle1: React.FC<TruncateTextProps & Subtitle1Props> = ({ truncateLines, className, children }) => {
    return (
        <StyledSubtitle1 truncateLines={truncateLines} className={`lib-Typography lib-Subtitle1 ${className}`}>
            {children}
        </StyledSubtitle1>
    );
};

const StyledSubtitle1 = styled.p<TruncateTextProps>`
    font-family: ${theme.typography.subtitle1.fontFamily};
    font-size: ${theme.typography.subtitle1.fontSize};
    font-weight: ${theme.typography.subtitle1.fontWeight};
    letter-spacing: ${theme.typography.subtitle1.letterSpacing};
    line-height: ${theme.typography.subtitle1.lineHeight};

    ${({ truncateLines }) => (truncateLines === 1 ? truncateOneLineStyles : truncateMultipleLinesStyles(truncateLines))}
`;

export default Subtitle1;
