const blockRuleName = 'cs2-relay';

export const getRuleName = (serverPop: string) => {
	return [blockRuleName, serverPop].join('-');
}

export const getUnblockCommand = (serverPop:string) => {
	return ['advfirewall', 'firewall', 'delete', 'rule', `name=${getRuleName(serverPop)}`];
}

export const getBlockCommand = (serverPop: string, ip: string) => {
	return ['advfirewall', 'firewall', 'add', 'rule', `name=${getRuleName(serverPop)}`, 'dir=out', 'action=block', 'protocol=ANY', `remoteip=${ip}`];
}

export enum COLOR {	
	FgGreen = "\x1b[32m%s\x1b[0m",
	FgYellow = "\x1b[33m%s\x1b[0m",
	FgCyan = "\x1b[36m%s\x1b[0m",
	FgRed = "\x1b[31m%s\x1b[0m"
}