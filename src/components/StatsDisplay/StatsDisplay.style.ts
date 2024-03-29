import styled, { css } from "styled-components";

export const StatCaption = styled.caption`
  text-align: start;
  font-size: 1.75rem;
  padding-left: 0.5rem;
`;
export const StatBox = styled.th`
  text-align: end;
  height: 1rem;
  padding-right: 0.4rem;
`;
const TextOneLine = css`
  overflow: hidden;
  white-space: nowrap;
`;
export const StatName = styled.span`
  ${TextOneLine}
`;
export const StatsHead = styled.thead`
  * > h2 {
    margin: 0;
  }
`;
export const StatBar = styled.td`
  width: 80%;
  display: none;
  @media (min-width: 200px) {
    display: table-cell;
  }
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
export const StatsTable = styled.table`
  width: 100%;
`;
export const StatsContainer = styled.div`
  grid-column: 2/4;
  grid-row: 1/3;
  border: ${(props) => props.theme.statTable.border};
  font-size: 1.2em;
  padding: 0.4rem;
  background-color: ${(props) => props.theme.statTable.backgroundColor};
  border-radius: ${(props) => props.theme.statTable.borderRadius};
  max-width: 700px;
  height: fit-content;
  max-height: 15rem;
  order: 99;
  ${StatsTableRow}:first-child ${StatBox} {
    border-radius: ${(props) => props.theme.statTable.borderRadius} 0 0;
  }
  ${StatsTableRow}:last-child ${StatBox} {
    border-radius: 0 0 0 ${(props) => props.theme.statTable.borderRadius};
  }
  ${StatsTableRow}:first-child ${StatBar} {
    border-radius: 0 ${(props) => props.theme.statTable.borderRadius} 0 0;
  }
  ${StatsTableRow}:last-child ${StatBar} {
    border-radius: 0 0 ${(props) => props.theme.statTable.borderRadius} 0;
  }
  @media (min-width: ${(props) => props.theme.media.mediumScreen}) {
    order: 1;
  }
`;
