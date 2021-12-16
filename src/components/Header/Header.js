import React from 'react';
import styled from 'styled-components/macro';
import { Link, Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';
import Spacer from '../Spacer/Spacer';

const MenuButtons = () => {
  return (
        <>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
        </>
  )
}

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <MenuButtons />
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
          <ActionGroupMain>
            <MenuButtons />
          </ActionGroupMain>
          <Side />
            <Logo />
          <Side />
          <SubscribeGroup>
            <Button>Subscribe</Button>
            <SubscribeLink href='#'>Already a subscriber?</SubscribeLink>
          </SubscribeGroup>
     </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const SubscribeGroup = styled.div`
  display: none;
  @media ${QUERIES.desktopAndUp} {
    align-self: flex-end;
    display: grid;
  }
`;

const SubscribeLink = styled.a`
  color: black;
  font-style: italic;
  text-decoration: underline;
  justify-self: center;
  font-size: 0.875rem;
`;

const Side = styled.div`
  flex: 1;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const ActionGroupMain = styled(ActionGroup)`
  display: none;
    @media ${QUERIES.desktopAndUp} {
     display: flex;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  }
`;

export default Header;
