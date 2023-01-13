/* eslint-disable */
export default {
  displayName: 'l-102-binary-tree-level-order-traversal',
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
    '../../coverage/packages/l-102-binary-tree-level-order-traversal',
};
