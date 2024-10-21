type Pop = {
	desc: string;
	geo: [number, number],
	partners: number;
	tier: number;
	relays: Relay[];
}

type Relay = {
	ipv4: string;
	port_range: number[]
}

export type SteamServerResponse = {
	revision: number;
	pops: {
		[key:string]: Pop;
	}
}