---
sidebar_label: MeshCore
---

# MeshCore in Michigan

MeshCore is the protocol most of Michigan's mesh runs on. It's a lightweight mesh routing system for LoRa radios, built for reliable regional messaging without internet, cell towers, or power grid.

If you're new, read [Getting Started](../getting-started) first, then come back here for the MeshCore-specific details.

## Why MeshCore for Michigan

MeshCore uses dedicated repeater nodes to carry messages across long distances, which works well for the geography we're covering — rural stretches, lakeshore corridors, and cell dead zones across the state. It's truly off-grid: no MQTT bridging to the internet is built in, so the network stays resilient even when everything else is down.

## The four node roles

MeshCore uses four firmware types. Pick the one that matches what you're doing.

**Companion** — Your personal device. Connects to the MeshCore app over Bluetooth or USB. This is what 99% of users want. Doesn't repeat traffic, which keeps the network clean.

**Repeater** — Stationary infrastructure nodes that extend the network. Usually solar-powered, mounted high, running 24/7. These are the backbone.

**Room Server** — A store-and-forward node for message history. Like an email server — roaming users log in to grab messages they missed.

**Sensor** — Remote telemetry node for environmental data, weather, or alerts.

## Michigan settings

Use these when configuring your node:

- **Region preset:** USA/Canada (Recommended)
- **Frequency:** Don't adjust — the preset handles this
- **Bandwidth, spreading factor, coding rate:** Don't adjust — leave at preset defaults

## Next steps

- [Getting Started with MeshCore](./Getting-Started) — flash your first device
- [Hardware Recommendations](./hardware) — what to buy
- [Michigan Channels](./channels) — public hashtag channels in use across the state

## Learn more

- [Official MeshCore Documentation](https://docs.meshcore.io/)
- [MeshCore Flasher](https://flasher.meshcore.co.uk)
- [MeshCore GitHub](https://github.com/meshcore-dev/MeshCore)
