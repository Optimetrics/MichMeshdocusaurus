---
sidebar_label: Getting Started
---

# Getting Started

This is the practical walkthrough — flashing a device, getting it on the network, and knowing which quirks to watch out for. It assumes you've already picked out hardware and know what role you want to run. If not, check [Hardware Recommendations](./02-hardware.md) and [MeshCore in Michigan](./index.md) first.

## Flashing Your Device

The MeshCore Web Flasher works a lot like the Meshtastic one, with one important exception (the mandatory erase — more on that below). If you're coming from Meshtastic, most of this will feel familiar.

Before you start, plug your device in and make sure you're using a USB cable that actually carries data, not a charge-only cable. If the flasher can't see your device, a bad cable is the first thing to rule out. Chrome or Edge on desktop work best — the Web Flasher uses WebSerial, which Safari and Firefox don't support.

Walk through these steps in order:

- **Connect your device to your computer via USB.**
- **Select your device from the list.** Common boards — T114, Heltec V3, RAK WisBlock, ProMicro nrf52 (faketec) — are all in the list under their own names. Match what you've got.
- **Select your node's role.** Companion, Repeater, Room Server, or Sensor. See the MeshCore in Michigan page for what each one does. You can re-flash to a different role later, so this isn't permanent — pick what you need right now.
- **Click Enter DFU Mode**, then select your device from the pop-up. DFU (Device Firmware Update) mode is what lets the flasher write to the chip. If the software route fails on a ProMicro-based board like the faketec, the hardware fallback is to short the RST and GND pins together briefly (twice, for nRF52 bootloader).
- **IMPORTANT — Click Erase Flash**, select your device from the pop-up. This has to be done on a first-time MeshCore flash for any device. Skip this step and you'll get strange boot behavior, failed adverts, or a device that just sits there. This applies whether the device is brand new, previously ran Meshtastic, or ran an older MeshCore build — if it's the first time flashing *this* MeshCore install, erase first.
- **Click Flash**, select your device from the pop-up. The flash itself takes a minute or two. Don't unplug the device while it's writing.

When it's done, the device will reboot into MeshCore and start advertising over Bluetooth. That's your cue to move on to setup.

If something fails partway through — flash halts, device disappears, flasher throws an error — unplug, replug, and start over from DFU mode. Most flash failures are transient and clear up on a second try.

## Setting Up Your Device (Companion)

This section covers the BLE Companion role, which is what most people flash — it's the firmware that pairs to your phone over Bluetooth. Repeater and Room Server setup is different enough to live on its own page.

### Pairing over Bluetooth

If your device has a screen (T114 and similar), the Bluetooth pairing PIN will flash on the display right after boot. Write it down — screen timeouts on some of these units are quick, and once it's gone it's gone. If you miss it, just hit reset and a fresh PIN will come up.

If your device doesn't have a screen, or you missed the PIN entirely, the default is **123456**.

A common gotcha: if you've paired this device to your phone before — even just to test it, even with a different firmware — your phone will try to reuse the old pairing and it will fail silently. Go into your phone's Bluetooth settings, find the device, and hit "Forget" (or "Unpair"). Then pair fresh.

### First-time configuration

Open the MeshCore app and connect. Then walk through Settings (the cog icon on Android):

- **Set your Name.** Unlike Meshtastic, MeshCore only has one name field — there's no separate long/short name split. Pick something that identifies you clearly. Your callsign, your first name plus a location, whatever works. This is what other users see when you show up on their network.
- **Set your Lat/Long** if your node is stationary. For a Companion device you carry around, leave this blank. If you want your position broadcast in your adverts, check "Share Position in Advert." Otherwise, your location stays local to your device.
- **In Radio Settings, tap Choose Preset** and select **USA/Canada (Recommended)**. This is what puts you on the same frequency, bandwidth, and spreading factor as the rest of the Michigan mesh. If you skip this, your device is configured for whatever preset was default at flash time, which may not match.
- **Tap the check mark in the upper right** (on Android) to apply settings. Get in the habit of tapping the check mark every time you change something. Settings don't persist until you do.

### Setting a custom Bluetooth PIN

Leaving the default PIN at 123456 is fine for testing, but you'll want to change it before you're done.

- Go into **Bluetooth Settings** and switch it from Default to **Custom**.
- Enter a 6-digit PIN.
- **Write this down somewhere you won't lose it.** If you forget your custom PIN, there's no recovery — you'll have to erase and re-flash the device from scratch.
- Tap the check mark in the upper right to save, then scroll down and reboot the device.
- After reboot, you'll need to re-pair. Forget the device in your phone's Bluetooth menu first, then pair again with the new PIN.

From here, your Companion device is on the network and ready to use. Where you go next depends on what you want to do — join public channels, set up direct contacts, add a GPS or environmental sensor, or just carry it and see what shows up.

## Known bugs and quirks

MeshCore is still young, and the firmware is moving fast. That's mostly good — active development means bugs get fixed quickly — but it also means some features are unreliable depending on the hardware and firmware version you're running.

**Sensors are hit or miss.** Environmental sensors and GPS modules don't always work reliably, and sometimes one works while the other doesn't on the same board. If you're relying on sensor data, test it thoroughly before you deploy. Check the MeshCore GitHub issues for your specific sensor before you spend time debugging — there's a good chance someone else has already run into it.

**GPS disables itself on every reboot.** This is the big one to know about. The current firmware auto-disables GPS mode every time the device restarts — the app even shows a notice that says so. If you're using GPS, you'll need to re-enable it after every boot. To do it right:

- Open **Position** settings.
- Enable **GPS Mode**.
- Tap the check mark in the upper right of that submenu to save.
- Back out to the main settings menu.
- Tap the check mark in the upper right of the main menu to commit.

Miss either check mark and the setting won't stick. This is true for most settings in the app, but GPS is the one people notice most because they have to redo it constantly. There's an open GitHub issue (#989) tracking this — it'll likely get fixed in a future firmware release.

**Screen timeouts are aggressive.** If you're trying to read something off a T114 or similar, tap the screen or hit a button to wake it back up.

**Bluetooth reconnection can be flaky.** If the app won't reconnect cleanly, force-close the app, forget the device on your phone, and pair fresh. It's annoying but it's the fastest fix.

## Next steps

- [Michigan Channels](./03-channels.md) — public hashtag channels in use across the state
- [Hardware Recommendations](./02-hardware.md) — what to buy if you're ready to add a repeater or sensor
- [MeshCore in Michigan](./index.md) — background on the protocol and why we chose it

## Learn more

- [Official MeshCore Documentation](https://docs.meshcore.io)
- [MeshCore Flasher](https://flasher.meshcore.co.uk/)
- [MeshCore GitHub](https://github.com/meshcore-dev/MeshCore)
