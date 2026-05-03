# Optional Stretch: Deploy Your Prototype (Vercel + Supabase)

**Status:** OPTIONAL. Not required for Week 2.
**Estimated time:** 20-30 minutes if you choose to do it.
**When to do this:** Near the end of the course, or any time you want to take a local prototype public.

> ## Optional
>
> **This document is optional and not part of the required Week 2 setup.** The required setup for Week 2 is in [`local-project-setup.md`](./local-project-setup.md) (about 15 to 20 minutes: verify Claude Code works, create a project folder, locate your Week 1 artifacts, confirm Python 3 is installed). Do that first. Everything the Week 2 workshop and practice assignment needs runs locally. No Vercel account, no Supabase account, no live URL, no deploy.
>
> The reason this doc still exists: at some point you may want to share a prototype with a stakeholder who will not clone your repo, or put a live demo in front of a real user, or carry a Week 2 feature forward into something a teammate can poke at. When that moment arrives, this doc walks you through the standard PM-friendly path: a Vercel account for hosting and a Supabase account if you need a database. Keep it bookmarked. Come back to it when you are ready.
>
> The content below was originally written as a required Week 2 setup. Ignore the "Week 2" framing inside the steps (they still work as written). Treat this as a general-purpose "how I put a prototype on the internet" guide.

This is purely mechanical. Follow the steps, check that each one worked, and move on. No concepts to learn here. Just setup.

**What "done" looks like:** You have a live URL (something like `your-project.vercel.app`) showing a page with your name on it. You made one change and watched it go live automatically.

---

## Prerequisites

Before you start, confirm these are working. You set all of these up in earlier modules.

Open your terminal and run each command. If any of them fail, go back to the module that covers it before continuing.

```
node --version
```
You should see something like `v20.11.0` or `v22.x.x`. Any version 18 or higher is fine. If you see "command not found," you need to install Node.js first. Go to https://nodejs.org and download the LTS version. Run the installer, then try again.

```
claude --version
```
You should see a version number. This means Claude Code is installed (Module 1).

```
code --version
```
You should see a version number. This means VS Code is installed (Module 1).

Check that you have a GitHub account by going to https://github.com in your browser. You should be able to sign in. If you don't have an account, create one now (it's free).

**All four checks pass?** Great. Keep going.

---

## Step 1: Create a Vercel Account

Vercel is a hosting service. It takes your code from GitHub and turns it into a live website. It's free for personal projects.

1. Open your browser and go to **https://vercel.com**

2. Click **Sign Up** (top right corner)

3. Choose **Continue with GitHub**. This will ask you to authorize Vercel to access your GitHub account. Click **Authorize**.

4. After signing in, you'll land on the Vercel dashboard. It's a mostly empty page with a "Create a New Project" button (or similar). That's fine. You don't need to create anything here yet.

**Verify:** You can see the Vercel dashboard. There's a navigation bar at the top with your GitHub profile picture. You're signed in.

> **Time check:** If you've been going for about 3 minutes, you're on pace.

---

## Step 2: Create a Supabase Account

Supabase is a database service. If your prototype needs to store data (user responses, form submissions, anything like that), Supabase handles it. Even if you don't end up using a database in Week 2, having the account ready means you won't lose time setting it up during the live session.

1. Open your browser and go to **https://supabase.com**

2. Click **Start your project** (or **Sign Up**)

3. Choose **Continue with GitHub**. Authorize the connection, just like you did with Vercel.

4. Once you're signed in, you'll see the Supabase dashboard. Click **New Project**.

5. You'll be asked to fill in a few things:
   - **Project name:** Type `bootcamp-prototype` (or any name you want, this doesn't matter much)
   - **Database password:** Click the **Generate a password** button. Supabase will create a strong password for you. You don't need to memorize this. Copy it and save it somewhere safe (a notes app, a password manager, anywhere you won't lose it). You'll need it later if you connect your prototype to the database.
   - **Region:** Pick the one closest to you. If you're in the US, choose **East US (Virginia)** or **West US**. If you're not sure, East US is fine.

6. Click **Create new project**. It will take about 30-60 seconds to set up.

7. Once it's ready, you'll see your project dashboard. Look for two values you'll need later:
   - **Project URL** (looks like `https://abcdefgh.supabase.co`)
   - **API Key / anon key** (a long string of letters and numbers)

   To find these: click **Settings** (gear icon) in the left sidebar, then click **API**. You'll see both values on that page.

   You don't need to copy these now. Just confirm you can find them. You'll come back here in Week 2 if you need them.

**Verify:** You have a Supabase project created. You can see the project dashboard with a green "healthy" status indicator. You know where to find your Project URL and API key.

> **Time check:** If you've been going for about 8 minutes, you're on pace.

---

## Step 3: Create Your First Project

Now you're going to create a small web app on your computer, make sure it runs locally, and then deploy it to Vercel so it's live on the internet.

### 3a. Create the project

Open your terminal. Navigate to your course workspace folder (the one you created in Module 2):

```
cd ~/pm-workspace
```

