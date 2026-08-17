# NCOS Assistant

The **NCOS Assistant** is a built-in AI assistant that lives right in your panel and
dock. It can answer questions about NCOS — shortcuts, how-tos, system tasks — using
the built-in NCOS documentation, and it works as a general chat assistant too.

!!!info "Fully offline by default"
    The Assistant runs **entirely on your machine** using [Ollama](https://ollama.com/)
    with a compact local chat model and an embedding model for searching the NCOS docs.
    Nothing you type is sent to the cloud.

---

## Setup

Before first use, enable Ollama and pull the models the Assistant relies on:

```bash
sudo systemctl enable --now ollama
ollama pull embeddinggemma:300m
ollama pull llama3.2:1b
```

---

## Where to Find It

Add the applet to your panel:

**COSMIC Settings → Desktop → Panel → Configure panel applets → Add "NCOS Assistant"**
— the chat-bubble icon appears in the panel.

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

## Feeding It Your Wiki

Drop `.md` (or `.txt`) files into `docs/` — that folder is indexed by default. Add
more folders in the applet's settings (gear icon). The index rebuilds automatically
when files change (checked when the popup opens), or manually via **Settings →
Rebuild**.

!!!info
    The index is stored at `~/.local/share/ncos-assistant/index.json`.

---

## Configuration

Settings live in the popup (gear icon) and persist via cosmic-config under
`~/.config/cosmic/io.github.exothermic88.ncos-assistant/v1/`:

- **Ollama server** — local by default (`localhost:11434`); toggle **"Use remote
  server"** to point at another machine on your network.
- **Models** — chat model (default `llama3.2:1b`) and embedding model (default
  `embeddinggemma:300m`). Changing the embedding model invalidates the index and
  triggers a rebuild.
- **Context chunks** — how many document chunks are retrieved per question.

---

## Tips

- The first response after boot can take a few seconds while the local model loads —
  after that it stays warm.
- Because the models are small enough to run on modest hardware, keep questions
  focused for the best answers. For deep troubleshooting, the [Arch Wiki](https://wiki.archlinux.org/)
  remains your best friend.
