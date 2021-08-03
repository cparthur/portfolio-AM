import React from 'react';
import styled from 'styled-components';

import theme from 'styles/theme';
import { TruncateTextProps, truncateOneLineStyles, truncateMultipleLinesStyles } from './truncateText';

type OverlineProps = {
    className?: string;
};

const Overline: React.FC<TruncateTextProps & OverlineProps> = ({ truncateLines, className, children }) => {
    return (
        <StyledOverline truncateLines={truncateLines} className={`lib-Typography lib-Overline ${className}`}>
            {children}
        </StyledOverline>
    );
};

const StyledOverline = styled.p<TruncateTextProps>`
    font-family: ${theme.typography.overline.fontFamily};
    font-size: ${theme.typography.overline.fontSize};
    font-weight: ${theme.typography.overline.fontWeight};
    letter-spacing: ${theme.typography.overline.letterSpacing};
    line-height: ${theme.typography.overline.lineHeight};
    text-transform: uppercase;

    ${({ truncateLines }) => (truncateLines === 1 ? truncateOneLineStyles : truncateMultipleLinesStyles(truncateLines))}
`;

export default Overline;
