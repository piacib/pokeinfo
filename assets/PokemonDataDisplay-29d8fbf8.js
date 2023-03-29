import{C as f,s as n,j as s,a as r,P,T as E,F as l,r as c,b as j,L as S,D as p,c as u,R as T,_ as R,E as _,e as O}from"./index-564cfaf3.js";const N=f`
  border: 1px solid ${e=>e.theme.pokedexColor};
`,z=n.div`
  display: flex;
  flex-direction: row;
  width: 40px;
  justify-content: space-between;
`,$=1.1,H=n.div`
  border: 3px solid ${e=>e.theme.pokedexColor};
  border-radius: ${e=>e.theme.pokedexStyles.borderRadius};
  grid-column: 1/2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  padding: 5px 10px;
  max-width: 700px;
  width: 95%;
  place-self: center;
  @media (min-width: 111rem) {
    scale: ${$};
    max-width: ${$} * 700px;
  }
`,I=n.div`
  border: 2px solid ${e=>e.theme.pokedexColor};
  border-radius: 5px;
  width: 100%;
  margin: 5px 0;
  padding: 2px;
`,D=n.div`
  ${N}
  border-radius: 50%;
  background: ${e=>e.theme.color.pokedexRed};
`,C=n(D)`
  grid-row: 1;
  height: 10px;
  width: 10px;
`,L=n(D)`
  grid-row: 3;
  height: 15px;
  width: 15px;
`,G=n.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,U=n.div`
  width: 10%;
  margin-right: 5px;
  * {
    width: 100%;
    height: 3px;
    background: ${e=>e.theme.pokedexColor};
    margin: 2px 0;
  }
`,Fe=({children:e})=>s(H,{children:[s(z,{children:[r(C,{}),r(C,{})]}),r(I,{children:e}),s(G,{children:[r(L,{}),s(U,{children:[r("div",{}),r("div",{}),r("div",{}),r("div",{})]})]})]}),V=n.div`
  height: fit-content;
  display: flex;
  flex-direction: row;
  color: ${e=>e.theme.fontColor};

  /* padding-bottom: 10px; */
  flex-wrap: wrap;
  align-items: center;
  position: relative;
`,B=n.div`
  display: none;
`,M=f`
  padding: ${e=>e.theme.padding.medium};
  text-align: center;
  margin: 2px;
  font-size: 0.95rem;
  border-radius: ${e=>e.theme.buttonBorderRadius};

  cursor: pointer;
  div {
    cursor: pointer;
  }
`,W=f`
  &:hover ${B} {
    display: block;
    position: absolute;
    text-align: start;
    border: 2px solid ${e=>e.theme.fontColor};
    color: ${e=>e.theme.fontColor};
    background: ${e=>e.theme.backgroundColor};
    border-radius: ${e=>e.theme.buttonBorderRadius};
    padding: ${e=>e.theme.padding.medium};
    z-index: 2;
  }
`,q=n.div`
  ${W}
  ${M}
  border: 2px solid  ${e=>e.theme.fontColor};
  background-color: ${e=>e.theme.backgroundColor};
  color: ${e=>e.theme.fontColor};
`,J=n.a`
  align-self: center;
  text-transform: capitalize;
  grid-column: 1/2;
  font-size: 1.8rem;
  line-height: 1.8rem;
  padding: 5px 0;
  max-width: 11rem;
  color: ${e=>e.theme.fontColor};
  text-overflow: ellipsis;
`,Ae=n.div`
  margin: 5px 0 0 0;
  grid-column: 2/4;
  grid-row: 3/6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,K=n.div`
  /* grid-area: 3/1; */

  display: flex;
  justify-content: space-between;
  flex-direction: ${e=>e.changeDisplay?"column":"row"};
  margin-bottom: 0.3rem;
  height: 3rem;

  @media (max-width: 22rem) {
    flex-direction: column;
    height: fit-content;
  }
`,Q=n.h2`
  color: ${e=>e.theme.fontColor};
  grid-column: 1/3;
  text-align: center;
`,X=n.form`
  color: ${e=>e.theme.fontColor};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  grid-column: 1/3;
  place-self: center;
  width: 100%;
