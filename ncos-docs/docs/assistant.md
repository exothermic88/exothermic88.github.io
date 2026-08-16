# NCOS Assistant

The **NCOS Assistant** is a built-in AI assistant that lives right in your panel and
dock. It can answer questions about NCOS — shortcuts, how-tos, system tasks — using
the built-in NCOS documentation, and it works as a general chat assistant too.

!!!info "Fully offline by default"
    The Assistant runs **entirely on your machine** using [Ollama](https://ollama.com/)
    with a compact local chat model and an embedding model for searching the NCOS docs.
    Nothing you type is sent to the cloud.

---

## Where to Find It

- **Panel / Dock:** click the NCOS Assistant icon — it's pinned to both the top panel
  and the dock by default.
- **App Library:** press `Super+A` and search for **NCOS Assistant**.

---

## What It Can Do

- **Answer NCOS questions** — it has the NCOS documentation built in, so you can ask
  things like "how do I change the theme?" or "how do I take a snapshot?" and get an
  answer specific to your system.
- **General chat** — quick questions, command syntax, explanations, all offline.
- **Stay private** — models run locally; no account, no API key, no internet required.

!!!example
    Ask: *"How do I switch to the red theme?"* — the Assistant will point you to the
    theme cycle shortcut (`Super+Shift+]`) described in [Themes & Wallpapers](theming.md).

---

## Tips

- The first response after boot can take a few seconds while the local model loads —
  after that it stays warm.
- Because the models are small enough to run on modest hardware, keep questions
  focused for the best answers. For deep troubleshooting, the [Arch Wiki](https://wiki.archlinux.org/)
  remains your best friend.
