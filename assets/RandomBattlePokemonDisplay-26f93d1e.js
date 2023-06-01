import{s as o,P as m,D as g,j as s,a as n,b as f,H as P,d as k,h as $,c as B,T as j,e as T,p as v,r as h,F as p,f as w,g as I,A as x}from"./index-0b3173cd.js";const O=o(m)``,z=g.data.Items,R=({items:e})=>s(O,{children:[n("h3",{children:"Items:"}),e?e.map(t=>s(f,{children:[n("span",{children:t}),n(P,{children:z[k(t)].desc})]},t)):n(f,{children:"None"})]}),D=o(P)``,A=o(T)`
  position: relative;
  ${$}
  ${B}

  &:hover ${D} {
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
`,E=o.ul`
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
`,c=o.li``,F=o(c)`
  white-space: initial;
`,H=o(m)`
  display: flex;
  position: relative;
`,N=o(c)`
  ${j}
  padding: ${e=>e.theme.padding.small};
  width: fit-content;
  margin: 0 auto;
`,C=({movesData:e})=>s(H,{children:[n("h3",{children:"Moves:"}),e==null?void 0:e.map(t=>t&&s(A,{background:t.type,children:[n("p",{children:t.name}),n(D,{children:n(U,{move:t})})]},t.name))]}),U=({move:e})=>s(E,{children:[n(F,{children:e.shortDesc}),n(N,{background:e.type,children:e.type}),typeof e.accuracy=="number"&&s(c,{children:[n("span",{children:"Accuracy: "}),s("span",{children:[e.accuracy,"%"]})]}),!!e.priority&&s(c,{children:[n("span",{children:"Priority: "}),n("span",{children:e.priority})]}),!!e.basePower&&s(c,{children:[n("span",{children:"Power: "}),n("span",{children:e.basePower})]}),s(c,{children:[n("span",{children:"Category: "}),n("span",{children:e.category})]})]}),W=o.button`
  ${v}
  transition: border-color 0.25s;
  padding: 0.5rem 1rem;
  :hover {
    border: ${e=>e.theme.propertyBtn.borderWidth} solid
      ${e=>e.theme.color.pokedexRed};
  }
`,q=o(m)`
  grid-column: 2;
  padding: 0;
  font-size: 0.8rem;
  @media (min-width: ${e=>e.theme.media.smallScreen}) {
    font-size: inherit;
  }
`,G=o(m)`
  padding: 0;
`,J=({pokemonData:e,initialRole:t})=>{const[i,r]=h.useState("");return h.useEffect(()=>{r(Object.keys(e)[0])},[e]),n(p,{children:s(w,{children:[Object.keys(e).length>1&&s(q,{children:[n("h3",{children:"Roles:"}),Object.keys(e).map(a=>n(W,{onClick:()=>r(a),children:a},a))]}),e[i]&&s(p,{children:[s(G,{children:[n("h3",{children:"TeraTypes:"}),e[i].teraTypes.map(a=>n(I,{background:a,children:a},a))]}),n(x,{abilities:e[i].abilities}),n(R,{items:e[i].items}),n(C,{movesData:M(e[i].moves)})]})]})})},K={"":{level:0,abilities:[],items:[],moves:[]}},b=(e,t)=>{if(!e.includes(t))return e;const i=e.indexOf(t);return e.slice(0,i)+e.slice(i+t.length)},L=e=>{let t=e;return e.includes("-")&&(t=t.slice(0,t.indexOf("-"))),t.includes("unrated")?b(t,"unrated"):t.includes("blitz")?b(t,"blitz"):t},Q=e=>{const[t,i]=h.useState(K);return e.includes("randombattle")||console.error(e+" is not a valid random battle type"),h.useEffect(()=>{async function r(){let a=L(e);const d=await(await fetch(`https://pkmn.github.io/randbats/data/${a}.json`)).json();i(d)}r()},[]),[t,i]},{Moves:S}=g.data,M=e=>e?e.map(t=>S[k(t)]):[],X=({pokemon:e,battleType:t})=>{var d,y;const[i]=Q(t);let r=e[0].toUpperCase()+e.slice(1);if(Object.keys(i).length>1&&!i[r]){const u=r.split("-")[0];i[u]?r=u:console.error("no data for this pokemon",i,e)}const a=M((d=i[r])==null?void 0:d.moves),l=(y=i[r])==null?void 0:y.roles;return i[r]?n(p,{children:l?n(J,{pokemonData:l,initialRole:Object.keys(l)[0]}):s(w,{children:[n(x,{abilities:i[r].abilities}),n(R,{items:i[r].items}),n(C,{movesData:a})]})}):n(p,{})};export{X as default,M as getMoves};
