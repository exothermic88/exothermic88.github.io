# How-To Guides

Quick, task-focused guides for common things you'll want to do on NCOS. Each section below covers one task start to finish.

---

## Mirror or Share Your Screen (GNOME)

NCOS uses GNOME, which gives you a couple of ways to share your display depending on what you're connecting to.

### Option 1: Mirror to a Second Monitor (Wired/HDMI/DisplayPort)

If you've plugged in a second monitor or TV and want it to **show the exact same thing** as your main display:

1. Open **Settings** (`Super+;`).
2. Go to **Displays**.
3. You'll see your connected displays listed. Toggle **Join Displays** to **off** to mirror (when it's on, displays extend instead of mirror).
4. Choose your preferred resolution/refresh rate, then click **Apply**.

!!!info
    If the second display doesn't show up, check the physical cable connection first, then re-open **Displays** — GNOME usually detects it automatically.

### Option 2: Wireless Screen Casting (Miracast)

To cast your screen to a wireless display or smart TV without any cables, NCOS uses **GNOME Network Displays**.

1. Install the package if it isn't already on your system:
    ```bash
    sudo pacman -S gnome-network-displays
    ```
2. Open the **Network Displays** app from the App Library (`Super+A`).
3. Make sure the display you want to cast to is powered on and discoverable (most smart TVs need Miracast/Screen Mirroring mode enabled in their own settings).
4. Select the display from the list and click **Connect**.

!!!warning
    Wireless casting requires a Wi-Fi adapter that supports Wi-Fi Direct. Most modern laptop cards do, but some desktop USB adapters don't.

To stop mirroring, open **Network Displays** again and click **Disconnect**.

---

## Access the NCOS Assistant

The **NCOS Assistant** is [1–2 sentence description of what it actually does — e.g. "a built-in AI assistant that helps you manage system settings, troubleshoot issues, and answer questions about your system, right from the desktop."]

### Where to Find It

- **Keyboard shortcut:** `Super+[shortcut]`
- **App Library:** `Super+A` → search for **NCOS Assistant**
- **[Any other launch point — top bar icon, dock, etc.]**

### What It Can Do

- [Feature 1 — e.g. answer questions about NCOS]
- [Feature 2 — e.g. run system diagnostics]
- [Feature 3 — e.g. adjust settings via natural language]

!!!example
    Example usage: [a short sample interaction or command showing what a user would type/say, and what happens]

---
