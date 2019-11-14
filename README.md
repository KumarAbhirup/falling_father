# `🌤️ Falling Father!`

Start your day with some father saving game!

## 😃 Getting Started

Main code is in *frontend/app/index.js*

I've provided comments in the most important parts of the code, so you don't get lost.

Feel free to modify anything, upgrade the game, add more stuff!

## 🖥️ Spin up the game locally

- Run

```bash
$ git clone <YOUR_REMIXED_REMOTE_URL> <PROJECT_NAME>
$ cd <PROJECT_NAME>/frontend
$ npm i
$ npm start
```

- Visit [https://localhost:8080](https://localhost:8080)

## 💥 About The Game

Save your father from obstacles and help him collect coins in the meanwhile.

## ⚒️ Customizations

Take a look at the Koji VCC to see what all you can customize.

## ☕ For developers

### For setting scores, use the following code snippet 👇

```js
window.setScore(score)
window.setAppView('setScore')
```

### Develop locally

- Developing locally on VSCode gives you perks of ESLint and Prettier and having them lint code automatically is fun!

- Just do `git clone <REMOTE_GIT_URL> <PROJECT_NAME>`

- Then do `$ npm i` in the `frontend` and `backend` directories.

- Now, run the command `$ env | grep 'KOJI_PROJECT` in the online Koji editor terminal and copy the result. It should look something like this:
```bash
  KOJI_PROJECT_ID=b6342f53-8284-4598-9ada-816723a3b39f
  KOJI_PROJECT_TOKEN=71c6bed0-a141-4dec-ad8b-e1a46f3b9625
```

- Create an `.env` file in the root directory of the project and paste these two lines into it. Now, your environment variables will be filled with the tokens needed to run the Leaderboard.

- Run `$ export KOJI_SERVICE_URL_backend=http://0.0.0.0:3333 && npm start` in the `frontend`  derectory and  `npm run start-dev` in the `backend` directory.

- That's how you get your local dev environment. Visit the game at [0.0.0.0:8080](http://0.0.0.0:8080) in your browser and click on the Leaderboard button, to check that it is displayed correctly. If there are no scores stored yet, you should still see the title "Top Scores" at the top left and a "Close" link at the top right.

### Save to GitHub

- Create a New Repository

- Run the following commands Local Terminal or on Online Koji Editor terminal

```bash
$ git remote add github https://github.com/<GITHUB_USERNAME>/<REPO_NAME>.git
$ git push -u github master
```

- And now everytime you make changes, do the following

```bash
$ git add .
$ git commit -m "Save changes"
$ git push origin master
$ git push github master
```

- On GitHub, for better development processes, you are advised to use Branches and Pull Requests instead of directly commiting to master. Learn more [here](https://guides.github.com/).

### Deploying the changes made locally

- Run the following commands

```bash
$ git add .
$ git commit -m "Save changes"
$ git push origin master
$ git push github master # <- only if you also maintain a GitHub Repository
```

- Now open the online Koji Editor and get the changes you made by running the following command 👉 `$ git pull origin master`

- To officially deploy your project, you can **Publish the project using the Koji GUI**.

## 🤙 Wanna contribute❓

Just shoot a Pull Request at [the official GitHub repository of this game 📦](https://github.com/KumarAbhirup/falling_father)

Or follow me and DM on [Twitter @kumar_abhirup](https://twitter.com/kumar_abhirup) 🙌

Or hit me up on Koji's official Discord server, username: kumar_abhirup 🌱

## 📝 Licence

**GPL © [Kumar Abhirup](https://kumar.now.sh)**

_Follow me 👋 **on Twitter**_ →   [![Twitter](https://img.shields.io/twitter/follow/kumar_abhirup.svg?style=social&label=@kumar_abhirup)](https://twitter.com/kumar_abhirup)

## Credits for assets

OpenGameArt 👉 [https://opengameart.org](https://opengameart.org)

If you see your assets being used without your permission, DM me for getting credited or remove the asset altogether!
