import type { Server, Social } from '@lib/types'

export const age = Math.floor(
	(Date.now() - new Date('2006-11-28').getTime()) /
		(1000 * 60 * 60 * 24 * 365.25)
)

export const socials: Social[] = [
	{
		platform: 'Bluesky',
		url: 'https://bsky.app/profile/did:plc:c3eyz3zd3bcnb6yuiylfaexo',
		username: '@luvsick.gg'
	},
	{
		platform: 'GitHub',
		url: 'https://github.com/luvsickgg',
		username: '@luvsickgg'
	},
	{
		platform: 'Codeberg',
		url: 'https://codeberg.org/luvsick',
		username: '@luvsick'
	},
	{
		platform: 'Steam',
		url: 'https://steamcommunity.com/id/luvsickgg',
		username: 'id/luvsickgg'
	},
	{
		platform: 'Signal',
		url: 'https://signal.me/#eu/s5AaMe2FPqNiKcbrP71wH7S9aUddKAYmckvX7cMfEe53oCbBj2hHSo5ELtuFV8dG',
		username: '@luvsick.01'
	},
	{
		platform: 'Discord',
		url: 'https://discord.com/users/293020630608248832',
		username: '@luvsick.gg'
	},
	{
		platform: 'Email',
		url: 'mailto:hi@luvsick.gg',
		username: 'hi@luvsick.gg'
	}
]

export const servers: Server[] = [
	{
		name: 'lumi',
		specs: 'France, NixOS 25.05 (Unstable), 4 Cores, 8GB RAM, 400Mbps',
		purpose: 'Personal server & networking lab.'
	}
]

export const domains: string[] = ['luvsick.gg']

export const asn: string = '' // soon™
