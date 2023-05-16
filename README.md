## PokeInfo

Pokeinfo is a platform designed to connect with Pokemon Showdown battles, offering users real-time information about the Pokemon engaged in battle.
In addition, Pokeinfo features an interactive page built to test your knowledge of Pokemon type multipliers.

- [Download the chrome extension](https://chrome.google.com/webstore/detail/pokeinfo-extension/plolbicmjndjpglocmmgnbppgnadmlfb#:~:text=Poke%20info%20is%20a%20chrome,display%20real%20time%20battle%20information.)

- [Checkout the site](https://piacib.github.io/pokeinfo/)

## How to navigate this project

- [useWebsocket](https://github.com/piacib/pokeinfo/blob/main/src/hooks/useWebsSocket/useWebsSocket.ts)
- [Custom Data fetching](https://github.com/piacib/pokeinfo/blob/main/src/hooks/useRandomBattleData/useRandomBattleData.ts)
- [custom hook testing](https://github.com/piacib/pokeinfo/blob/main/src/hooks/useWebsSocket/useWebsocket.test.ts)

## Why I built the project this way

- I used Vite as an alternative to create-react-app for a more lightweight application
- I utilized typescript to help with future proofing my application and allowing for easier error handling down the line
- I used websockets to connect with the showdown server to allow for fast reliable data access.
- Employed Vite as a lightweight alternative to create-react-app.
- Leveraged TypeScript to future-proof the application and streamline error handling in the long run.
- Utilized websockets to establish a reliable and fast connection with the Showdown server, enabling real time battle info to be display.

## If I had more time I would change this

- Better integration with the Dex types provided by @pkmn/types
- Add a damage calculator to display percent damage each move will inflict
