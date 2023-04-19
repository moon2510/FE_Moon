## Projects initialization

```
    yarn
    yarn prepare
    yarn dev
```

## Check Format

```
    yarn format
```

## Fix Format

```
    yarn format:fix
```

# Workflow & commit rules

1.  Create a new branch for the task you want to work on:
    a. To create a branch instead, use the following scheme: <type>/<yourname>/<description>.
    b. <type> has feature or bugfix, <description> is text and all of them is lowercase.
    c. Example: `feature/nguyet/create-header` or `bugfix/nguyet/fix-responsive-header`.

2.  Format code with script `yarn format` or `npm run format`

3.  When you commit new code to your branch, include the description in the commit message.
    Example: `<type>: <description>`

4.  Then submit a pull request to dev with title `<yourname> - <description>`.

5.  Assign another member to test this task.

6.  Then pull request will be reviewed by mentor.

7.  Done task.
