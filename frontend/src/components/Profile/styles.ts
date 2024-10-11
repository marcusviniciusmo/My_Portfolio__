import styled from 'styled-components';

export const ProfileContainer = styled.aside.attrs({
  className: 'viewContent',
})`
  text-align: center;
  width: 40rem;
  padding-inline: 2.4rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Image = styled.img`
  box-shadow: ${({ theme }) => theme.colors.shadow};
  width: 24rem;
  height: 24rem;
  margin: -14rem auto 0;
  border-radius: 2rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Content = styled.div`
  padding-block: 10rem 3.2rem;
`;

const NameModel = styled.h1`
  margin: 2.4rem auto 0.4rem;
`;

export const Name = styled(NameModel)`
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 2.6rem;
`;

export const NameSkeleton = styled(NameModel).attrs({
  className: 'skeleton',
})`
  width: 25rem;
  height: 3rem;
`;

const RoleModel = styled.h3`
  margin-bottom: 1.6rem;
  padding: 0.6rem 2rem;
  display: inline-block;
`;
export const Role = styled(RoleModel)`
  background: ${({ theme }) => theme.colors.secondaryBackground};
  color: ${({ theme }) => theme.colors.tertiaryText};
  font-weight: 400;
  border-radius: 0.5rem;
`;

export const RoleSkeleton = styled(RoleModel).attrs({
  className: 'skeleton',
})`
  width: 20rem;
  height: 3rem;
`;
