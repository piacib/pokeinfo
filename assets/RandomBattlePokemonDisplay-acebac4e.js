import{s as a,D as b,j as s,a as n,c as g,P as D,f as $,T as j,F as l,r as p}from"./index-ff2cf785.js";import{b as u,c as y,H as P,h as B,d as x,T as v,A as C}from"./PokemonDataDisplay-632e4275.js";const I=a(u)``,O=b.data.Items,k=({items:e})=>s(I,{children:[n("h3",{children:"Items:"}),e?e.map(t=>s(y,{children:[t,n(P,{children:O[g(t)].desc})]},t)):n(y,{children:"None"})]}),w=a(P)``,T=a(j)`
  position: relative;
  ${B}
  ${D}

  &:hover ${w} {
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
`,z=a.ul`
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
`,c=a.li``,A=a(c)`
  white-space: initial;
`,E=a(u)`
  display: flex;
  position: relative;
  padding-right: 4rem;
`,F=a(c)`
  ${$}
  padding: ${e=>e.theme.padding.small};
  width: fit-content;
  margin: 0 auto;
`,H=({move:e})=>s(z,{children:[n(A,{children:e.shortDesc}),n(F,{background:e.type,children:e.type}),typeof e.accuracy=="number"&&s(c,{children:[n("span",{children:"Accuracy: "}),s("span",{children:[e.accuracy,"%"]})]}),Boolean(e.priority)&&s(c,{children:[n("span",{children:"Priority: "}),n("span",{children:e.priority})]}),Boolean(e.basePower)&&s(c,{children:[n("span",{children:"Power: "}),n("span",{children:e.basePower})]}),s(c,{children:[n("span",{children:"Category: "}),n("span",{children:e.category})]})]}),R=({movesData:e})=>s(E,{children:[n("h3",{children:"Moves:"}),e==null?void 0:e.map(t=>t?s(T,{background:t.type,children:[n("p",{children:t.name}),n(w,{children:n(H,{move:t})})]},t.name):n(l,{}))]}),N=a.button`
  border: 2px solid ${e=>e.theme.fontColor};
  background-color: ${e=>e.theme.backgroundColor};
  margin: 10px;
  color: ${e=>e.theme.fontColor};
  :hover {
    border: 2px solid red;
  }
`,U=a(u)`
  grid-column: 2;
`,q=({pokemonData:e,initialRole:t})=>{const[r,i]=p.useState("");return p.useEffect(()=>{i(Object.keys(e)[0])},[e]),n(l,{children:s(x,{children:[Object.keys(e).length>1&&s(U,{children:[n("h3",{children:"Roles: "}),Object.keys(e).map(o=>n(N,{onClick:()=>i(o),children:o},o))]}),e[r]&&s(l,{children:[s(u,{children:[n("h3",{children:"TeraTypes:"}),e[r].teraTypes.map(o=>n(v,{background:o,children:o},o))]}),n(C,{abilities:e[r].abilities}),n(k,{items:e[r].items}),n(R,{movesData:M(e[r].moves)})]})]})})},G={"":{level:0,abilities:[],items:[],moves:[]}},f=(e,t)=>{if(!e.includes(t))return e;const r=e.indexOf(t);return e.slice(0,r)+e.slice(r+t.length)},J=e=>e.includes("unrated")?f(e,"unrated"):e.includes("blitz")?f(e,"blitz"):e,K=e=>{const[t,r]=p.useState(G);return e.includes("randombattle")||console.error(e+" is not a valid random battle type"),p.useEffect(()=>{async function i(){let o=J(e);const h=await(await fetch(`https://pkmn.github.io/randbats/data/${o}.json`)).json();r(h)}i()},[]),[t,r]},{Moves:L}=b.data,M=e=>e?e.map(t=>L[g(t)]):[],W=({pokemon:e,battleType:t})=>{var h,m;const[r]=K(t),i=e[0].toUpperCase()+e.slice(1);Object.keys(r).length>1&&!r[i]&&console.error("no data for this pokemon",r,e);const o=M((h=r[i])==null?void 0:h.moves),d=(m=r[i])==null?void 0:m.roles;return r[i]?n(l,{children:d?n(l,{children:n(q,{pokemonData:d,initialRole:Object.keys(d)[0]})}):s(x,{children:[n(C,{abilities:r[i].abilities}),n(k,{items:r[i].items}),n(R,{movesData:o})]})}):n(l,{})};export{W as default,M as getMoves};
