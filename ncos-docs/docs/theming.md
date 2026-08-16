# Themes & Wallpapers

NCOS ships with a coordinated theme system: switching a theme restyles **COSMIC, the
kitty terminal, and VS Code together**, and swaps the wallpaper to match — all with a
single keystroke.

---

## Switching Themes

Three complete themes are included: **Nord** (default), **Red**, and **Purple**.

| Action | Shortcut | Command |
|--------|----------|---------|
| **Next theme** | `Super+Shift+]` | `theme-select.sh` |
| **Previous theme** | `Super+Shift+[` | `theme-select-previous.sh` |
| **Toggle light/dark** | `Super+Ctrl+]` | `toggle_light_dark` |

When you cycle themes, your current COSMIC, kitty, and VS Code settings are saved back
into the active theme before the next one is applied — so any tweaks you make to a
theme stick with it.

!!!tip
    Your active theme is remembered across reboots (it's stored in `~/.current_theme`).

---

## Picking a Wallpaper

Press `Super+Shift+W` to open the **wallpaper picker** — a visual grid of all your
wallpapers with thumbnails. Select one and it's applied instantly.

Wallpapers are organized per theme under `~/.config/wallpapers/` — drop your own
images into those folders and they'll show up in the picker.

---

## Multi-Monitor Panorama Wallpapers

NCOS 2.0 uses the `awww` wallpaper daemon, which supports **panorama splitting**:
wallpapers with `dual` in their filename are automatically split across your
monitors, so one ultra-wide image spans both displays seamlessly.

!!!info
    Name a wide wallpaper something like `mountains-dual.png`, place it in your theme's
    wallpaper folder, and select it with `Super+Shift+W` — NCOS handles the split for
    each monitor's position and resolution automatically.
