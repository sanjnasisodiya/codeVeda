# Level 1 – Task 1

## Setup Development Environment

This task focuses on setting up a complete full-stack development environment with all essential tools that a beginner developer must know.

---

## Objectives

- Install Node.js and npm/yarn
- Set up Git & GitHub
- Learn basic terminal commands
- Install a database (MongoDB / MySQL / PostgreSQL)
- Configure VS Code for development

---

## 1 Install Node.js & npm/yarn

### Install Node.js (LTS Version)

Download from: https://nodejs.org

Verify installation:

```bash
node -v
npm -v
```

2 Setup Git & GitHub

Install Git
Download from: https://git-scm.com/downloads
Verify:
git --version

Configure Git
git config --global user.name ""
git config --global user.email ""

Basic Git workflow
git init
git add .
git commit -m "Initial commit"

Connect to GitHub
Create a new repo (empty)
Connect:
git branch -M main
git remote add origin repoUrl
git push -u origin main

3 Basic Terminal Commands
Important commands should know
ls -> files list
cd folder -> change directory
mkdir -> create folder
rm file -> delete file
clear -> clear terminal

4 Install a Database
Option A: MongoDB
Install MongoDB Community Server
https://www.mongodb.com/try/download/community

GUI (optional): MongoDB Compass

Option B: MySQL
Install MySQL Server + Workbench
https://dev.mysql.com/downloads/

Option C: PostgreSQL
Install + pgAdmin
https://www.postgresql.org/download/

5 Setup VS Code
Install Extensions:

ES7+ React Snippets

Prettier

ESLint

GitLens

Postman Client (API testing)

Useful Shortcuts:

Ctrl + ~ → Open terminal

Ctrl + P → Quick file search

Ctrl + B → Toggle sidebar

Summary

By completing this task, I have set up:

Node.js + npm/yarn

Git & GitHub

A working database

VS Code environment

Terminal basics

This prepares me for creating APIs, frontends, and full-stack applications in upcoming tasks.
