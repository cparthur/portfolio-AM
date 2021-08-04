import React from 'react';
import styled from 'styled-components';

import theme from 'styles/theme';
import { TruncateTextProps, truncateOneLineStyles, truncateMultipleLinesStyles } from './truncateText';

type ButtonProps = {
    className?: string;
};

const StyledButtonText = styled.span<TruncateTextProps>`
    font-family: ${theme.typography.button.fontFamily};
    font-size: ${theme.typography.button.fontSize};
    font-weight: ${theme.typography.button.fontWeight};
    letter-spacing: ${theme.typography.button.letterSpacing};
    line-height: ${theme.typography.button.lineHeight};
    text-transform: uppercase;

    ${({ truncateLines }) => (truncateLines === 1 ? truncateOneLineStyles : truncateMultipleLinesStyles(truncateLines))}
`;

const ButtonText: React.FC<TruncateTextProps & ButtonProps> = ({ truncateLines, className, children }) => (
    <StyledButtonText truncateLines={truncateLines} className={`lib-Typography lib-ButtonText ${className}`}>
        {children}
    </StyledButtonText>
);

export default ButtonText;