If you used a different folder name, use that instead. Not sure? Run `ls ~` to see your home directory and look for your course folder.

Now run this command to create a new project:

```
npx create-next-app@latest my-first-prototype
```

The terminal will ask you a series of questions. Here's what to answer for each one:

```
Would you like to use TypeScript? » Yes
Would you like to use ESLint? » Yes
Would you like to use Tailwind CSS? » Yes
Would you like your code inside a `src/` directory? » No
Would you like to use App Router? » Yes
Would you like to use Turbopack for next dev? » Yes
Would you like to customize the import alias? » No
```

Just press the arrow keys to select Yes or No, then press Enter. If you accidentally pick the wrong answer, don't worry. It won't break anything. These are just configuration preferences.

The setup will take 30-60 seconds. You'll see it downloading packages and setting things up. When it's done, you'll see a message like "Success! Created my-first-prototype."

> **Don't panic:** If you see a lot of text scrolling by, that's normal. It's installing the packages your project needs. Wait for it to finish. You'll know it's done when you see your terminal prompt again (the `$` or `%` sign where you type).

### 3b. Open it in VS Code

```
cd my-first-prototype
code .
```

VS Code will open with your new project. You'll see a file tree on the left with folders like `app/`, `public/`, and files like `package.json`.

### 3c. Run it locally

