import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import { QUERIES } from '../../constants';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  @media ${QUERIES.desktopAndUp} {
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
    > :first-child {
      padding-right: 18px;
      margin-right: 18px;
      border-right: 1px solid var(--color-gray-300);
    }
  }
`;

const MarketsSection = styled.section``;

const MarketCards = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns:
    repeat(auto-fit, minmax(150px, 1fr));
`;

const SportsSection = styled.section`
  display: grid;
`;

const SportsStories = styled.div`
  display: grid;
  gap: 16px;
    grid-template-columns:
    repeat(auto-fit, minmax(150px, 1fr));

  @media ${QUERIES.tabletAndUp} {
    overflow: auto;
    padding-bottom: 1rem;
    display: flex;
    max-width: 100%;
    > * {
      flex: 1;
      min-width: 220px;
    }
  }
`;

const StoryWrapper = styled.div`
  background: red;
`;

export default SpecialtyStoryGrid;
