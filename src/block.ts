import axios from 'axios';
import subProcess from 'child_process';
import { getUnblockCommand, getBlockCommand, COLOR, getRuleName } from './util';
import { SteamServerResponse } from './types';

const relayApiUrl = 'https://api.steampowered.com/ISteamApps/GetSDRConfig/v1/?appid=730';

const pop = process.argv[2] ?? null;

const createBlockRules = async (serverPop: string) => {
	console.log(COLOR.FgCyan, '=== Fetching data ===');
	const response = await axios.get<SteamServerResponse>(
		relayApiUrl,
		{ responseType: 'json' }
	);

	if(response.status === 200) {
		console.log(`200 OK`);
		const { data } = response;
		const relays = data.pops[serverPop]?.relays ?? [];
		if(relays.length === 0) {
			`Couldnt find relays for "${serverPop}"`;
			return;
		}
		console.log(`Found ${relays.length} relays`);
		const ipList = relays.map(relay => relay.ipv4);

		console.log(COLOR.FgCyan, '=== Clearing previous blocklist ===');
		console.log(COLOR.FgGreen, `Unblocking ${getRuleName(serverPop)}`);
		const unblockCmd = getUnblockCommand(serverPop);
		subProcess.spawnSync('netsh', unblockCmd, {
			cwd: process.cwd(),
			env: process.env,
			stdio: [process.stdin, process.stdout, process.stderr],
			encoding: 'utf-8'
		});
		
		console.log(COLOR.FgCyan, '=== Blocking IPs ===');
		console.log(COLOR.FgGreen, `Creating rule(s) for ${getRuleName(serverPop)}`);
		for(const ip of ipList) {
			console.log(COLOR.FgYellow, `Blocking ip: ${ip}`);
			const blockCmd = getBlockCommand(serverPop, ip);
			subProcess.spawnSync('netsh', blockCmd, {
				cwd: process.cwd(),
				env: process.env,
				stdio: [process.stdin, process.stdout, process.stderr],
				encoding: 'utf-8'
			});
		}

	}else {
		console.error(COLOR.FgRed, `Server responded with status code ${response.status}`);
	}
}

if(!pop) {
	console.error(COLOR.FgRed, 'No relay server specified');
}else {
	await createBlockRules(pop);
}
console.log('Exiting');
