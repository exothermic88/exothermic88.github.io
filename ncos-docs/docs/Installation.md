# NCOS Installation Guide
---

## Boot into the Live Environment
- Insert the NCOS installation media (USB or ISO).
- Boot from the installation media.
- The live environment will load, and the installer will launch automatically.

## Select Region, Timezone, and System Language
- Choose your preferred **region** and **timezone**.
- Select the **system language** for your installation.

## Configure Keyboard Layout
- Pick your **keyboard layout** from the available options.
- Test the layout to ensure it's correct.

## Partition the Drive
Choose the **target drive** for installation then
select one of the partitioning methods:

1. **Install alongside existing OS** – Keeps current partitions and installs NCOS alongside.
2. **Replace a partition** – Overwrites an existing partition with NCOS.
3. **Erase disk** – Deletes all partitions and installs NCOS on a clean disk.
4. **Manual partitioning** – Allows advanced users to create custom partitions.

!!!info "btrfs by default"
    NCOS 2.0 installs use the **btrfs** filesystem with zstd compression and a full
    subvolume layout. This enables instant system snapshots you can boot into from
    the GRUB menu — see [Backups & Snapshots](backups.md) after installing.

!!!tip "Dual-booting?"
    If you install NCOS alongside another OS, enable the multiboot GRUB menu after
    your first boot so you can pick between systems — see [Dual Boot](dual-boot.md).

## Create a User
- Enter a **username** and **password** for your account.
- Optionally, enable **automatic login** or require a password at startup.

## Begin Installation
- Review your settings.
- Click **Install** to begin the process.
- Wait for the installation to complete, then reboot into your new NCOS system.

---



