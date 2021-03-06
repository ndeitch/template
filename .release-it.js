module.exports = {
  git: {
    commitMessage: 'chore(release): v${version}',
    requireUpstream: false,
    requireCleanWorkingDir: false,
  },
  github: {
    release: true,
  },
  npm: {
    publish: true,
  },
  plugins: {
    '@release-it/conventional-changelog': {
      preset: {
        name: 'conventionalcommits',
        types: [
          {
            type: 'feat',
            section: 'Features ๐',
          },
          {
            type: 'feature',
            section: 'Features ๐',
          },
          {
            type: 'fix',
            section: 'Bug Fixes ๐',
          },
          {
            type: 'perf',
            section: 'Performance Improvements ๐ณ',
          },
          {
            type: 'revert',
            section: 'Reverts ๐ฉ',
          },
          {
            type: 'docs',
            section: 'Documentation ๐',
          },
          {
            type: 'style',
            section: 'Styles ๐๐ป',
          },
          {
            type: 'chore',
            section: 'Miscellaneous Chores ๐งฐ',
          },
          {
            type: 'refactor',
            section: 'Code Refactoring ๐จ',
          },
          {
            type: 'test',
            section: 'Tests ๐งช',
          },
          {
            type: 'build',
            section: 'Build System ๐ ',
          },
          {
            type: 'ci',
            section: 'Continuous Integration ๐ค',
          },
        ],
      },
      infile: 'CHANGELOG.md',
    },
  },
}
