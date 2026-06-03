# Motown Git & GitHub Class

Welcome! This site is the companion reference for our **Git & GitHub class**. It is
published with [GitHub Pages](https://pages.github.com/) and built from Markdown
using [MkDocs](https://www.mkdocs.org/) with the
[Material](https://squidfunk.github.io/mkdocs-material/) theme.

## What you will find here

<div class="grid cards" markdown>

- :material-console: **[Git Commands](git-commands.md)**

    A friendly reference for the everyday Git commands, explained with examples.

- :material-github: **[GitHub Features](github-features.md)**

    An overview of the GitHub features we use in class, from pull requests to
    GitHub Pages.

</div>

## How this site is built

This documentation lives in the [`docs/`](https://github.com/rob-foulkrod/motown/tree/main/docs)
folder of the repository. Every time changes are pushed to the `main` branch, a
[GitHub Actions](github-features.md#github-actions) workflow builds the site and
deploys it to GitHub Pages automatically — no manual steps required.

!!! tip "Try it yourself"
    Editing the Markdown files in `docs/` and pushing a commit is a great way to
    practice the full Git + GitHub workflow. Watch the Actions tab to see your
    change deploy live!

## Run the docs locally

You can preview the site on your own machine before pushing:

```bash
# Install the tools (one time)
pip install -r requirements.txt

# Start a live-reloading preview at http://127.0.0.1:8000
mkdocs serve
```

Any change you save is reflected instantly in your browser.
