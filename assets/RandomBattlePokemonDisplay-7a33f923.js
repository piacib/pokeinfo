import{s as a,D as b,j as s,a as n,c as g,P as $,C as D,f as j,T as B,F as l,r as p}from"./index-04423779.js";import{b as u,c as y,H as P,h as v,d as x,T as I,A as C}from"./PokemonDataDisplay-831e5a93.js";const O=a(u)``,T=b.data.Items,w=({items:e})=>s(O,{children:[n("h3",{children:"Items:"}),e?e.map(t=>s(y,{children:[t,n(P,{children:T[g(t)].desc})]},t)):n(y,{children:"None"})]}),k=a(P)``,z=a(B)`
  position: relative;
  ${v}
  ${$}

  &:hover ${k} {
    bottom: 100%;
    right: 0;
    width: 11rem;
    padding: ${e=>e.theme.padding.medium};
    font-size: 1.1rem;
    margin: 5px 0;
    @media (max-width: ${e=>e.theme.media.smallScreen}) {
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
`,E=D`
  /* white-space: nowrap; */
`,c=a.li`
  ${E}
`,F=a(c)`
  white-space: initial;
`,H=a(u)`
  display: flex;
  position: relative;
  padding-right: 4rem;
`,N=a(c)`
  ${j}
  padding: ${e=>e.theme.padding.small};
  width: fit-content;
  margin: 0 auto;
`,U=({move:e})=>s(A,{children:[n(F,{children:e.shortDesc}),n(N,{background:e.type,children:e.type}),typeof e.accuracy=="number"&&s(c,{children:[n("span",{children:"Accuracy: "}),s("span",{children:[e.accuracy,"%"]})]}),Boolean(e.priority)&&s(c,{children:[n("span",{children:"Priority: "}),n("span",{children:e.priority})]}),Boolean(e.basePower)&&s(c,{children:[n("span",{children:"Power: "}),n("span",{children:e.basePower})]}),s(c,{children:[n("span",{children:"Category: "}),n("span",{children:e.category})]})]}),M=({movesData:e})=>s(H,{children:[n("h3",{children:"Moves:"}),e==null?void 0:e.map(t=>t?s(z,{background:t.type,children:[n("p",{children:t.name}),n(k,{children:n(U,{move:t})})]},t.name):n(l,{}))]}),q=a.button`
  border: 2px solid ${e=>e.theme.fontColor};
  background-color: ${e=>e.theme.backgroundColor};
  margin: 10px;
  color: ${e=>e.theme.fontColor};
  :hover {
    border: 2px solid red;
  }
`,G=a(u)`
  grid-column: 2;
`,J=({pokemonData:e,initialRole:t})=>{const[r,i]=p.useState("");return p.useEffect(()=>{i(Object.keys(e)[0])},[e]),n(l,{children:s(x,{children:[Object.keys(e).length>1&&s(G,{children:[n("h3",{children:"Roles: "}),Object.keys(e).map(o=>n(q,{onClick:()=>i(o),children:o},o))]}),e[r]&&s(l,{children:[s(u,{children:[n("h3",{children:"TeraTypes:"}),e[r].teraTypes.map(o=>n(I,{background:o,children:o},o))]}),n(C,{abilities:e[r].abilities}),n(w,{items:e[r].items}),n(M,{movesData:R(e[r].moves)})]})]})})},K={"":{level:0,abilities:[],items:[],moves:[]}},f=(e,t)=>{if(!e.includes(t))return e;const r=e.indexOf(t);return e.slice(0,r)+e.slice(r+t.length)},L=e=>e.includes("unrated")?f(e,"unrated"):e.includes("blitz")?f(e,"blitz"):e,Q=e=>{const[t,r]=p.useState(K);return e.includes("randombattle")||console.error(e+" is not a valid random battle type"),p.useEffect(()=>{async function i(){let o=L(e);const h=await(await fetch(`https://pkmn.github.io/randbats/data/${o}.json`)).json();r(h)}i()},[]),[t,r]},{Moves:V}=b.data,R=e=>e?e.map(t=>V[g(t)]):[],Y=({pokemon:e,battleType:t})=>{var h,m;const[r]=Q(t),i=e[0].toUpperCase()+e.slice(1);Object.keys(r).length>1&&!r[i]&&console.error("no data for this pokemon",r,e);const o=R((h=r[i])==null?void 0:h.moves),d=(m=r[i])==null?void 0:m.roles;return r[i]?n(l,{children:d?n(l,{children:n(J,{pokemonData:d,initialRole:Object.keys(d)[0]})}):s(x,{children:[n(C,{abilities:r[i].abilities}),n(w,{items:r[i].items}),n(M,{movesData:o})]})}):n(l,{})};export{Y as default,R as getMoves};
