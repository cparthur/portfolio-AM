import React from 'react';
import styled from 'styled-components';

const StyledSvgLightContainer = styled.div`
    height: 0;
    width: 0;
    opacity: 0;

    & svg {
        & .stop-top {
            stop-color: ${({ theme }) => theme.color.primary.gradient && theme.color.primary.start};
        }

        & .stop-bottom {
            stop-color: ${({ theme }) => theme.color.primary.gradient && theme.color.primary.end};
        }
    }
`;

const SvgLightGradient = () => (
    <StyledSvgLightContainer>
        {/* Define svg gradients here */}
        <svg width="0" height="0">
            <defs>
                {/* Icon */}
                <linearGradient id="svg-light-gradient" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" className="stop-top" />
                    <stop offset="100%" className="stop-bottom" />
                </linearGradient>
            </defs>
        </svg>
    </StyledSvgLightContainer>
);

export default SvgLightGradient;
