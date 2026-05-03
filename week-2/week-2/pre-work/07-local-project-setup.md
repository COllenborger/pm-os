# Local Project Setup for Week 2

**Required. Complete before the Sunday session. 15-20 min.**

Week 2 runs entirely locally. No cloud services are required for the core flow: you will build a clickable prototype on your laptop and run evals with a small Python script that shells out to Claude Code. Vercel and Supabase are an optional stretch covered in `build-environment.md` if you want to deploy your prototype later, but you do not need them to complete the session or the practice assignment.

This doc covers the four things that must be true before you sit down Sunday: Claude Code works, Python 3 is installed, your Week 2 project folder exists, and you know where your Week 1 artifacts live.

## 1. Verify Claude Code is working

Open a terminal and run:

```
claude --version
```

You should see a version number. If the command is not found, go back to the pre-course Module 1 setup and reinstall Claude Code. Do this before anything else in this doc.

## 2. Verify Python 3 is installed

You will use Python in the workshop to run the eval script. The script is short (we walk through it in video 3 and during the session) and does not require any extra libraries. Run:

```
python3 --version
```

You should see `Python 3.x.x` with x of 9 or higher. If the command is not found:

- **Mac:** install via Homebrew with `brew install python3`. If you do not have Homebrew, get it at https://brew.sh first.
- **Windows:** download the latest Python 3 installer from https://python.org. During install, check the "Add Python to PATH" box. Close and reopen your terminal after install.

## 3. Set up your project folder structure

You run Claude Code from one parent folder — your PM operating system root — and all weekly work lives in subfolders inside it. If you set this up in the pre-course or Week 1, you already have it. If not, create it now.

In the commands below, replace `[your-project-workspace]` with whatever you named your folder (e.g. `pm-os`, `claude-course`, `my-pm-workspace`).

```
mkdir -p ~/[your-project-workspace]/week-2
```

Your structure should look like this:

```
~/[your-project-workspace]/          ← always run Claude Code from here
  CLAUDE.md              ← your PM OS context file (from pre-work)
  week-1/                ← your Week 1 artifacts live here
  week-2/                ← Week 2 work goes here
    scripts/
      run-evals.py       ← download from Maven and place here
```

You always open Claude Code in `~/[your-project-workspace]/`, not inside a week subfolder. This keeps your skills, your CLAUDE.md context, and your cross-week references all available in every session.

Download `run-evals.py` from the Maven lesson and place it at `~/[your-project-workspace]/week-2/scripts/run-evals.py`. Verify it is there:

```
ls ~/[your-project-workspace]/week-2/scripts/
```

You should see `run-evals.py` listed. If the `scripts/` folder does not exist yet, create it: `mkdir -p ~/[your-project-workspace]/week-2/scripts/`.

## 4. Find your Week 1 artifacts

This is the single biggest friction point in the pre-work. If you cannot find your Week 1 work on Sunday morning, you cannot write your PRD.

You need three things from Week 1 ready to reference during pre-work:

- Your competitive analysis
- Your user interview synthesis (from the interview transcript or your own interviews)
- Your survey signal notes or ticket-trends synthesis

If you followed the Week 1 practice assignment as written, these live in whatever folder you used for `week-1-research/` work. If not, move or copy the relevant files into a single folder you can point Claude Code at. The pre-work doc `pre-work/build-your-prd-skill.md` assumes you can point your `prd-from-research` skill at this folder or paste content from these artifacts into Claude Code. Make that easy for yourself now, not at 3pm Sunday.

If you did not complete Week 1 in full, you can still run Week 2 on the TaskFlow sample data. The Week 1 sample artifacts (`week-1-research/sample-data/`) plus `taskflow-scenario.md` and `sarah-example-prd.md` give you everything you need to follow Sarah's journey through the workshop. Make a note of which path you are taking.

## Quick verification

Tick these before calling setup done:

- [ ] `claude --version` returns a version number
- [ ] `python3 --version` returns 3.9 or higher
- [ ] `~/[your-project-workspace]/` exists and has a `CLAUDE.md` at the root
- [ ] `~/[your-project-workspace]/week-2/scripts/run-evals.py` exists
- [ ] I can name the exact folder or file paths where my Week 1 artifacts (or the sample data) live

All four checked? You are set. Move on to the rest of the pre-work.

## If something is not working

- **First try:** close the terminal completely and reopen it. PATH issues after fresh installs are the most common culprit.
- **Second try:** re-check Module 1 of the pre-course setup. It covers Claude Code install from scratch.
- **Still stuck:** bring it to Wednesday office hours (7-8pm ET) or post in the Circle community. Include the exact command you ran and the exact error message. Setup issues are normal and fast to fix with one eye on your screen.
