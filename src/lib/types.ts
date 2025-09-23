type ServerSpec = {
	location: string
	os: {
		name: string
		version: number
		stability: '(Stable)' | '(Unstable)' | ''
	}
	compute: { cpu: number; ram: number }
	bandwidth: { speed: number; unit: 'Kbps' | 'Mbps' | 'Gbps' }
}

export type Social = {
	platform: string
	url: string
	username: string
}

export type Server = {
	name: string
	specs: `${ServerSpec['location']}, ${ServerSpec['os']['name']} ${ServerSpec['os']['version']} ${ServerSpec['os']['stability']}, ${ServerSpec['compute']['cpu']} Cores, ${ServerSpec['compute']['ram']}GB RAM, ${ServerSpec['bandwidth']['speed']}${ServerSpec['bandwidth']['unit']}`
	purpose: string
}
