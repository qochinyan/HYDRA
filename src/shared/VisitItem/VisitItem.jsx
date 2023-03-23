import styled from "styled-components";

const RightHand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`;
const H3 = styled.h3`
  color: white;
  font-size: 24px;
  font-weight: 700;
  white-space: nowrap;
`; 
const P = styled.p`
  font-size: 14px;
  color: white;
`;
const Container = styled.div`
  display: flex;
  height: ${(props) => props.height};
  gap: 20px;
  align-items: center;
  padding: 0 20px;
`;
const Icon = styled.img`
  width: ${(props) => props.size};
`;
const VisitItem = ({ sizes, icon, head1, head2 }) => {
  return (
    <Container height={sizes.height}>
      <Icon size={sizes.icon} src={icon} alt="" />
      <RightHand>
        <H3>{head1}</H3>
        <P>{head2}</P>
      </RightHand>
    </Container>
  );
};

export default VisitItem;
