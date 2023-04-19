import{s as o,D as g,j as s,a as n,c as P,P as $,f as T,T as j,F as l,r as p}from"./index-9fa90bd9.js";import{b as m,c as f,H as x,h as B,d as k,T as v,A as C}from"./PokemonDataDisplay-1a91aa92.js";const I=o(m)``,O=g.data.Items,w=({items:e})=>s(I,{children:[n("h3",{children:"Items:"}),e?e.map(t=>s(f,{children:[n("span",{children:t}),n(x,{children:O[P(t)].desc})]},t)):n(f,{children:"None"})]}),R=o(x)``,z=o(j)`
  position: relative;
  ${B}
  ${$}

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
`,N=({move:e})=>s(A,{children:[n(E,{children:e.shortDesc}),n(H,{background:e.type,children:e.type}),typeof e.accuracy=="number"&&s(c,{children:[n("span",{children:"Accuracy: "}),s("span",{children:[e.accuracy,"%"]})]}),Boolean(e.priority)&&s(c,{children:[n("span",{children:"Priority: "}),n("span",{children:e.priority})]}),Boolean(e.basePower)&&s(c,{children:[n("span",{children:"Power: "}),n("span",{children:e.basePower})]}),s(c,{children:[n("span",{children:"Category: "}),n("span",{children:e.category})]})]}),D=({movesData:e})=>s(F,{children:[n("h3",{children:"Moves:"}),e==null?void 0:e.map(t=>t?s(z,{background:t.type,children:[n("p",{children:t.name}),n(R,{children:n(N,{move:t})})]},t.name):n(l,{}))]}),U=o.button`
  border: 2px solid ${e=>e.theme.fontColor};
  background-color: ${e=>e.theme.backgroundColor};
  margin: 10px;
  color: ${e=>e.theme.fontColor};
  :hover {
    border: 2px solid red;
  }
`,q=o(m)`
  grid-column: 2;
  padding: 0;
  @media (max-width:${e=>e.theme.media.smallScreen}) {
    font-size:.8rem; 
  }

`,G=o(m)`
  padding: 0;
`,J=({pokemonData:e,initialRole:t})=>{const[i,r]=p.useState("");return p.useEffect(()=>{r(Object.keys(e)[0])},[e]),n(l,{children:s(k,{children:[Object.keys(e).length>1&&s(q,{children:[n("h3",{children:"Roles:"}),Object.keys(e).map(a=>n(U,{onClick:()=>r(a),children:a},a))]}),e[i]&&s(l,{children:[s(G,{children:[n("h3",{children:"TeraTypes:"}),e[i].teraTypes.map(a=>n(v,{background:a,children:a},a))]}),n(C,{abilities:e[i].abilities}),n(w,{items:e[i].items}),n(D,{movesData:M(e[i].moves)})]})]})})},K={"":{level:0,abilities:[],items:[],moves:[]}},b=(e,t)=>{if(!e.includes(t))return e;const i=e.indexOf(t);return e.slice(0,i)+e.slice(i+t.length)},L=e=>{let t=e;return e.includes("-")&&(t=t.slice(0,t.indexOf("-"))),t.includes("unrated")?b(t,"unrated"):t.includes("blitz")?b(t,"blitz"):t},Q=e=>{const[t,i]=p.useState(K);return e.includes("randombattle")||console.error(e+" is not a valid random battle type"),p.useEffect(()=>{async function r(){let a=L(e);const h=await(await fetch(`https://pkmn.github.io/randbats/data/${a}.json`)).json();i(h)}r()},[]),[t,i]},{Moves:S}=g.data,M=e=>e?e.map(t=>S[P(t)]):[],X=({pokemon:e,battleType:t})=>{var h,u;const[i]=Q(t);let r=e[0].toUpperCase()+e.slice(1);if(Object.keys(i).length>1&&!i[r]){const y=r.split("-")[0];i[y]?r=y:console.error("no data for this pokemon",i,e)}const a=M((h=i[r])==null?void 0:h.moves),d=(u=i[r])==null?void 0:u.roles;return i[r]?n(l,{children:d?n(l,{children:n(J,{pokemonData:d,initialRole:Object.keys(d)[0]})}):s(k,{children:[n(C,{abilities:i[r].abilities}),n(w,{items:i[r].items}),n(D,{movesData:a})]})}):n(l,{})};export{X as default,M as getMoves};
