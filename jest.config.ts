import type { Config } from 'jest'
const nextJest = require('next/jest')

const createJestConfig = nextJest({
	dir: './',
})

const config: Config = {
	coverageProvider: 'v8',
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	preset: 'ts-jest',
	moduleNameMapper: {
		'^services(.*)$': '<rootDir>/src/services$1',
		'^commons(.*)$': '<rootDir>/src/commons$1',
		'^models/(.*)$': '<rootDir>/src/models/$1',
		'^utils(.*)$': '<rootDir>/src/utils$1',
	},
	resolver: undefined,
}

module.exports = createJestConfig(config)
