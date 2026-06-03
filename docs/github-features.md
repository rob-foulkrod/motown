# GitHub Features

While **Git** tracks your code locally, **GitHub** is the cloud platform that hosts
your repositories and adds collaboration features on top. Here are the GitHub
features we explore in class.

## Repositories

A **repository** (or "repo") is where your project lives on GitHub. It holds your
code, its full history, and project settings. Repos can be **public** (visible to
everyone) or **private** (visible only to people you choose).

## Issues

**Issues** are how you track work: bugs to fix, features to build, or questions to
answer. Each issue has a title, a description, and a discussion thread. You can
assign issues to people, add **labels** (like `bug` or `documentation`), and group
them into **milestones**.

## Pull Requests

A **pull request (PR)** proposes changes from one branch into another (usually into
`main`). It is the heart of collaboration on GitHub:

1. You push a branch with your changes.
2. You open a pull request describing what you changed and why.
3. Teammates **review** the code, leave comments, and request changes.
4. Once approved, the PR is **merged**, bringing your changes into the main branch.

!!! tip "Link issues and PRs"
    Writing `Closes #12` in a pull request description tells GitHub to
    automatically close issue #12 when the PR is merged.

## Code Review

GitHub's review tools let teammates comment on specific lines, suggest edits, and
approve or request changes before code is merged. This keeps quality high and
spreads knowledge across the team.

## Forks

A **fork** is your own personal copy of someone else's repository under your
account. Forks are commonly used to contribute to open-source projects: you fork
the project, make changes in your copy, and open a pull request back to the
original.

## GitHub Actions

**GitHub Actions** is GitHub's built-in automation and CI/CD system. You describe
**workflows** in YAML files stored under `.github/workflows/`. A workflow runs
automatically in response to events — such as a push, a pull request, or a
schedule — and can build, test, and deploy your project.

This very site is published by a GitHub Actions workflow: every push to `main`
triggers a job that builds the documentation and deploys it to GitHub Pages.

```yaml
# A workflow is triggered by events like a push to main
on:
  push:
    branches: [main]
```

## GitHub Pages

**GitHub Pages** is free static website hosting built right into GitHub. It can
serve a personal site, a project site, or — as we do here — project documentation.

In this project, GitHub Pages is fed by GitHub Actions:

1. The documentation is written in Markdown in the `docs/` folder.
2. A push to `main` triggers the **Deploy Docs** workflow.
3. The workflow builds the Markdown into a static website with MkDocs.
4. The built site is published to GitHub Pages and becomes available at the
   project's Pages URL.

!!! note "Enabling Pages"
    In the repository's **Settings → Pages**, set the **Source** to
    **GitHub Actions**. The workflow in this repo takes care of the rest.

## Putting it all together

A typical class workflow that uses these features end to end:

1. Open an **issue** describing the work.
2. Create a **branch** and make your changes.
3. **Push** the branch and open a **pull request**.
4. A teammate **reviews** and approves it.
5. **Merge** the PR into `main`.
6. **GitHub Actions** automatically builds and deploys the updated site to
   **GitHub Pages**.
