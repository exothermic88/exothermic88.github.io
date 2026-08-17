# Add NCOS Repository

Follow these steps to add the NCOS repository to your system and access NCOS-specific packages.

!!!info "Preconfigured on NCOS 2.0"
    Systems installed from the NCOS 2.0 ISO already have the `[ncos]` repository
    enabled — you can install any package below directly with `sudo pacman -S`.
    The setup steps further down are for older installs or other Arch-based systems.

## First-Party Packages

| Package | What it is |
|---------|------------|
| `ncos-assistant` | The [NCOS Assistant](assistant.md) — offline local-AI panel applet |
| `ncos-package-update-applet` | Panel applet showing pending package updates |
| `ncos-weather-applet` | Panel weather applet |

## Steps to Add the NCOS Repository

1. **Open pacman.conf file:**

   Use the following command to open the `pacman.conf` file in any text editor:

   ```bash
   txt /etc/pacman.conf
   ```
2. **Add NCOS repository configuration:**

   Append the following text to the end of the file:

   ```
   [ncos]
   SigLevel = Optional TrustAll
   Server = https://raw.githubusercontent.com/exothermic88/ncos-repo/main/$arch
   ```
3. **Synchronize NCOS repository:**

   Run the following command to add the NCOS repository to `pacman` (1):
   { .annotate}
   
   1.	!!! info "To learn more about `pacman` for package maintanance, refer to the [arch wiki](https://wiki.archlinux.org/title/Pacman#)." 

   ```bash
   sudo pacman -Syy
   ```
4. **Install NCOS-specific package:**

   Use the following command to install a NCOS package:

   ```bash
   sudo pacman -S ncos-package_name
   ```
!!!example
	```sudo pacman -S ncos-assistant```

---
## Future Updates

When future updates are released for ncos packages that you have already installed, they are installed along with your regular system update — just run:

```bash
sudo pacman -Syu
```

No other command is needed.
