import{s as a,P as m,D as g,j as r,a as n,b as f,H as x,d as P,h as M,c as j,T,e as B,F as d,r as p,f as w,g as v,A as k}from"./index-8e4855db.js";const I=a(m)``,O=g.data.Items,C=({items:e})=>r(I,{children:[n("h3",{children:"Items:"}),e?e.map(t=>r(f,{children:[n("span",{children:t}),n(x,{children:O[P(t)].desc})]},t)):n(f,{children:"None"})]}),R=a(x)``,z=a(B)`
  position: relative;
  ${M}
  ${j}

  &:hover ${R} {
    bottom: 100%;
    right: 0;
    width: 11rem;
    padding: ${e=>e.theme.padding.medium};
    font-size: 1.1rem;
    margin: 5px 0;
    @media (max-width: ${e=>e.theme.media.mediumScreen}) {
      left: 0;
      max-width: 130px;
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
`,N=({move:e})=>r(A,{children:[n(E,{children:e.shortDesc}),n(H,{background:e.type,children:e.type}),typeof e.accuracy=="number"&&r(c,{children:[n("span",{children:"Accuracy: "}),r("span",{children:[e.accuracy,"%"]})]}),!!e.priority&&r(c,{children:[n("span",{children:"Priority: "}),n("span",{children:e.priority})]}),!!e.basePower&&r(c,{children:[n("span",{children:"Power: "}),n("span",{children:e.basePower})]}),r(c,{children:[n("span",{children:"Category: "}),n("span",{children:e.category})]})]}),$=({movesData:e})=>r(F,{children:[n("h3",{children:"Moves:"}),e==null?void 0:e.map(t=>t?r(z,{background:t.type,children:[n("p",{children:t.name}),n(R,{children:n(N,{move:t})})]},t.name):n(d,{}))]}),U=a.button`
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
  @media (max-width: ${e=>e.theme.media.smallScreen}) {
    font-size: 0.8rem;
  }
`,q=a(m)`
  padding: 0;
`,G=({pokemonData:e,initialRole:t})=>{const[i,s]=p.useState("");return p.useEffect(()=>{s(Object.keys(e)[0])},[e]),n(d,{children:r(w,{children:[Object.keys(e).length>1&&r(S,{children:[n("h3",{children:"Roles:"}),Object.keys(e).map(o=>n(U,{onClick:()=>s(o),children:o},o))]}),e[i]&&r(d,{children:[r(q,{children:[n("h3",{children:"TeraTypes:"}),e[i].teraTypes.map(o=>n(v,{background:o,children:o},o))]}),n(k,{abilities:e[i].abilities}),n(C,{items:e[i].items}),n($,{movesData:D(e[i].moves)})]})]})})},J={"":{level:0,abilities:[],items:[],moves:[]}},b=(e,t)=>{if(!e.includes(t))return e;const i=e.indexOf(t);return e.slice(0,i)+e.slice(i+t.length)},K=e=>{let t=e;return e.includes("-")&&(t=t.slice(0,t.indexOf("-"))),t.includes("unrated")?b(t,"unrated"):t.includes("blitz")?b(t,"blitz"):t},L=e=>{const[t,i]=p.useState(J);return e.includes("randombattle")||console.error(e+" is not a valid random battle type"),p.useEffect(()=>{async function s(){let o=K(e);const h=await(await fetch(`https://pkmn.github.io/randbats/data/${o}.json`)).json();i(h)}s()},[]),[t,i]},{Moves:Q}=g.data,D=e=>e?e.map(t=>Q[P(t)]):[],W=({pokemon:e,battleType:t})=>{var h,u;const[i]=L(t);let s=e[0].toUpperCase()+e.slice(1);if(Object.keys(i).length>1&&!i[s]){const y=s.split("-")[0];i[y]?s=y:console.error("no data for this pokemon",i,e)}const o=D((h=i[s])==null?void 0:h.moves),l=(u=i[s])==null?void 0:u.roles;return i[s]?n(d,{children:l?n(d,{children:n(G,{pokemonData:l,initialRole:Object.keys(l)[0]})}):r(w,{children:[n(k,{abilities:i[s].abilities}),n(C,{items:i[s].items}),n($,{movesData:o})]})}):n(d,{})};export{W as default,D as getMoves};
