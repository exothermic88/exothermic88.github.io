# Dual Boot

By default NCOS boots **instantly** — the GRUB menu is hidden and the timeout is zero.
If you dual-boot with Windows or another Linux, use `multiboot-toggle` to switch to a
visible boot menu that detects your other operating systems.

---

## Enable the Multiboot Menu

```bash
sudo multiboot-toggle enable
```

This switches GRUB to the multiboot profile and regenerates the boot configuration
with **os-prober** enabled — other installed operating systems (like Windows) are
detected and added to the menu automatically. On your next reboot you'll see a GRUB
menu listing every OS.

!!!tip
    Installed another OS *after* enabling multiboot? Just run
    `sudo multiboot-toggle enable` again to re-scan and pick it up.

## Return to Instant Boot

```bash
sudo multiboot-toggle disable
```

This restores the hidden, zero-timeout menu for the fastest possible boot into NCOS.

!!!info
    Even with the menu hidden, you can still reach GRUB by holding `Shift` (BIOS) or
    repeatedly pressing `Esc` (UEFI) during boot — useful for reaching the
    [snapshot entries](backups.md) without enabling the full multiboot menu.
