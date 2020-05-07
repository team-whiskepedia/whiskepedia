# whiskepedia

**Authors**: Dave Trost (DaveTrost @ github), Donna Lambert (Sanvean74 @ github), John Nelson (john4850 @ github)

**Version**: 2.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Project Description

App for exploring hundreds of bottles of whiskey cataloged by flavor profile. Vanilla JS and home-brewed CSS front end. Express and Postgres on the back end. SQL Database seeded with Whiskey data from the WhiskeyProject.

Those who are new to whiskey terminology will enjoy the exploration of whiskey's by flavor profiles. Search for one or two whiskeys that you enjoyed (or did not enjoy). Find the primary flavor notes and search for new bottles by including and/or excluding those flavors. 

For the whiskey connoisseur, bottles that have been enjoyed in the past can be favorited and will display in the My Bottles page. You may enjoy analyzing the flavor commonalities and note the differences in taste for a more educated experience with future tastings!

## Getting Started

- Clone the repository from GitHub: <https://github.com/team-whiskepedia/whiskepedia>
- Run `npm i`
- Create a local postgres database with the name 'whiskepedia', and link to it in your .env file (DATABASE_URL= postgres://localhost:5432/whiskepedia)
- Start the backend server from your local machine:
  - Run `npm start` (or `npm run start:watch` to automatically restart the server when server-side files are changed)
  - Confirm the database connection message: "connected to db postgres://postgres:1123..."
- Open a live server for the front end
  - Open the file /public/index.html
  - Open the Command Pallete by pressing `F1` or `ctrl+shift+P` and type `Live Server: Open With Live Server` to start a server or type `Live Server: Stop Live Server` to stop a server.
    - Or, use the `Go Live` button in the status bar
    - Make sure that you have the following in the workspace settings for live server:
      - `"liveServer.settings.root": "/public"`
