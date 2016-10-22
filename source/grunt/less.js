/**
 * Less configuration: Compile less to CSS
 */
module.exports = {
    compressStyles: {
        files: {
            'dist/main.min.css': [
                'styles/less/main.less'
            ]
        },
        options: {
            compress: true,
			sourceMap: true
        }
    }
};
