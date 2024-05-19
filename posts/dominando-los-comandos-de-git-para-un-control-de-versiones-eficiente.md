---
title: Mastering Git commands for efficient version control
summary: Explore essential Git commands and master version control in your development projects. Learn how to initialize repositories, clone, add, commit and more.
date: September 7, 2023
tags: Git
---

Git is a distributed version control system created by <a href="https://git-scm.com/book/en/v2/Getting-Started-A-Short-History-of-Git" target="_blank">Linus Torvalds in 2005</a> and has become an essential tool in any developer's toolbox. It allows you to efficiently manage and version control your code, which is essential in any collaborative or individual programming project. In this article, we will explore the key concepts of Git and learn some essential commands.

## Basic Git commands

### 1. git-init

This command is used to initialize a Git repository in an empty directory or to convert an existing directory into a Git repository.

```bash
git init
```

### 2. git-clone

This command is used to create a local copy of a remote repository. This is useful when you want to collaborate on existing projects or when you need to work on different machines.

```bash
git clone https://github.com/usuario/repo.git
```

### 3. git add

Before committing changes to Git, you must use this command to add the modified files to the staging area.

You can specify individual files you want to add using:

```bash
git add file1.txt file2.js

```

or you can add all modified files in the current directory using:

```bash
git add .
```

### 4. git commit

Once you have added the changes to the staging area, this command commits the changes to the repository. You must include a descriptive message explaining the changes made.

```bash
git commit -m “Added new features”
```

### 5. git status

Displays the current status of the files in your repository. This allows you to see which files have changed and if they are in the staging area.

```bash
git status
```

### 6. git log

It shows you the commit log in your repository. You can see the complete history of the project, including who did what and when.

```bash
git log
```

## Branches and collaboration

Git facilitates teamwork and development in independent branches. These commands are essential for collaboration:

### 1. git branch

With this command you can see a list of branches in your repository. Branches are useful for working on features or bug fixes without affecting the main branch.

Para crear una nueva rama llamada _nueva-funcionalidad_:

```bash
git branch new-functionality
```

To remove the _new-functionality_ branch we use _-d_:

```bash
git branch -d new-functionality
```

Note that Git will not allow you to delete a branch if you have unmerged changes in that branch. If you want to force the removal of an unmerged branch, you can use the _-D_ option instead of _-d_. However, be careful when doing so, as you will lose all changes that have not yet been merged.

```bash
git branch -D branch-with-unmerged-changes
```

### 2. git checkout

Allows you to switch between branches or previous versions. You can use this command to explore different points in history or to work on a specific branch.

To switch to the _new-functionality_ branch:

```bash
git checkout new-functionality
```

We can also use this command to create a new branch and switch to it at the same time:

```bash
git checkout -b new-branch-created
```

### 3. git merge

This command allows you to merge one branch with another. For example, if you want to merge the _new-functionality_ branch with the _main_ branch, you must first switch to the _main_ branch and then execute the _merge_ command:

```bash
git checkout main
git merge new-functionality
```

### 4. git pull

This command allows you to merge changes from a remote repository into your local repository. It is useful when you are working on a collaborative project and want to update your local repository with the changes of your colleagues.

In this context, _origin_ is the name commonly used to refer to the default remote repository. main\_ is the name of the branch in the remote repository.

```bash
git pull origin main
```

### 5. git push

This command allows you to push changes from your local repository to a remote repository. It is useful when you are working on a collaborative project and want to share your changes with your colleagues.

```bash
git push origin main
```

## Conflict resolution

Git conflicts occur when two people make changes to the same file or lines of code. Git cannot merge the changes automatically and will ask you to resolve the conflicts manually. Here's what you should do:

### 1. git diff

This command allows you to see the differences between two branches or commits. It is useful to see what changes have been made and where they have been made.

```bash
git diff rama1 rama2
```

### 2. git restore

This command allows you to discard changes to a specific file. It is useful when you want to discard changes to a specific file without discarding changes to other files.

```bash
git restore archivo.js
```

### 3. git reset

This command allows you to discard changes to a specific file and remove it from the staging area. It is useful when you want to discard changes to a specific file and remove it from the staging area.

```bash
git reset archivo.js
```

### 4. git stash

This command allows you to temporarily save changes to a specific file. It is useful when you want to temporarily save changes to a specific file without committing them.

```bash
git stash archivo.js
```

### 5. git stash pop

This command allows you to retrieve temporarily saved changes to a specific file. It is useful when you want to retrieve the changes temporarily saved to a specific file.

```bash
git stash pop archivo.js
```

## Extras

### 1. .gitignore

This is a file that is created to ignore files and directories in Git. You can specify patterns of files and folders that Git should ignore when tracking changes.

```bash
# Ignore all text files
*.txt

# Ignore the node_modules directory
node_modules/
```

### 2. Git aliases

Git aliases allow you to create shortcuts for common commands. You can create aliases for commands you use frequently or for commands that are hard to remember.

```bash
# Create a new alias
git config --global alias.s status

# Use the alias
git s
```

Mastering Git commands is essential for any developer. With this guide, you have the basics to effectively manage your code, collaborate on projects and control your change history. Start using Git like a pro and improve your development workflow!
