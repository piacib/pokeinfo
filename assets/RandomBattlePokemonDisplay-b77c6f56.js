import{s as o,D as g,j as s,a as n,c as P,P as $,f as j,T as B,F as l,r as p}from"./index-6a0a629e.js";import{b as m,c as f,H as x,h as T,d as k,T as v,A as C}from"./PokemonDataDisplay-f38b7980.js";const I=o(m)``,O=g.data.Items,w=({items:e})=>s(I,{children:[n("h3",{children:"Items:"}),e?e.map(t=>s(f,{children:[t,n(x,{children:O[P(t)].desc})]},t)):n(f,{children:"None"})]}),R=o(x)``,z=o(B)`
  position: relative;
  ${T}
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
  padding-right: 4rem;
`,H=o(c)`
  ${j}
  padding: ${e=>e.theme.padding.small};
  width: fit-content;
  margin: 0 auto;
`,N=({move:e})=>s(A,{children:[n(E,{children:e.shortDesc}),n(H,{background:e.type,children:e.type}),typeof e.accuracy=="number"&&s(c,{children:[n("span",{children:"Accuracy: "}),s("span",{children:[e.accuracy,"%"]})]}),Boolean(e.priority)&&s(c,{children:[n("span",{children:"Priority: "}),n("span",{children:e.priority})]}),Boolean(e.basePower)&&s(c,{children:[n("span",{children:"Power: "}),n("span",{children:e.basePower})]}),s(c,{children:[n("span",{children:"Category: "}),n("span",{children:e.category})]})]}),M=({movesData:e})=>s(F,{children:[n("h3",{children:"Moves:"}),e==null?void 0:e.map(t=>t?s(z,{background:t.type,children:[n("p",{children:t.name}),n(R,{children:n(N,{move:t})})]},t.name):n(l,{}))]}),U=o.button`
  border: 2px solid ${e=>e.theme.fontColor};
  background-color: ${e=>e.theme.backgroundColor};
  margin: 10px;
  color: ${e=>e.theme.fontColor};
  :hover {
    border: 2px solid red;
  }
`,q=o(m)`
  grid-column: 2;
`,G=({pokemonData:e,initialRole:t})=>{const[i,r]=p.useState("");return p.useEffect(()=>{r(Object.keys(e)[0])},[e]),n(l,{children:s(k,{children:[Object.keys(e).length>1&&s(q,{children:[n("h3",{children:"Roles: "}),Object.keys(e).map(a=>n(U,{onClick:()=>r(a),children:a},a))]}),e[i]&&s(l,{children:[s(m,{children:[n("h3",{children:"TeraTypes:"}),e[i].teraTypes.map(a=>n(v,{background:a,children:a},a))]}),n(C,{abilities:e[i].abilities}),n(w,{items:e[i].items}),n(M,{movesData:D(e[i].moves)})]})]})})},J={"":{level:0,abilities:[],items:[],moves:[]}},b=(e,t)=>{if(!e.includes(t))return e;const i=e.indexOf(t);return e.slice(0,i)+e.slice(i+t.length)},K=e=>{let t=e;return e.includes("-")&&(t=t.slice(0,t.indexOf("-"))),t.includes("unrated")?b(t,"unrated"):t.includes("blitz")?b(t,"blitz"):t},L=e=>{const[t,i]=p.useState(J);return e.includes("randombattle")||console.error(e+" is not a valid random battle type"),p.useEffect(()=>{async function r(){let a=K(e);const h=await(await fetch(`https://pkmn.github.io/randbats/data/${a}.json`)).json();i(h)}r()},[]),[t,i]},{Moves:Q}=g.data,D=e=>e?e.map(t=>Q[P(t)]):[],X=({pokemon:e,battleType:t})=>{var h,u;const[i]=L(t);let r=e[0].toUpperCase()+e.slice(1);if(Object.keys(i).length>1&&!i[r]){const y=r.split("-")[0];i[y]?r=y:console.error("no data for this pokemon",i,e)}const a=D((h=i[r])==null?void 0:h.moves),d=(u=i[r])==null?void 0:u.roles;return i[r]?n(l,{children:d?n(l,{children:n(G,{pokemonData:d,initialRole:Object.keys(d)[0]})}):s(k,{children:[n(C,{abilities:i[r].abilities}),n(w,{items:i[r].items}),n(M,{movesData:a})]})}):n(l,{})};export{X as default,D as getMoves};
