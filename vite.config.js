import { defineConfig } from 'vite';
import { ripple } from 'vite-plugin-ripple';

export default defineConfig({
	plugins: [ripple()],
	server: {
		port: 3000,
	},
	build: {
		target: 'esnext',
	},
	resolve: process.env.VITEST ? { conditions: ['browser'] } : undefined,
  test: {
		include: ['tests/*.test.ts','tests/*.test.ripple'],
		deps: {
			inline: ['ripple'],
		},
		environment: 'jsdom',
		setupFiles: ['tests/setup-client.js'],
  },
});
