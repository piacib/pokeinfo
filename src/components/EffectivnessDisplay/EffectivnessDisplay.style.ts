import styled from "styled-components";
import { PillDesign, TypeColoredComponent } from "../../App.style";
import {
  FlexRowCenteredCSS,
  FlexRowHorizCenteredDiv,
} from "../../styles/Components.style";

export const DamageGroupContainer = styled(FlexRowHorizCenteredDiv)`
  align-items: space-around;
  flex-wrap: wrap;
  width: 100%;
  @media (min-width: ${(props) => props.theme.media.smallScreen}) {
    justify-content: flex-start;
  }
`;
export const TypeBox = styled(TypeColoredComponent)`
  ${PillDesign}
  display: flex;
  align-items: center;
`;
export const Effectivness = styled.p`
  background: snow;
  color: black;
  border-radius: 50%;
  padding: 0.3rem;
  margin: 0;
  height: 1.2rem;
  width: 1.2rem;
  ${FlexRowCenteredCSS}
  span {
    margin-left: 1px;
  }
`;
export const Type = styled.p`
  margin: 0 0.5rem 0 0;
`;
