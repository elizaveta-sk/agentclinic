---
name: changelog
description: Create or update CHANGELOG.md in the project root, with one heading per date and reader-friendly bullets summarizing the git commits made on that date. Run manually before merging a branch.
disable-model-invocation: true
---

# Changelog

Keep `CHANGELOG.md` in the repository root up to date from git history. The changelog is for people reading about the project (course students, demo audiences, teammates), so each bullet should say what changed in plain language, not repeat a commit message.

This runs before a branch is merged, so the goal is: every commit on the current branch is reflected in the changelog, nothing is listed twice, and the update is ready to go in with the merge.

## File format

```markdown
# Changelog

All notable changes to this project, newest first.

<!-- changelog-last-commit: <full SHA of the newest commit covered> -->

## 2026-10-20

- Made the web UI responsive, from 320px phones up to wide desktops.
- Added Vitest tests for the home page, the layout components, and project settings; run them with `npm test`.

## 2026-10-19

- ...
```

- One `## YYYY-MM-DD` heading per date, newest date first. Use the commit's author date in the local time zone (`git log --date=short`).
- Bullets under each date, most significant change first.
- The `changelog-last-commit` comment records the newest commit the changelog covers. It's how the next run knows where to pick up, so always update it. It's an HTML comment, so it doesn't show when the Markdown is rendered.

## Steps

### 1. Find the repo and the changelog

Run `git rev-parse --show-toplevel` and work with `CHANGELOG.md` there. Run `git status --short`: if there are uncommitted changes other than `CHANGELOG.md`, tell the user they won't be in the changelog until they're committed, and ask whether to continue or let them commit first. Changelog entries describe commits, and uncommitted work may still change.

### 2. Work out which commits are new

- **No `CHANGELOG.md` yet:** every commit reachable from `HEAD` is new. This builds the changelog from the whole history.
- **`CHANGELOG.md` exists:** read the `changelog-last-commit` SHA.
  - If it's an ancestor of `HEAD` (`git merge-base --is-ancestor <sha> HEAD`), the new commits are `git log <sha>..HEAD`.
  - If the marker is missing, or the SHA isn't an ancestor (history was rebased or squashed), fall back to comparing content: list recent commits and leave out any whose change is already described under its date. Tell the user you had to fall back.

List the new commits with dates and enough detail to understand them:

```bash
git log --reverse --date=short --format='%H %ad %s%n%b' <range>
git show --stat <sha>   # when a subject alone doesn't explain the change
```

Leave out commits that don't change the project for a reader: merge commits, and commits that only touch `CHANGELOG.md` (those are earlier runs of this skill).

If no commits are new, say the changelog is already up to date and stop.

### 3. Write the bullets

Group the new commits by date, then for each date write bullets that a reader would care about:

- **Summarize, don't transcribe.** Several commits about one feature become one bullet. A vague subject ("Added CSS", "wip", "fixes") needs a look at `git show --stat` to describe what actually changed. Trust the diff over the message when they disagree.
- **Say what changed and why it matters**, in past tense, one line each: "Added a main layout with a header, content area, and footer on every page." Mention a command or file name only when the reader would use it (`npm test`, `npm start`).
- **Skip noise** such as typo fixes, formatting-only changes, and reverted experiments, unless that's all that happened on a date.
- **Keep it honest.** Describe only what the commits contain. Don't add changes you expect or that are still in progress.

### 4. Update the file

- **New file:** write the title, the one-line intro, the marker, and a section per date, newest first.
- **Existing file:** add the new bullets without rewriting history.
  - If a date already has a heading, add the new bullets to that section rather than creating a second heading for the same date.
  - Otherwise add a new `## YYYY-MM-DD` section in the right place, keeping newest first.
  - Leave existing bullets alone. Someone may have edited them by hand.
- Set `changelog-last-commit` to the full SHA of `HEAD`.

### 5. Report back

Show the user the sections you added or changed and say how many commits they cover. Leave `CHANGELOG.md` uncommitted so they can review or edit it, then offer to commit it on the current branch (for example, "Update changelog") before they merge. Because the marker points at `HEAD` and changelog-only commits are skipped, committing the changelog won't make it show up as a new change next time.
