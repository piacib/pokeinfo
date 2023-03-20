import styled, { css } from "styled-components";
export const StatsContainer = styled.table`
  grid-column: 2/4;
  grid-row: 1/3;
  background: #e0e7ea;
  border: 1px solid #aaa;
  font-size: 1.2em;
  padding: 0.2rem;
  background-color: #6890f0;
  border-radius: 15px;
  color: black;
  max-width: 700px;
  @media (max-width: ${(props) => props.theme.media.mediumScreen}) {
    order: 99;
  } ;
`;
export const StatBox = styled.th`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 0.4rem;
  max-width: 10rem;
`;
const TextOneLine = css`
  overflow: hidden;
  white-space: nowrap;
`;
export const StatName = styled.div`
  ${TextOneLine}
`;
export const StatValue = styled.div``;
export const StatsHead = styled.thead`
  * > h2 {
    margin: 0;
  }
`;
export const StatBar = styled.td`
  width: 80%;
`;
interface StatEntry {
  stat: number;
}
export const Bar = styled.div<StatEntry>`
  height: 20px;
  width: ${(props) => `${(props.stat * 100) / 255}%`};
`;

interface RowType {
  type?: string;
}
interface obj {
  [k: string]: { background: string; bar: string; barBorder: string };
}
const colorObj: obj = {
  hp: { background: "#FF5959", bar: "#FF0000", barBorder: "#A60000" },
  atk: { background: "#F5AC78", bar: "#F08030", barBorder: "#9C531F" },
  def: { background: "#FAE078", bar: "#F8D030", barBorder: "#A1871F" },
  spa: { background: "#9DB7F5", bar: "#6890F0", barBorder: "#445E9C" },
  spd: { background: "#A7DB8D", bar: "#78C850", barBorder: "#4E8234" },
  spe: { background: "#FA92B2", bar: "#F85888", barBorder: "#A13959" },
};
const colorObjConverter = (
  str: string | undefined,
  key: "background" | "bar" | "barBorder",
) => {
  if (!str || !colorObj[str]) return "";
  return colorObj[str][key];
};
export const StatsTableRow = styled.tr<RowType>`
  background-color: red;
  background-color: ${(props) => colorObjConverter(props.type, "background")};
  ${Bar} {
    background-color: ${(props) => colorObjConverter(props.type, "bar")};
    border: 1px solid ${(props) => colorObjConverter(props.type, "barBorder")};
  }
`;
