# How-To Guides

Quick, task-focused guides for common things you'll want to do on NCOS. Each section below covers one task start to finish.

Bigger topics have their own pages:

- [NCOS Assistant](assistant.md) — the built-in offline AI assistant
- [Themes & Wallpapers](theming.md) — theme cycling, wallpaper picker, panorama wallpapers
- [Backups & Snapshots](backups.md) — Timeshift and bootable GRUB snapshots
- [Dual Boot](dual-boot.md) — enabling the multiboot menu with `multiboot-toggle`

---

## Mirror or Share Your Screen

NCOS gives you a couple of ways to share your display depending on what you're connecting to.

### Option 1: Mirror to a Second Monitor (Wired/HDMI/DisplayPort)

If you've plugged in a second monitor or TV and want it to **show the exact same thing** as your main display:

1. Open **Settings** (`Super+;`).
2. Go to **Displays**.
3. Select the second display and enable **mirroring** (when mirroring is off, displays extend instead).
4. Choose your preferred resolution/refresh rate, then click **Apply**.

!!!info
    If the second display doesn't show up, check the physical cable connection first, then re-open **Displays** — it's usually detected automatically.

### Option 2: Wireless Screen Casting (Miracast)

To cast your screen to a wireless display or smart TV without any cables, NCOS ships **GNOME Network Displays**.

1. Open the **Network Displays** app from the App Library (`Super+A`).
2. Make sure the display you want to cast to is powered on and discoverable (most smart TVs need Miracast/Screen Mirroring mode enabled in their own settings).
3. Select the display from the list and click **Connect**.

!!!warning
    Wireless casting requires a Wi-Fi adapter that supports Wi-Fi Direct. Most modern laptop cards do, but some desktop USB adapters don't.

To stop mirroring, open **Network Displays** again and click **Disconnect**.

---

## Share Files Between Devices

NCOS 2.0 includes **LocalSend** — an open-source AirDrop alternative that works between Linux, Windows, macOS, Android, and iOS over your local network.

1. Open **LocalSend** from the App Library (`Super+A`).
2. Install LocalSend on the other device ([localsend.org](https://localsend.org/)).
3. Both devices appear automatically when on the same network — pick a file and send.

---

## Flash a USB Drive

Need to write an ISO to a USB stick (for example, to make an NCOS installer for a friend)? NCOS 2.0 ships **Popsicle**:

1. Open **Popsicle** from the App Library (`Super+A`).
2. Choose the ISO image, select the USB drive, and click **Flash**.

---
