/**
 * Grunt default task to build the application and set watchers.
 */
module.exports = function (grunt) {
	grunt.registerTask('default', ['clean:build', 'less:compressStyles', 'concurrent:runServer']);
};
