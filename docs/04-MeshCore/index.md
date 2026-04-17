---
sidebar_label: MeshCore
---

# MeshCore in Michigan

MeshCore is the protocol most of Michigan's mesh runs on. It's a lightweight mesh routing system for LoRa radios, built for reliable regional messaging without internet, cell towers, or power grid.

If you're new to mesh networking, read [Getting Started](../getting-started) first, then come back here for the MeshCore-specific details.

## Why MeshCore for Michigan

MeshCore was built around a dedicated repeater model — stationary nodes that do the heavy lifting of carrying traffic, while client devices stay quiet and efficient. That architecture matches Michigan's geography well. We've got long rural stretches, a 3,000-mile shoreline, dense forests that kill line-of-sight, and cell dead zones that show up everywhere from the Manistee National Forest to the back roads of the Thumb. Getting a message from Grand Rapids to the lakeshore means hopping across real distance, and MeshCore's routing handles that cleanly without flooding the network.

It's also truly off-grid. Unlike some mesh protocols, MeshCore doesn't bridge to the internet by default — there's no MQTT gateway built in, no cloud dependency, no central server. The network stays up when the power's out, when the cell towers are saturated after a storm, and when the internet backbone goes down. That's the whole point.

The tradeoff is that you need infrastructure. A MeshCore network without repeaters is just a handful of devices shouting at each other. That's where projects like West Michigan Mesh come in — we're building the backbone so the network actually works when you need it.

## The four node roles

MeshCore uses four firmware types. Pick the one that matches what you're doing.

**Companion** — Your personal device. Connects to the MeshCore app on your phone over Bluetooth or USB. This is what 99% of users want. It sends and receives your messages but doesn't repeat traffic for others, which keeps the network clean and keeps your battery alive. If you're carrying a node in your pocket, on your pack, or in your truck, this is the role you want.

**Repeater** — Stationary infrastructure nodes that extend the network. These are mounted high, usually solar-powered, and run 24/7. They're the backbone — every message that crosses real distance rides on a chain of repeaters. Repeaters don't have users attached; their whole job is to listen, route, and forward. If you're hosting one on your property, you're part of the infrastructure.

**Room Server** — A store-and-forward node for message history. Think of it like an email server for the mesh. Users join a "room" (a group chat), and the Room Server holds onto messages so that members who were offline or out of range can sync up when they come back. Without a Room Server, group messages are real-time only — if you missed it, it's gone.

**Sensor** — Remote telemetry node for environmental data. Temperature, humidity, water levels, door contacts, weather stations, trail cameras — anything you want to monitor from a distance without running power or cable. Sensors publish readings to the mesh on a schedule or on event triggers. Useful for cabins, remote properties, and field monitoring.

## Michigan settings

Use these when configuring your node. The defaults are tuned for our region — don't override them unless you know exactly what you're doing and why.

- **Region preset:** USA/Canada (Recommended)
- **Frequency:** Don't adjust — the preset handles this
- **Bandwidth, spreading factor, coding rate:** Don't adjust — leave at preset defaults

A quick note on why: LoRa radio parameters have to match across the network for nodes to hear each other. If you bump your spreading factor or change your bandwidth to "get more range," you'll just fall off the map — the rest of the network won't be able to decode your packets. The presets exist so everyone is on the same page. Change them and you're running a private network of one.

If you're experimenting with custom settings for a closed group or a testbench, that's fine, just don't expect to hit the public Michigan mesh while you do it.

## Next steps

- [Getting Started with MeshCore](./Getting-Started) — flash your first device and get on the network
- [Hardware Recommendations](./hardware) — what to buy, what to skip, and what's worth the upgrade
- [Michigan Channels](./channels) — public hashtag channels in use across the state

## Learn more

- [Official MeshCore Documentation](https://meshcore.co.uk/)
- [MeshCore Flasher](https://flasher.meshcore.co.uk/)
- [MeshCore GitHub](https://github.com/meshcore-dev)
