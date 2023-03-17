import{s,r as l,j as m,F as u,a as t,D as x}from"./index-ff2cf785.js";import{P as k,a as S}from"./PokemonDataDisplay-632e4275.js";const y=s.form`
  width: 100%;
`;s.label``;const f=s.div`
  position: relative;
  width: 100%;
  height: 100%;
  grid-column: 1;
`,v=s.input`
  width: 98%;
  height: 100%;
  border: none;
  background-color: ${e=>e.theme.backgroundColor};
  position: relative;
  height: 1.2rem;
  :focus {
    outline: none;
  }
`,$=s.input`
  position: absolute;
  right: 0;
  margin: auto;
  height: 100%;
  background-color: ${e=>e.theme.color.pokedexRed};
  border: 2px solid ${e=>e.theme.pokedexColor};
  border-radius: ${e=>e.theme.pokedexStyles.borderRadius};
  border-radius: 5px 5px 5px 15px;
  :disabled {
    display: none;
  }
`,C=s.ul`
  display: ${e=>e.shouldDisplay?"block":"none"};
  position: absolute;
  background: ${e=>e.theme.backgroundColor};
  padding: 10px;
  margin-top: 2px;
  border: 2px solid ${e=>e.theme.pokedexColor};
  border-radius: ${e=>e.theme.pokedexStyles.borderRadius};
  list-style: none;
  li {
    padding: 5px;
    height: 1rem;
    line-height: 1rem;
  }
  li:hover {
    background: ${e=>e.theme.color.pokedexRed};
    color: ${e=>e.theme.fontColor};
    border-radius: ${e=>e.theme.pokedexStyles.borderRadius};

    cursor: pointer;
  }
`,g=s.h3`
  color: ${e=>e.theme.fontColor};
`,D=({handleSubmit:e,setPkmn:a})=>{const[n,d]=l.useState(""),[r,c]=l.useState([]),[b,h]=l.useState(!1);return t(y,{onSubmit:o=>{o.preventDefault();const p=o.target.pokemon_search.value.trim();p&&!r.includes(p)&&(console.log(r,p),c([p,...r])),e(o)},children:m(f,{children:[t(v,{placeholder:"Enter Pokemon:",onSelect:()=>{r.length&&h(!0)},onBlur:()=>{setTimeout(()=>{h(!1)},200)},type:"text",id:"pokemon_search",name:"pokemon_search",value:n,onChange:o=>d(o.target.value)}),t($,{type:"submit",value:"Submit",disabled:!Boolean(n)}),t(C,{shouldDisplay:b,children:r.map(o=>t("li",{onClick:i=>{a(o),d(o)},children:o}))})]})})},R=({battleRoomId:e})=>{const[a,n]=l.useState(""),[d,r]=l.useState(!1),c=e.match(/battle-(.*)-/);return m(u,{children:[t(k,{children:t(D,{handleSubmit:h=>{const i=h.target.pokemon_search.value.trim();i&&x.species.get(i).exists?(n(i),r(!1)):(r(0),n(i))},setPkmn:n})}),!a&&t(u,{children:t(g,{children:"This battle does not allow Spectators please search the pokemon you wish to display"})}),d===0?m(g,{children:["It appears the searched pokemon ",a," is not in our database."]}):t(u,{children:c&&a&&t(S,{pokemon:a,battleType:c[1]})})]})};export{R as default};
