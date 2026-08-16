# Backups & Snapshots

NCOS 2.0 installs on **btrfs by default**, which makes system snapshots cheap and
instant. Combined with **Timeshift** (preinstalled) and **grub-btrfs**, you can roll
back a broken update by simply picking a snapshot from your boot menu.

---

## Take Backups with Timeshift

Timeshift snapshots your system so you can restore it if something breaks.

1. Open **Timeshift** from the App Library (`Super+A`).
2. On first run, choose the **BTRFS** snapshot type (recommended on NCOS 2.0 installs).
3. Pick a schedule (e.g. daily or weekly) — or take manual snapshots with **Create**.

!!!tip
    Take a manual snapshot before big changes — major updates, kernel upgrades, or
    experimenting with system configs:
    ```bash
    sudo timeshift --create --comments "before update"
    ```

---

## Bootable Snapshots with `auto-snapshot`

The new `auto-snapshot` command connects Timeshift to your GRUB boot menu: every
snapshot you take shows up as a bootable entry.

Run it once:

```bash
auto-snapshot
```

This enables the grub-btrfs daemon, which watches for new Timeshift snapshots and
adds them to the GRUB menu automatically.

!!!warning "btrfs only"
    `auto-snapshot` requires a btrfs root filesystem. Fresh NCOS 2.0 installs use
    btrfs by default; if you chose a different filesystem during manual partitioning,
    this feature isn't available.

---

## Restoring After a Bad Update

If an update leaves your system broken:

1. Reboot and hold/press the boot menu key to show GRUB (if hidden — see
   [Dual Boot](dual-boot.md) for making the menu always visible).
2. Open the **snapshots** submenu and boot into a snapshot from before the problem.
3. Once booted, open **Timeshift** and click **Restore** on that snapshot to make the
   rollback permanent.