`,Y=n.label``,Z=n.div`
  grid-column: 1;
  grid-row: 4/6;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  font-size: 0.95rem;
  @media (max-width: ${e=>e.theme.media.mediumScreen}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,F=["Normal","Fighting","Flying","Poison","Ground","Rock","Bug","Ghost","Steel","Fire","Water","Grass","Electric","Psychic","Ice","Dragon","Dark","Fairy","???"];function ee(e){return F.includes(e)}const re=n.div`
  display: flex;
  flex-direction: row;
  align-items: space-around;
  flex-wrap: wrap;
`,te=n(E)`
  ${P}
  /* margin: 5px;

  padding: ${e=>e.theme.padding.small} ${e=>e.theme.padding.medium};
  border-radius: 10px; */
  display: flex;
  align-items: center;
`,ne=n.p`
  background: snow;
  color: black;
  border-radius: 50%;
  padding: 0.3rem;
  margin: 0;
  height: 1.2rem;
  width: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    margin-left: 1px;
  }
`,oe=n.p`
  margin: 0 0.5rem 0 0;
`,h=({damage:e,effectivenessArray:t})=>r(re,{children:t.length?r(l,{children:t.map(o=>s(te,{background:o,children:[r(oe,{children:o}),s(ne,{children:[r("span",{children:e}),r("span",{children:"x"})]})]},o))}):null}),ie=({typesArray:e})=>{const[t,o]=c.useState({0:[],.25:[],.5:[],2:[],4:[]});return c.useEffect(()=>{let d={0:[],.25:[],.5:[],2:[],4:[]};if(e&&e.length){const i=j(e);F.forEach(a=>{i&&(i[a]===0?d[0].push(a):i[a]===.25?d[.25].push(a):i[a]===.5?d[.5].push(a):i[a]===2?d[2].push(a):i[a]===4&&d[4].push(a))})}o(d)},[e]),r(Z,{children:t?s(l,{children:[r(h,{damage:"0",effectivenessArray:t[0]}),r(h,{damage:"¼",effectivenessArray:t[.25]}),r(h,{damage:"½",effectivenessArray:t[.5]}),r(h,{damage:"2",effectivenessArray:t[2]}),r(h,{damage:"4",effectivenessArray:t[4]})]}):r(S,{})})},ae=n.div`
  background-color: ${e=>e.theme.color.typeColors[e.background]};
`,k=n(ae)`
  padding: 0.2rem 1rem;
  height: fit-content;
  border-radius: 20px;
  display: flex;
  align-items: center;
`,se=n.div`
  grid-column: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 1.2rem;
  ${k}:first-child {
    border-radius: ${e=>e.types===2?"1rem 0 0 1rem":"1rem"};
  }
  ${k}:nth-child(2) {
    border-radius: 0 1rem 1rem 0;
  }
`,de=({types:e})=>e?r(se,{types:e.length,children:e.map(t=>r(k,{background:t,children:t},t))}):r(l,{}),ce=n.table`
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
  max-height: 15rem;
  @media (max-width: ${e=>e.theme.media.mediumScreen}) {
    order: 99;
  } ;
`,le=n.th`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 0.4rem;
`,pe=f`
  overflow: hidden;
  white-space: nowrap;
`,me=n.div`
  ${pe}
`,he=n.div``,ue=n.thead`
  * > h2 {
    margin: 0;
  }
`,ge=n.td`
  width: 80%;
  @media (max-width: 200px) {
    display: none;
  }
`,A=n.div`
  height: 20px;
  width: ${e=>`${e.stat*100/255}%`};
`,v={hp:{background:"#FF5959",bar:"#FF0000",barBorder:"#A60000"},atk:{background:"#F5AC78",bar:"#F08030",barBorder:"#9C531F"},def:{background:"#FAE078",bar:"#F8D030",barBorder:"#A1871F"},spa:{background:"#9DB7F5",bar:"#6890F0",barBorder:"#445E9C"},spd:{background:"#A7DB8D",bar:"#78C850",barBorder:"#4E8234"},spe:{background:"#FA92B2",bar:"#F85888",barBorder:"#A13959"}},x=(e,t)=>!e||!v[e]?"":v[e][t],fe=n.tr`
  background-color: red;
  background-color: ${e=>x(e.type,"background")};
  ${A} {
    background-color: ${e=>x(e.type,"bar")};
    border: 1px solid ${e=>x(e.type,"barBorder")};
  }
`,be={hp:"HP",atk:"Attack",def:"Defense",spa:"Sp. Atk",spd:"Sp. Def",spe:"Speed"},xe=({pokemon:e})=>{const[t,o]=c.useState({hp:0,atk:0,def:0,spa:0,spd:0,spe:0}),d=e[0].toUpperCase()+e.slice(1);return c.useEffect(()=>{p.species.get(d).exists&&o(p.species.get(d).baseStats)},[d]),s(ce,{children:[r(ue,{children:r("tr",{children:r("th",{colSpan:2,children:"Stats"})})}),r("tbody",{children:Object.entries(t).map(i=>s(fe,{type:i[0],children:[s(le,{children:[s(me,{children:[be[i[0]],":"]}),r(he,{children:r("b",{children:i[1]})})]}),r(ge,{children:r(A,{stat:i[1]})})]},`${i[0]}`))})]})},ye=n(V)``,ke=p.data.Abilities,we=({abilities:e})=>s(ye,{children:[r("h3",{children:"Abilities:"}),e&&r(l,{children:e.map(t=>{var o;return s(q,{children:[t,r(B,{children:(o=ke[u(t)])==null?void 0:o.shortDesc})]},t)})})]}),$e=({pokemon:e})=>{if(e[0].toUpperCase()+e.slice(1),e==="Not revealed")return r(l,{});const t=Object.entries(p.species.get(e).abilities).map(o=>o[1]);return r(we,{abilities:t})},{Species:y}=p.data,Ce=e=>{const[t,o]=c.useState(e),[d,i]=c.useState(null);return c.useEffect(()=>{if(o(e),y[u(e)])return;const a=e.match(/(.*)-/);if(a&&a[1]&&y[u(a[1])].name){o(a[1]);return}},[e]),c.useEffect(()=>{var a;if(p.species.get(t).exists){let m=[];const b=(a=y[u(t)])==null?void 0:a.types;if(!b){console.error("error retrieving type",u(t),t),i(m);return}b.forEach(g=>{ee(g)&&m.push(g)}),i(m)}else console.error("pokemon does not exist in dex",t)},[t]),{pkmn:t,setPkmn:o,typesArray:d,setTypesArray:i,pkmnExists:p.species.get(t).exists}},ve=T.lazy(()=>R(()=>import("./RandomBattlePokemonDisplay-b546e1d8.js"),["assets/RandomBattlePokemonDisplay-b546e1d8.js","assets/index-564cfaf3.js"])),Pe=({pokemon:e,battleType:t})=>{const{pkmn:o,setPkmn:d,typesArray:i,pkmnExists:a}=Ce(e),m=t.includes("random");return r(l,{children:a&&i?s(l,{children:[s(K,{children:[r(J,{href:`https://www.smogon.com/dex/ss/pokemon/${o}/`,children:o}),r(de,{types:i})]}),r(ie,{typesArray:i}),r(xe,{pokemon:o}),m?r(_,{children:r(c.Suspense,{fallback:r(S,{}),children:r(ve,{pokemon:o,battleType:t})})}):r($e,{pokemon:o})]}):r(Se,{pkmn:o,handleSubmit:g=>{const w=g.target;w.pokemon_search.value&&d(w.pokemon_search.value)}})})},Se=({pkmn:e,handleSubmit:t})=>s(l,{children:[s(Q,{children:["It appears the pokemon ",e," is not in our database.",r("br",{}),r("br",{}),"Try searching the pokemon name"]}),r(De,{handleSubmit:t})]}),De=({handleSubmit:e})=>s(X,{onSubmit:t=>{t.preventDefault(),e(t)},children:[r(Y,{htmlFor:"pokemon_search",children:"Enter Pokemon: "}),r(O,{type:"text",id:"pokemon_search",name:"pokemon_search"}),r("input",{type:"submit",value:"Submit"})]});export{we as A,B as H,Fe as P,te as T,Pe as a,V as b,q as c,Ae as d,W as h};
