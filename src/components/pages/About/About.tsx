import React from 'react';

import DefaultLayout from 'components/Layout/DefaultLayout';
import Typography from 'library/typography/Typography';
import * as S from './About.styled';

const About: React.FC = () => (
    <DefaultLayout>
        <S.AboutContainer>
            <S.AboutText>
                I’m convinced that design can solve complex problems and algorithms can bring those solutions at large
                scale in an accessible way. I carefully create digital products and experiences that solve people and
                business needs. During 6+ years, I’ve crossed many different areas of a digital product lifecycle from
                graphic design, web design to UI/UX, web engineering and startup development.
                <br />
                <br />I bring those expertises all together to help you achieve your goals.
            </S.AboutText>
            <S.AboutSubtitle weight="extrabold">My journey</S.AboutSubtitle>
            <S.AboutText>
                I’m a designer who learned to code to bridge the gap between creatives and developers.
                <br />I started my journey at{' '}
                <a href="https://www.ecv.fr/en/" target="_blank" rel="noreferrer noopener">
                    <Typography as="span" weight="medium" isLink highlighted>
                        ECV{' '}
                    </Typography>
                </a>
                where I learned graphic and digital design. I consolidated my software skills at{' '}
                <a href="https://oclock.io/" target="_blank" rel="noreferrer noopener">
                    <Typography as="span" weight="medium" isLink highlighted>
                        O’Clock
                    </Typography>
                </a>
                , learning the modern stack ReactJS and it’s ecosystem. I had the chance to join the great{' '}
                <a href="https://skatekrak.com/" target="_blank" rel="noreferrer noopener">
                    <Typography as="span" weight="medium" isLink highlighted>
                        Krak{' '}
                    </Typography>
                </a>
                team and participate to the{' '}
                <a href="https://www.techstars.com/accelerators/boulder" target="_blank" rel="noreferrer noopener">
                    <Typography as="span" weight="medium" isLink highlighted>
                        Techstars Boulder Program{' '}
                    </Typography>
                </a>
                2018 that hooked me in the startup world. We created{' '}
                <a href="https://thepunkclub.com/" target="_blank" rel="noreferrer noopener">
                    <Typography as="span" weight="medium" isLink highlighted>
                        The Punk Club{' '}
                    </Typography>
                </a>
                which aims to make the world a huge playground for extreme sports aficionados. I also participated at an
                other startup stage and fully saas project with an experienced team by working at{' '}
                <a href="https://www.verbz.ai/" target="_blank" rel="noreferrer noopener">
                    <Typography as="span" weight="medium" isLink highlighted>
                        Verbz{' '}
                    </Typography>
                </a>
                .
                <br />
                <br />
                I’m looking forward to seeing what’s coming next!
            </S.AboutText>
        </S.AboutContainer>
    </DefaultLayout>
);

export default About;
