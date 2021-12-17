import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryListOpinion>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryListOpinion>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --grid-gap: 48px;
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: var(--grid-gap);
  margin-bottom: var(--grid-gap);

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 2fr 1fr;
    gap: var(--grid-gap) 0;
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';

    > :first-child {
      padding-right: calc(var(--grid-gap)/3);
      margin-right: calc(var(--grid-gap)/3);
      border-right: 1px solid var(--color-gray-300);
    }
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 0.9fr 0.75fr 0.5fr;
    gap:  calc(var(--grid-gap)/3) 0;
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';

    > :nth-child(2) {
      padding-right: calc(var(--grid-gap)/3);
      margin-right: calc(var(--grid-gap)/3);
      border-right: 1px solid var(--color-gray-300);
    }

    > :last-child {
      padding-top: calc(var(--grid-gap)/3);
      margin-top: calc(var(--grid-gap)/3);
      border-top: 1px solid var(--color-gray-300);
    }
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
`;

const StoryList = styled.div`
  --border-gray: 1px solid var(--color-gray-300);
  display: flex;
  flex-direction: column;
  > :not(:last-child) {
    border-bottom: var(--border-gray);
    padding-bottom: calc(var(--grid-gap)/3);
    margin-bottom: calc(var(--grid-gap)/3);
  }
`;

const StoryListOpinion = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
    gap: 32px;
    > * {
      flex: 1;
    }
    > :not(:last-child) {
      border-bottom: none;
    }
  }
`;


const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;


const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

export default MainStoryGrid;
