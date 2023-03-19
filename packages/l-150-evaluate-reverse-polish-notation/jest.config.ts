/* eslint-disable */
export default {
  displayName: 'l-150-evaluate-reverse-polish-notation',
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
    '../../coverage/packages/l-150-evaluate-reverse-polish-notation',
};
