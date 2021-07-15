import React from 'react';
import styled from 'styled-components';

import theme from '../../../styles/theme';
import { TruncateTextProps, truncateOneLineStyles, truncateMultipleLinesStyles } from './truncateText';

type CaptionProps = {
    className?: string;
};

const Caption: React.FC<TruncateTextProps & CaptionProps> = ({ truncateLines, className, children }) => {
    return (
        <StyledCaption truncateLines={truncateLines} className={`lib-Typography lib-Caption ${className}`}>
            {children}
        </StyledCaption>
    );
};

const StyledCaption = styled.p<TruncateTextProps>`
    font-family: ${theme.typography.caption.fontFamily};
    font-size: ${theme.typography.caption.fontSize};
    font-weight: ${theme.typography.caption.fontWeight};
    letter-spacing: ${theme.typography.caption.letterSpacing};
    line-height: ${theme.typography.caption.lineHeight};

    ${({ truncateLines }) => (truncateLines === 1 ? truncateOneLineStyles : truncateMultipleLinesStyles(truncateLines))}
`;

export default Caption;
