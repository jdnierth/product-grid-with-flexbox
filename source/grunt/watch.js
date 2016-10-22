/**
 * Grunt task that watches file changes.
 */
module.exports = {
    styles: {
        files: ['styles/less/**/*.less'],
        tasks: ['less:compressStyles'],
        options: {
            nospawn: false
        }
    }
};
