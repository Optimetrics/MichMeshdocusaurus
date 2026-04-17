---
sidebar_label: Hardware Recommendations
---

# Hardware Recommendations

You need a LoRa radio to join the mesh. This page lists what works well for MichMesh, with a Michigan-specific lens: we favor low-power nRF52840-based boards because they handle Michigan winters better and last dramatically longer on solar.

## Why nRF52840 over ESP32

MichMesh runs on the 902–928 MHz ISM band with LoRa radios. The board behind the radio can be one of two chip families, and the choice matters a lot in Michigan:

**nRF52840** — Low power, Bluetooth-only, no WiFi. Uses a fraction of the power of ESP32 boards, which means dramatically better solar reliability through Michigan winters and longer battery life on companion devices. This is what Austin Mesh, Cascadia, and most serious regional networks recommend for repeaters.

**ESP32** — More power, has WiFi, more memory, lower cost. Fine when you have wall power and want WiFi features. A poor choice for solar in Michigan — the extra power draw is the difference between a repeater that survives February and one that bricks.

Short version: **if it's going outside or running on solar, get nRF52840.** If it's going on a desk with a USB cable, either works.

The other spec that matters is the LoRa radio chip — get **Semtech SX126x or LR11xx** series. Avoid older SX127x. All the boards below meet this.

## For your first node (Companion)

A companion is a personal radio that pairs with your phone over Bluetooth. This is what most people want first.

| Device | Chip | Approx. price | Notes |
|---|---|---|---|
| **LilyGo T-Echo** | nRF52840 | $50–70 | E-ink screen, built-in GPS, standalone-capable. Strongly recommended for field use. |
| **Seeed SenseCAP T1000-E** | nRF52840 + LR1110 | $80–100 | Credit-card sized, IP65 rated, integrated GPS. Excellent pocket carry. |
| **RAK4631 (WisBlock)** | nRF52840 | $35–45 | Modular, swap antennas, add sensors. Great base for DIY builds. |
| Heltec V3 | ESP32 | $25–35 | Cheap and common but ESP32 — battery life is noticeably worse. Fine as a desk/tinkering radio. |

All of the above support the 915 MHz frequency required for the US. Avoid the 868 MHz (European) versions.

## For a stationary home node

If you have a balcony, attic, rooftop, or an outside wall with a good view of the sky, you can run a stationary repeater that extends the network for your neighbors.

| Device | Chip | Approx. price | Notes |
|---|---|---|---|
| **RAK WisBlock Meshtastic Starter Kit (RAK19007 + RAK4631)** | nRF52840 | $35 | The Michigan default. Modular, robust, widely documented. Works fine for MeshCore despite the "Meshtastic" name on the kit. |
| **RAK19003 Mini Base + RAK4631** | nRF52840 | $50–60 | Smaller footprint if space matters. |

Pair with a good 915 MHz antenna — a cheap antenna is the single most common reason nodes underperform. A fiberglass outdoor antenna ($40–80) dramatically outperforms the included rubber duck.

## For a solar outdoor repeater

This is the backbone hardware — the nodes that go on barns, silos, rooftops, and towers and run 24/7 without grid power. We're using Austin Mesh's V5 architecture, which went through five field-tested iterations and is the most reliable design out there.

### Why not just use the RAK board's solar input?

The RAK board has a solar input connector. Don't use it. Austin Mesh killed three repeaters in under a year trying. The nRF52840 has a known Super Deep Sleep bug — if battery voltage drops below 3.3V, the chip locks up and requires a manual reset. The fix is to put a proper battery pack between the solar panel and the RAK.

### The parts list

| Component | Product | Approx. price |
|---|---|---|
| Radio board | RAK WisBlock Meshtastic Starter Kit (RAK19007 + RAK4631) | $35 |
| Battery pack | Voltaic Systems V25 (6,400 mAh) | $54 |
| Solar panel | Soshine 6W with USB output | $15 |
| Antenna | 915 MHz 3 dBi N-Female fiberglass | $39 |
| Pigtail | IPEX to N-Type Female | $4 |
| Enclosure | ABS box, 230×150×87mm | $13 |
| Drain plug | Amphenol VENT-PS1YBK-N8001 | $5 |
| Cable gland | 3/4 NPT | $2 |
| Antenna wrap | Proxicast self-fusing tape | $2 |
| Coax | 3' KMR400 N-Male to N-Female | $13 |
| **Total** | | **~$182** |

### How it goes together

The architecture is simple: solar panel → Voltaic V25 battery → RAK board. All USB. No soldering, no battery management chips, no hoping the RAK's onboard charger handles variable voltage.

The Voltaic V25 is the key piece. It's optimized for solar charging, stays in "always on" mode (won't auto-shut off on the RAK's low draw), and self-recovers — if it drains completely, it'll restart itself once solar charges it back up. Austin Mesh has V5 nodes that have run continuously for over a year.

### If you're near other RF sources

If the node will sit near other radio transmitters (public safety, cellular, ham repeaters), you may get desense. Austin Mesh hit this on a rooftop surrounded by 850 MHz public service antennas. The fix is short cable runs and a cavity filter, which adds ~$65 to the build. Most MichMesh sites won't need this — ask in Discord if you're unsure.

For the full Austin Mesh field build history with photos, lessons from five iterations, and climate considerations, see [Austin Mesh's Devices page](https://www.austinmesh.org/devices/). Their work is CC-licensed and we're standing on it.

## Cold-weather notes for Michigan

Michigan winters are harder on repeaters than most of North America. YYC Mesh (southern Alberta, similar climate) published findings worth knowing:

- **LiPo and Li-ion are fine in cold** — zero failures in their testing
- **Capacity drops in winter** — plan for a 3,000 mAh minimum, more is better
- **Charging creates heat, enclosures trap heat** — this is actually good for winter performance
- **nRF52840 > ESP32 in cold** — another reason we favor it
- **Solar panel angle matters more in winter** — mount at a steeper angle than you'd think to catch low sun

Full YYC writeup: [Cold-Weather Charging of Lithium-Ion Batteries](https://yycmesh.wordpress.com/2025/04/19/cold-weather-charging-of-lithium-ion-batteries-real-world-lessons-from-the-meshtastic-community/)

## Where to buy

- [Rokland](https://store.rokland.com) — US distributor, solid support, carries most of what you need
- [RAK Wireless direct](https://store.rakwireless.com) — best for WisBlock modular parts
- [Voltaic Systems](https://voltaicsystems.com) — batteries and solar
- [Amazon](https://amazon.com) — fast shipping, mixed quality on antennas
- [AliExpress](https://aliexpress.com) — cheapest, 2–4 week shipping, fine for common boards

**Ask in Discord before a first order.** Group buys run periodically and save 15–25%. A few experienced hands can also save you from buying the wrong version of a board.
