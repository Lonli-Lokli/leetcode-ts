/* eslint-disable */
export default {
  displayName: 'l-017-letter-combinations-of-a-phone-number',
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
    '../../coverage/packages/l-017-letter-combinations-of-a-phone-number',
};
