import subProcess from 'child_process';
import { COLOR, getRuleName, getUnblockCommand } from './util';

const doUnblock = async (serverPop:string) => {
	console.log(COLOR.FgCyan, '=== Unblocking blocklist ===');
	console.log(COLOR.FgGreen, `Unblocking ${getRuleName(serverPop)}`);
	subProcess.spawnSync('netsh', getUnblockCommand(serverPop), {
		cwd: process.cwd(),
		env: process.env,
		stdio: [process.stdin, process.stdout, process.stderr],
		encoding: 'utf-8'
	});
}

const pop = process.argv[2] ?? null;

if(!pop) {
	console.error('No relay server specified');
}else {
	await doUnblock(pop);
}

console.log('Exiting');