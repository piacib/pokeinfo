import{s as a,P as m,D as g,j as r,a as n,b as f,H as x,d as P,h as M,c as j,T,e as B,r as h,F as p,f as w,g as v,A as k}from"./index-359e8e58.js";const I=a(m)``,O=g.data.Items,C=({items:e})=>r(I,{children:[n("h3",{children:"Items:"}),e?e.map(t=>r(f,{children:[n("span",{children:t}),n(x,{children:O[P(t)].desc})]},t)):n(f,{children:"None"})]}),R=a(x)``,z=a(B)`
  position: relative;
  ${M}
  ${j}

  &:hover ${R} {
    bottom: 100%;
    right: 0;
    padding: ${e=>e.theme.padding.medium};
    font-size: 1.1rem;
    margin: 5px 0;
    left: 0;
    width: 130px;
    @media (min-width: ${e=>e.theme.media.mediumScreen}) {
      width: 11rem;
      left: auto;
    }
  }
  p {
    margin: 0.3rem 0;
    white-space: nowrap;
  }
  border: none;
`,A=a.ul`
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
`,c=a.li``,E=a(c)`
  white-space: initial;
`,F=a(m)`
  display: flex;
  position: relative;
`,H=a(c)`
  ${T}
  padding: ${e=>e.theme.padding.small};
  width: fit-content;
  margin: 0 auto;
`,$=({movesData:e})=>r(F,{children:[n("h3",{children:"Moves:"}),e==null?void 0:e.map(t=>t&&r(z,{background:t.type,children:[n("p",{children:t.name}),n(R,{children:n(N,{move:t})})]},t.name))]}),N=({move:e})=>r(A,{children:[n(E,{children:e.shortDesc}),n(H,{background:e.type,children:e.type}),typeof e.accuracy=="number"&&r(c,{children:[n("span",{children:"Accuracy: "}),r("span",{children:[e.accuracy,"%"]})]}),!!e.priority&&r(c,{children:[n("span",{children:"Priority: "}),n("span",{children:e.priority})]}),!!e.basePower&&r(c,{children:[n("span",{children:"Power: "}),n("span",{children:e.basePower})]}),r(c,{children:[n("span",{children:"Category: "}),n("span",{children:e.category})]})]}),U=a.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: border-color 0.25s;
  border: 2px solid ${e=>e.theme.fontColor};
  background-color: ${e=>e.theme.backgroundColor};
  margin: 10px;
  box-shadow: ${e=>e.theme.boxShadow};

  color: ${e=>e.theme.fontColor};
  :hover {
    border: 2px solid red;
  }
`,S=a(m)`
  grid-column: 2;
  padding: 0;
  font-size: 0.8rem;
  @media (min-width: ${e=>e.theme.media.smallScreen}) {
    font-size: inherit;
  }
`,q=a(m)`
  padding: 0;
`,G=({pokemonData:e,initialRole:t})=>{const[i,s]=h.useState("");return h.useEffect(()=>{s(Object.keys(e)[0])},[e]),n(p,{children:r(w,{children:[Object.keys(e).length>1&&r(S,{children:[n("h3",{children:"Roles:"}),Object.keys(e).map(o=>n(U,{onClick:()=>s(o),children:o},o))]}),e[i]&&r(p,{children:[r(q,{children:[n("h3",{children:"TeraTypes:"}),e[i].teraTypes.map(o=>n(v,{background:o,children:o},o))]}),n(k,{abilities:e[i].abilities}),n(C,{items:e[i].items}),n($,{movesData:D(e[i].moves)})]})]})})},J={"":{level:0,abilities:[],items:[],moves:[]}},b=(e,t)=>{if(!e.includes(t))return e;const i=e.indexOf(t);return e.slice(0,i)+e.slice(i+t.length)},K=e=>{let t=e;return e.includes("-")&&(t=t.slice(0,t.indexOf("-"))),t.includes("unrated")?b(t,"unrated"):t.includes("blitz")?b(t,"blitz"):t},L=e=>{const[t,i]=h.useState(J);return e.includes("randombattle")||console.error(e+" is not a valid random battle type"),h.useEffect(()=>{async function s(){let o=K(e);const d=await(await fetch(`https://pkmn.github.io/randbats/data/${o}.json`)).json();i(d)}s()},[]),[t,i]},{Moves:Q}=g.data,D=e=>e?e.map(t=>Q[P(t)]):[],W=({pokemon:e,battleType:t})=>{var d,u;const[i]=L(t);let s=e[0].toUpperCase()+e.slice(1);if(Object.keys(i).length>1&&!i[s]){const y=s.split("-")[0];i[y]?s=y:console.error("no data for this pokemon",i,e)}const o=D((d=i[s])==null?void 0:d.moves),l=(u=i[s])==null?void 0:u.roles;return i[s]?n(p,{children:l?n(G,{pokemonData:l,initialRole:Object.keys(l)[0]}):r(w,{children:[n(k,{abilities:i[s].abilities}),n(C,{items:i[s].items}),n($,{movesData:o})]})}):n(p,{})};export{W as default,D as getMoves};
