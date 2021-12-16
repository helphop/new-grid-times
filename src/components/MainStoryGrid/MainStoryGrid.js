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
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;
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
    padding-bottom: 24px;
    margin-bottom: 24px;
  }
`;

const StoryListOpinion = styled(StoryList)`
  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    gap: 8px;
    > :not(:last-child) {
      border-bottom: none;
    }
  }
  @media ${QUERIES.laptopAndUp} {
    flex-direction: column;
    > :not(:last-child) {
      border-bottom: var(--border-gray);
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
