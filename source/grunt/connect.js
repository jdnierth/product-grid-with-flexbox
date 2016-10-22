module.exports = function (grunt) {
    return {
        runServer: {
			options: {
				open: true,
				port: 1337,
				base: 'source/',
				keepalive: true,
				hostname: 'localhost'
			}
        }
    };
};
