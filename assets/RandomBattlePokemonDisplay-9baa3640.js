import{s as o,P as m,D as g,j as i,a as n,b,H as x,d as P,h as M,c as j,T,e as B,F as l,r as p,f as w,g as v,A as k}from"./index-9391a652.js";const I=o(m)``,O=g.data.Items,C=({items:e})=>i(I,{children:[n("h3",{children:"Items:"}),e?e.map(t=>i(b,{children:[n("span",{children:t}),n(x,{children:O[P(t)].desc})]},t)):n(b,{children:"None"})]}),R=o(x)``,z=o(B)`
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
`,A=o.ul`
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
`,c=o.li``,E=o(c)`
  white-space: initial;
`,F=o(m)`
  display: flex;
  position: relative;
`,H=o(c)`
  ${T}
  padding: ${e=>e.theme.padding.small};
  width: fit-content;
  margin: 0 auto;
`,N=({move:e})=>i(A,{children:[n(E,{children:e.shortDesc}),n(H,{background:e.type,children:e.type}),typeof e.accuracy=="number"&&i(c,{children:[n("span",{children:"Accuracy: "}),i("span",{children:[e.accuracy,"%"]})]}),!!e.priority&&i(c,{children:[n("span",{children:"Priority: "}),n("span",{children:e.priority})]}),!!e.basePower&&i(c,{children:[n("span",{children:"Power: "}),n("span",{children:e.basePower})]}),i(c,{children:[n("span",{children:"Category: "}),n("span",{children:e.category})]})]}),$=({movesData:e})=>i(F,{children:[n("h3",{children:"Moves:"}),e==null?void 0:e.map(t=>t?i(z,{background:t.type,children:[n("p",{children:t.name}),n(R,{children:n(N,{move:t})})]},t.name):n(l,{}))]}),U=o.button`
  border: 2px solid ${e=>e.theme.fontColor};
  background-color: ${e=>e.theme.backgroundColor};
  margin: 10px;
  box-shadow: ${e=>e.theme.boxShadow};

  color: ${e=>e.theme.fontColor};
  :hover {
    border: 2px solid red;
  }
`,S=o(m)`
  grid-column: 2;
  padding: 0;
  @media (max-width: ${e=>e.theme.media.smallScreen}) {
    font-size: 0.8rem;
  }
`,q=o(m)`
  padding: 0;
`,G=({pokemonData:e,initialRole:t})=>{const[s,r]=p.useState("");return p.useEffect(()=>{r(Object.keys(e)[0])},[e]),n(l,{children:i(w,{children:[Object.keys(e).length>1&&i(S,{children:[n("h3",{children:"Roles:"}),Object.keys(e).map(a=>n(U,{onClick:()=>r(a),children:a},a))]}),e[s]&&i(l,{children:[i(q,{children:[n("h3",{children:"TeraTypes:"}),e[s].teraTypes.map(a=>n(v,{background:a,children:a},a))]}),n(k,{abilities:e[s].abilities}),n(C,{items:e[s].items}),n($,{movesData:D(e[s].moves)})]})]})})},J={"":{level:0,abilities:[],items:[],moves:[]}},f=(e,t)=>{if(!e.includes(t))return e;const s=e.indexOf(t);return e.slice(0,s)+e.slice(s+t.length)},K=e=>{let t=e;return e.includes("-")&&(t=t.slice(0,t.indexOf("-"))),t.includes("unrated")?f(t,"unrated"):t.includes("blitz")?f(t,"blitz"):t},L=e=>{const[t,s]=p.useState(J);return e.includes("randombattle")||console.error(e+" is not a valid random battle type"),p.useEffect(()=>{async function r(){let a=K(e);const h=await(await fetch(`https://pkmn.github.io/randbats/data/${a}.json`)).json();s(h)}r()},[]),[t,s]},{Moves:Q}=g.data,D=e=>e?e.map(t=>Q[P(t)]):[],W=({pokemon:e,battleType:t})=>{var h,u;const[s]=L(t);let r=e[0].toUpperCase()+e.slice(1);if(Object.keys(s).length>1&&!s[r]){const y=r.split("-")[0];s[y]?r=y:console.error("no data for this pokemon",s,e)}const a=D((h=s[r])==null?void 0:h.moves),d=(u=s[r])==null?void 0:u.roles;return s[r]?n(l,{children:d?n(l,{children:n(G,{pokemonData:d,initialRole:Object.keys(d)[0]})}):i(w,{children:[n(k,{abilities:s[r].abilities}),n(C,{items:s[r].items}),n($,{movesData:a})]})}):n(l,{})};export{W as default,D as getMoves};
