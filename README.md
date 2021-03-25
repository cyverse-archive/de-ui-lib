This repo serves as a common React component and util library for CyVerse's Discovery Environment user interfaces, such as the [Discovery Environment](https://github.com/cyverse-de/ui/) and [VICE](https://github.com/cyverse-de/interapps-landing).

### Publishing to npm registry

Once your PR is accepted, Please merge your branch with `master` from your command-line and update the version. Then push your commits to `master`. This will trigger the workflow to build, run test and publish. All other steps listed under Development Workflow are optional.

### `npm run deploy-storybook`

This will deploy any changes or updates to our components' code and stories to GitHub pages for users to see and test the functionality of the components.

## Development Workflow

In the project directory, you can run:

### `npm install`

Installs the project's dependencies.

### `npm run storybook`

Launches the [Storybook](https://storybook.js.org/) application for fast development and debugging.
Generally, for any component in ui-lib there should be a story. Stories are also used to run the tests.

### `npm test`

Launches the test runner in the interactive watch mode. All tests should pass before creating a merge request.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm version patch | minor | major`

Once you've merged your changes, this will bump the version number of the project. Note: merge you changes from command-line only

Generally:

-   `patch` is used for backwards-compatible bug fixes.
-   `minor` is used when you add functionality in a backwards-compatible manner.
-   `major` is used when you make incompatible changes

### `git push --tags`

After pushing the version bump created with `npm version`,
you'll need to also push the new version's tag.
The `git push` command will only push the file changes created by `npm version`,
but it will not push tags.

In order to add the new tag to the public repo,
you can use the command `git push --tags`.
This will push all tags in your local repo to the public repo
(if they're not already there).

If you have other local tags that you don't want to push to the public repo,
then you can push only the tag created by `npm version` with a command like
`git push origin <new-tag-name>`;
or if you've named your local fork of the public repo `upstream`, then
`git push upstream <new-tag-name>`.

(This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).)