Back in your terminal (make sure you're inside the `my-first-prototype` folder), run:

```
npm run dev
```

You'll see output that includes a line like:

```
- Local: http://localhost:3000
```

Open your browser and go to **http://localhost:3000**

You should see the default Next.js starter page. It has the Next.js logo and some text about getting started. The exact design may vary depending on the version, but you should see a page, not an error.

**Verify:** You see a page at localhost:3000 in your browser. It loaded without errors.

> **Don't panic:** If you see an error in the terminal or a blank page, try these things:
> 1. Make sure you're in the right folder. Run `pwd` in your terminal. It should end with `/my-first-prototype`.
> 2. Make sure nothing else is using port 3000. If you see "Port 3000 is already in use," close any other terminal tabs that might be running a dev server, then try `npm run dev` again.
> 3. Try opening `http://localhost:3000` in a different browser.

Now stop the local server by pressing **Ctrl+C** in your terminal. You'll need the terminal free for the next steps.

> **Time check:** If you've been going for about 15 minutes, you're on pace.

---

## Step 4: Push to GitHub

Your project is on your computer, but Vercel needs it on GitHub to deploy it. You're going to create a GitHub repository and push your code there.

### 4a. Create a repository on GitHub

1. Go to **https://github.com/new** in your browser
2. **Repository name:** `my-first-prototype`
3. **Description:** Leave blank or type anything (e.g., "Maven bootcamp project")
4. **Visibility:** Public is fine. Private also works.
5. **Do NOT check** "Add a README file" or any of the other boxes. Your project already has these files.
6. Click **Create repository**

You'll see a page with setup instructions. Look for the section that says **"...or push an existing repository from the command line."** You'll use those commands in the next step.

### 4b. Push your code

Back in your terminal, make sure you're in the `my-first-prototype` folder. Then run these commands one at a time:

```
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/my-first-prototype.git
```

Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username. For example, if your username is `janepm`, the command would be:

```
git remote add origin https://github.com/janepm/my-first-prototype.git
```

> **Tip:** You can copy the exact URL from the GitHub page you're looking at. It's right there in the instructions.

Now push the code:

```
git push -u origin main
```

If this is your first time pushing to GitHub from the terminal, it may ask you to sign in. Follow the prompts. If it asks you to authenticate via browser, click the link and authorize.

> **Don't panic:** If you see "error: remote origin already exists," that means the remote was already set up. Run `git remote set-url origin https://github.com/YOUR-GITHUB-USERNAME/my-first-prototype.git` instead, then try the push again.

> **Don't panic:** If you see "error: src refspec main does not match any," your default branch might be called `master` instead of `main`. Try `git push -u origin master` instead.

**Verify:** Go back to your GitHub repository page in the browser and refresh. You should see your project files listed (folders like `app/`, files like `package.json`). If you see files, your code is on GitHub.

---

## Step 5: Deploy to Vercel

Now you're going to connect your GitHub repository to Vercel so it becomes a live website.

1. Go to **https://vercel.com/new** (or click "Add New Project" from your Vercel dashboard)

2. You'll see a list of your GitHub repositories. Find **my-first-prototype** and click **Import**.

   If you don't see it, click **Adjust GitHub App Permissions** and grant Vercel access to the repository.

3. On the configuration page, you don't need to change anything. The defaults are correct for a Next.js project. Just click **Deploy**.

4. Vercel will build and deploy your project. This takes 30-90 seconds. You'll see a progress indicator and build logs scrolling by.

5. When it's done, you'll see a "Congratulations!" screen with a preview of your site and a URL like `my-first-prototype-abc123.vercel.app`.

6. Click that URL. Your site is live on the internet.

**Verify:** You can see your site at the Vercel URL. It shows the same page you saw at localhost:3000. Anyone with the link can see it.

> **Don't panic:** If the build fails, the most common cause is a typo in a file. Click "View Build Logs" on Vercel to see the error. If you can't figure it out, take a screenshot of the error and post it in the course Slack channel. We'll help.

> **Time check:** If you've been going for about 22 minutes, you're on pace.

---

## Step 6: Make a Change and Watch It Auto-Deploy

This is the part that makes it feel real. You're going to change something on your site, push it to GitHub, and watch Vercel automatically update the live URL.

### 6a. Start Claude Code

Open your terminal, make sure you're in the `my-first-prototype` folder, and start Claude Code:

```
claude
```

### 6b. Ask Claude to change the page

Type this prompt (or something like it):

```
Open app/page.tsx and replace all the content inside the return statement with a simple page that has my name as a heading and one sentence about what I do. Use the name "YOUR NAME" and whatever sentence you want. Keep it simple - just a centered heading and a paragraph.
```

Claude will edit the file for you. Review the change and approve it.

### 6c. Check it locally (optional)

If you want to see the change before pushing, open a new terminal tab, navigate to your project folder, and run `npm run dev`. Then check localhost:3000.

### 6d. Push the change

Exit Claude Code by typing `/exit`. Then in your terminal:

```
git add app/page.tsx
```

```
git commit -m "Personalize the home page"
```

```
git push
```

### 6e. Watch the auto-deploy

Go to your Vercel dashboard (https://vercel.com). You'll see a new deployment in progress for your project. It takes about 30-60 seconds. When it's done, refresh your live URL.

**Verify:** Your live URL now shows your name and your sentence, not the default Next.js starter page. You changed code on your laptop and it's live on the internet.

> **Time check:** If you've been going for about 28 minutes, you're right on target. Nice work.

---

## Verification Checklist

Go through this list. Every item should be true.

- [ ] I can run `node --version` and see a version number (v18 or higher)
- [ ] I have a Vercel account connected to my GitHub
- [ ] I have a Supabase account with one project created
- [ ] I know where to find my Supabase Project URL and API key
- [ ] I have a live URL on Vercel showing my personalized page
- [ ] I pushed a change and it auto-deployed to my live URL

**If all six boxes are checked:** You're ready for Week 2. You have a working pipeline from your laptop to a live website. In the live session, we'll use this pipeline to build something real from a spec.

**If any box is unchecked:** Post in the course Slack channel with what's not working. Include a screenshot of the error if you have one. You can also bring it to the troubleshooting session (Sunday 3-4pm ET before Week 2) or office hours (Wednesday 7-8pm ET).

---

## Troubleshooting FAQ

### "npm: command not found" or "npx: command not found"

Node.js isn't installed, or your terminal can't find it. Go to https://nodejs.org, download the **LTS** version, and run the installer. After installing, close your terminal completely and open a new one before trying again. The new terminal needs to pick up the updated PATH.

### "Permission denied" when running npm commands

On Mac, try putting `sudo` in front of the command:
```
sudo npm install -g create-next-app
```
It will ask for your computer password (the one you use to log in). Type it and press Enter. You won't see the characters as you type. That's normal.

If you keep hitting permission issues, the Node.js docs have a guide for fixing npm permissions: https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally

### "Port 3000 is already in use"

Something else is using that port. Either close the other program, or run your dev server on a different port:
```
npm run dev -- --port 3001
```
Then go to http://localhost:3001 instead.

### Vercel build fails

Click **View Build Logs** on the Vercel deployment page. Look for the first line in red. Common causes:
- A missing file that got deleted accidentally. Check your GitHub repo to make sure all files are there.
- A typo in code that Claude edited. Open the file Claude changed and look for anything obviously wrong.
- If the error says "Module not found," you may need to run `npm install` in your project folder and push again.

### "fatal: remote origin already exists" when adding GitHub remote

The remote was already configured. Replace it instead:
```
git remote set-url origin https://github.com/YOUR-USERNAME/my-first-prototype.git
```

### "I pushed but Vercel didn't redeploy"

Check your Vercel dashboard. If the project shows "No deployments," the GitHub connection may not be set up. Go to your project settings in Vercel and reconnect the GitHub repo.

### "I'm completely stuck and nothing is working"

That's okay. This happens. Here's what to do:
1. Take a screenshot of whatever error you're seeing
2. Post it in the course Slack channel with a quick description of what step you're on
3. If you want real-time help, come to office hours (Wednesday 7-8pm ET) or the troubleshooting session (Sunday 3-4pm ET before Week 2)

We will get you unstuck. Setup problems are normal, even for experienced developers. They're not a sign that you can't do this.

---

## What's Next

In Week 2, you'll use this exact setup to build a real prototype from a spec. You'll write a spec using the interview technique, then have Claude Code build it, and deploy it to your live URL.

Don't worry about making your page pretty or adding features right now. The point of this module was one thing: **you have a working pipeline from your laptop to a live URL.** That's the foundation everything else builds on.

See you in Week 2.
