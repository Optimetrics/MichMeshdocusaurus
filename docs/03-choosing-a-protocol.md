---
sidebar_label: Choosing a Protocol
---

# Choosing a Protocol

MichMesh supports three mesh protocols: MeshCore, Meshtastic, and Reticulum. They all run on LoRa radio hardware but they route messages differently and suit different use cases.

If you just want an answer: **start with MeshCore.** It's what most of Michigan runs and it's the easiest to join.

## Quick decision guide

**Start with MeshCore if you:**

- Are new to mesh networking
- Want reliable regional messaging across Michigan
- Plan to set up or use stationary repeaters
- Want encrypted communications by default

**Start with Meshtastic if you:**

- Want telemetry (weather, sensors, GPS tracking) as a first-class feature
- Need turnkey mobile mesh — search-and-rescue, group hikes, events
- Want the biggest global community and ecosystem
- Need MQTT bridging to the internet

**Look at Reticulum if you:**

- Have specific technical requirements around large-scale or multi-transport networking
- Are running infrastructure that mixes RF, WiFi, and internet
- Know what you're doing and want maximum flexibility

## The short version

MeshCore uses dedicated repeaters to carry messages long distances efficiently, which works well for a regional network like Michigan. Meshtastic has every radio acting as a repeater, which is great for pop-up networks but can get noisy on a dense regional mesh. Reticulum is more flexible and more complex — powerful if you need it, overkill if you don't.

## Want the deep dive?

Austin Mesh wrote the best side-by-side technical comparison out there. We're not going to re-write it.

[Read Austin Mesh's MeshCore vs Meshtastic breakdown](https://www.austinmesh.org/learn/meshcore-vs-meshtastic/)

## Can I run more than one?

Yes. Plenty of people have one radio on MeshCore and another on Meshtastic. They're separate networks running on the same frequency band — your devices pick which protocol based on the firmware flashed to them.
