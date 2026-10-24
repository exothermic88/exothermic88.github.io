# Release Notes 

## NCOS 2.1.3

New first-party apps for the panel and window tiling, the Assistant working out of the
box, and a tuned snapshot setup.

### New Features

- **Now Playing applet** — new `ncos-now-playing-applet` shows the current track in
  the panel with album art and *Artist – Title*, for any MPRIS media player. Added to
  the panel by default.
- **Tiling Assistant** — new `ncos-tiling-assistant` GUI for managing auto-tiling
  exceptions (apps that open floating). COSMIC Settings, Discord and Spotify float
  by default.
- **Ollama included** — `ollama` now ships on the ISO, so the
  [NCOS Assistant](assistant.md) works out of the box.
- **grub-btrfs config** — snapshot boot entries are titled by date and description,
  and Docker/container subvolumes are ignored. See [Backups & Snapshots](backups.md).
- **Accessibility zoom** — preconfigured with mouse zoom shortcuts and 50% steps.
- **Refreshed installer slideshow** — new artwork, updated text, and shortcut cards
  matching the current defaults (`Super+B` browser, `Super+;` settings).

### Changes & Removals

- **Borderless panel** by default.
- **`broadcom-wl` removed** from the ISO.
- **`ncos-theming` no longer installed** — theming files ship directly in `/usr`.
- **Config cleanup** — removed leftover settings for applets NCOS doesn't ship.

---

## NCOS 2.0

The biggest NCOS release yet — a built-in local AI assistant, btrfs installs with
bootable snapshots, a full theme system, and a slimmer, faster ISO.

### New Features

- **NCOS Assistant** — a first-party COSMIC applet that puts a local AI assistant in
  your panel and dock. Runs fully offline via Ollama and can answer questions about
  NCOS using the built-in documentation. See the [Assistant guide](assistant.md).
- **First-party applets** — new `ncos-package-update-applet` and `ncos-weather-applet`
  ship preconfigured in the panel.
- **Theme system** — three complete themes (Nord, Red, Purple) restyle COSMIC, kitty,
  and VS Code together. Cycle with `Super+Shift+]` / `Super+Shift+[`. See
  [Themes & Wallpapers](theming.md).
- **Wallpaper picker** — `Super+Shift+W` opens a visual wallpaper grid, backed by the
  new `awww` wallpaper daemon with automatic panorama splitting for dual-monitor
  wallpapers.
- **btrfs by default** — the installer now creates a btrfs filesystem with a full
  subvolume layout (`@`, `@home`, `@root`, `@srv`, `@cache`, `@log`, `@tmp`) and
  zstd compression.
- **Bootable snapshots** — the new `auto-snapshot` command wires Timeshift snapshots
  into the GRUB menu via grub-btrfs. See [Backups & Snapshots](backups.md).
- **Dual-boot toggle** — `multiboot-toggle enable|disable` switches GRUB between a
  hidden instant boot and a multiboot menu that detects other operating systems. See
  [Dual Boot](dual-boot.md).
- **Redesigned installer** — Calamares 2.0 branding with a new sidebar, navigation,
  and an all-new slideshow.

### New Default Apps

- **COSMIC Store** — graphical app installation.
- **COSMIC Monitor** — system monitoring.
- **LocalSend** — share files with nearby devices.
- **Popsicle** — flash USB drives.
- **Android Messages** — text from your desktop.
- **rofi** — powers the new wallpaper picker.

### Changes & Removals

- **Pamac removed** — use `pacman`, `yay`, or COSMIC Store instead.
- **KDE Connect no longer preinstalled** — install `kdeconnect` manually if you use it.
- **Legacy `xf86-video` drivers dropped** — the modern modesetting driver is used.
- **Slimmer system** — the full Qt6 group was trimmed to just what's needed, saving
  over a gigabyte of installed size.
- **Faster ISO** — squashfs compression switched from xz to zstd for quicker boot
  and install.

---
## Hotfix 0.5.1

## Features

- **Custom Brave Browser Extension:**
  Added a custom extension for the Brave browser that allows users to effortlessly pull out a specific tab into a new window.

??? abstract "Instructions to Apply Brave Update"

	1. **Load the Extension**
   		- Open `brave://extensions/`.
   		- Enable **Developer Mode**.
   		- Click **Load unpacked** and select the **BraveExtension** folder in `/.config/`.

	2. **Use the Shortcut**
   		- Press `Ctrl+Shift+X` (or your chosen shortcut) to detach the current tab into a new window.
## Fixes
- **Discord Streaming Issue:**
  Resolved an issue where Discord streaming failed to initialize properly.

??? warning

	Currently, for this fix to work you need to run `xwaylandvideobridge` before streaming due to current issues with the application on autostart. This will be fixed in future updates.


install/update the `ncos-hotfix` (1) package to enjoy these enhancements!
{ .annotate}

1. !!! question "How to Install [ncos-hotfix](update.md)"
	

