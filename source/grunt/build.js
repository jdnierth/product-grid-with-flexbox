/**
 * Created by Ozren.Srzich on 9/08/2016.
 * Grunt default task to build the application and set watchers.
 */
module.exports = function (grunt) {
	grunt.registerTask('build', ['clean:build', 'concurrent:dist']);
};
