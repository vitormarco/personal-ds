module.exports = {
  // this will check Typescript files
  'src/**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  // This will lint and format TypeScript and                                             //JavaScript files
  'src/**/*.(ts|tsx|js)': filenames => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],

  // this will Format MarkDown and JSON
  'src/**/*.(md|json)': filenames =>
    `yarn prettier --write ${filenames.join(' ')}`,

  'src/**/*.(ts|tsx)': () => 'yarn test --run',
}
