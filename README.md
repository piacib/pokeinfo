## PokeInfo

Pokeinfo is a platform designed to connect with Pokemon Showdown battles, offering users real-time information about the Pokemon engaged in battle.
In addition, Pokeinfo features an interactive page built to test your knowledge of Pokemon damage multipliers.

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

## What I learned from this project

Building this project has helped expand my skill set across various critical areas of web development. Through the development process, I delved into the world of TypeScript, leveraging its strong typing system and enhanced code organization to build a more robust and maintainable application. Implementing websockets for real-time data communication with the Showdown server helped teach my about how data is sent over the web and understanding response errors.
Along the way, I encountered and overcame numerous challenges related to error handling, which deepened my comprehension of anticipating and handling errors to ensure a seamless user experience. As the project grew in complexity, I gained valuable insights into project structure and architectural design, enabling me to envision and plan for larger-scale projects more effectively.
Moreover, my adoption of Git as a version control system empowered me to track changes, and maintain a structured workflow throughout the project's lifecycle.
