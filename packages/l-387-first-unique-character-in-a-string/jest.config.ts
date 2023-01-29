/* eslint-disable */
export default {
  displayName: 'l-387-first-unique-character-in-a-string',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory:
    '../../coverage/packages/l-387-first-unique-character-in-a-string',
};
