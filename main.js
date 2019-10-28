const enableCloudDebug = process.argv.indexOf("enable-cloud-debug") >= 0;
if (enableCloudDebug) {
	require('@google-cloud/debug-agent').start();
	console.log("Enabled Google Cloud Debug Agent");
} else {
	console.log("Have not enabled Google Cloud Debug Agent");
}

const v8 = require('v8');

function printStats() {
	const stats = v8.getHeapStatistics();
	const MB = 1024 * 1024;
	console.log("node", process.version, "heap_size_limit:", stats.heap_size_limit / MB, "MB", "used_heap_size:", stats.used_heap_size / MB, "MB");
}

arr = []
function allocate() {
	printStats();
	for (var i = 0; i < 1000; i++) {
		for (var j = 0; j < 1000; j++) {
			arr.push(Math.random());
		}
	}
	setTimeout(allocate, 500);
}

allocate();
