# Github repositories app

---

**If you just want to see how to run the app, jump to the end of the README**

This is supposed to be a simple React app where you can search for a specific Github's user and see their repositories. It is NOT finished yet, but what started as a simple
Tech interview app has become something interesting for me to try new things.

Technologies used in the project:

- React + Typescript
- NextUI (First time using it!) + TailwindCSS for styling
- Generated with Vite
- Playwright for testing (First time using it + still in process)
- Deployed in Netlify

The only requirements for this project was for it to be made in React with Typescript, and everything else is fair play.

As the project itself wasn't really that complex I wanted to use the chance to experiment with some stuff I hadn't used before. So I decided a probably wouldn't use storybook because I wouldn't have the time (this was a possible +1 for the tech assignment!), but I would try to use the **GraphQL API** (never used it before), **Playwright** (never used it before) and probably **React Query**

Yeah, I _may_ have overshot my estimates a bit. I focused on actually writing the app and then applying the new stuff, which wasn't necessarily the best thing ever. I started fiddling with React-Query and the GraphQL Github API and I _actually got it working!_ woohoo! Except that it actually changed quite a bit of how I implemented stuff at the beginning so I decided to scratch it until I actually had time to do it properly.

Same thing with Playwright. It's running, but turns out it has some issues if you're developing with WSL (which I am), which makes it a bit difficult to iterate over a test, which made it so I just wrote a test that checks if... the apps start? it's something? I guess?

Anyways, dev rant is over. Lets see how to run the project!

---

## How to run the project

Running this thing is easy, just:

1. Clone the repo
2. Go into the root directory and write `npm install` to install all the dependencies
3. Use `npm run dev` to start your local dev environment with Vite
4. Profit!

Want to run tests? then:

1. Run `npm run dev` so the dev server is active
2. Then you can run npx playwright test

Also you can check out the project live in the following link:

## Future improvements

Oh God there's a ton to improve here.

1. First thing I would do is change the state to work with the URL, so you can go to the URL with the login in the params and get all the info from the user.
2. Implement some actual and useful testing. I believe it would be valuable to test the autocomplete, that the correct info is being displayed for some conditional data (when the user has no orgs for example and stuff like that)
3. Implement an actual screen for a user with no repositories.
4. I would probably use something like Zod to validate API responses
5. Would rewrite the app to work with React Query, which after testing it a bit I found I really liked.
6. I would end up using the GraphQL API to get more familiar with it.
7. There's a lot of room to improve error handling and loading states

I will keep iterating over this to practice new stuff as I mentioned before, but as of right now I kind of have to deliver this even if isn't as complete as I would've liked it to be.
