<script setup lang="ts">
const age = Math.floor(
    (Date.now() - new Date("2006-11-28").getTime()) /
        (1000 * 60 * 60 * 24 * 365.25),
);

const socials: { platform: string; url: string; username: string }[] = [
    {
        platform: "Bluesky",
        url: "https://bsky.app/profile/did:plc:c3eyz3zd3bcnb6yuiylfaexo",
        username: "@luvsick.gg",
    },
    {
        platform: "GitHub",
        url: "https://github.com/luvsickgg",
        username: "@luvsickgg",
    },
    {
        platform: "Codeberg",
        url: "https://codeberg.org/luvsick",
        username: "@luvsick",
    },
    {
        platform: "Steam",
        url: "https://steamcommunity.com/id/luvsickgg",
        username: "id/luvsickgg",
    },
    {
        platform: "Signal",
        url: "https://signal.me/#eu/s5AaMe2FPqNiKcbrP71wH7S9aUddKAYmckvX7cMfEe53oCbBj2hHSo5ELtuFV8dG",
        username: "@luvsick.01",
    },
    {
        platform: "Discord",
        url: "https://discord.com/users/293020630608248832",
        username: "@luvsick.gg",
    },
    {
        platform: "Email",
        url: "mailto:hi@luvsick.gg",
        username: "hi@luvsick.gg",
    },
];

const servers: { name: string; specs: string; purpose: string }[] = [
    {
        name: "lumi",
        specs: "France, NixOS 25.05 (Unstable), 4 Cores, 8GB RAM, 400Mbps",
        purpose: "Personal infra & networking lab.",
    },
];

const asn: string = ""; // soon™

const domains: string[] = ["luvsick.gg"];
</script>

<template>
    <div class="min-h-screen bg-white text-gray-900">
        <div class="max-w-2xl mx-auto px-6 py-16">
            <header class="mb-4">
                <h1 class="text-3xl font-bold mb-4">luvsick.gg</h1>
                <p class="text-lg text-gray-600 leading-relaxed">
                    {{ age }}y/o software engineering student.
                </p>
            </header>

            <main class="space-y-12">
                <section>
                    <div class="space-y-4 text-gray-600 leading-relaxed">
                        <p>
                            I have a thing for digital privacy, open source,
                            transparency, playing with modern tech and infra.
                        </p>
                        <p>
                            You'll probably also find me playing games,
                            listening to music, tinkering my dotfiles, learning
                            new things, or just existing online.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 class="text-xl font-semibold mb-6 text-gray-900">
                        Say hi!
                    </h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <a
                            v-for="social in socials"
                            :key="social.platform"
                            :href="social.url"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="group block p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                        >
                            <div class="flex items-center justify-between">
                                <div>
                                    <div class="font-semibold text-gray-900">
                                        {{ social.platform }}
                                    </div>
                                    <div class="text-sm text-gray-500">
                                        {{ social.username }}
                                    </div>
                                </div>
                                <svg
                                    class="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                            </div>
                        </a>
                    </div>
                </section>

                <section>
                    <div class="flex items-center justify-between mb-6">
                        <h2 class="text-xl font-semibold text-gray-900">
                            Infrastructure
                        </h2>
                        <NuxtLink
                            v-if="asn"
                            :to="`https://bgp.tools/as/${asn.replace('AS', '')}`"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="px-3 py-1 text-sm font-mono bg-gray-100 rounded border hover:bg-gray-200 transition-colors"
                        >
                            {{ asn }}
                        </NuxtLink>
                    </div>

                    <div class="space-y-8">
                        <div>
                            <div class="flex items-center gap-2 mb-4">
                                <h3 class="font-medium text-gray-900">
                                    Servers
                                </h3>
                                <span class="text-sm text-gray-500"
                                    >({{ servers.length }})</span
                                >
                            </div>

                            <div class="space-y-4">
                                <div
                                    v-for="server in servers"
                                    :key="server.name"
                                    class="border border-gray-200 rounded-lg p-4"
                                >
                                    <div
                                        class="flex items-center justify-between mb-2"
                                    >
                                        <h4 class="text-gray-900 font-semibold">
                                            {{ server.name }}
                                        </h4>
                                    </div>
                                    <p class="text-sm text-gray-600 mb-3">
                                        {{ server.purpose }}
                                    </p>
                                    <div class="flex flex-wrap gap-2">
                                        <span
                                            v-for="(
                                                spec, index
                                            ) in server.specs.split(', ')"
                                            :key="index"
                                            class="px-2 py-1 text-xs bg-gray-100 rounded text-gray-700"
                                        >
                                            {{ spec }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-if="domains.length">
                            <div class="flex items-center gap-2 mb-4">
                                <h3 class="font-medium text-gray-900">
                                    Domains
                                </h3>
                                <span class="text-sm text-gray-500"
                                    >({{ domains.length }})</span
                                >
                            </div>

                            <div class="flex flex-wrap gap-2">
                                <NuxtLink
                                    v-for="domain in domains"
                                    :key="domain"
                                    :to="`https://${domain}`"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="px-3 py-1 text-sm bg-gray-100 rounded border hover:bg-gray-200 transition-colors font-mono"
                                >
                                    {{ domain }}
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </div>
</template>
