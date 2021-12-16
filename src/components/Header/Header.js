import React from 'react';
import styled from 'styled-components/macro';
import { Link, Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';
import Spacer from '../Spacer/Spacer';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeaderLaptop>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <Side />
            <Logo />
          <Side />
          <SubscribeGroup>
            <Button>Subscribe</Button>
            <SubscribedLink href='#'>Already a subscriber?</SubscribedLink>
          </SubscribeGroup>
     </MainHeaderLaptop>
     <MainHeaderMobile>
       <Logo />
     </MainHeaderMobile>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const SubscribeGroup = styled.div`
 align-self: flex-end;
 display: grid;
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

const MainHeaderMobile = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const MainHeaderLaptop = styled(MaxWidthWrapper)`
  display: none;
   @media ${QUERIES.laptopAndUp} {
     display: flex;
    align-items: center;
    margin-top: 32px;
    margin-bottom: 48px;
   }
`;

const SubscribedLink = styled.a`
  color: black;
  font-style: italic;
  text-decoration: underline;
  justify-self: center;
  font-size: 0.875rem;
`;

export default Header;
