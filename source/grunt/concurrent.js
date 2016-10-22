/**
 * Concurrent setup: Any tasks that have to run in chains.
 */
module.exports = function (grunt) {
	return {
		dev: {
			tasks: ['connect:dev', 'watch:styles', 'watch:templates'],
			options: {
				logConcurrentOutput: true
			}
		},
		dist: {
			tasks: ['less:dist', 'copy:sources', 'ngtemplates:compile', 'requirejs:dist', 'connect:dist'],
			options: {
				logConcurrentOutput: false
			}
		}
	}
};
