# Add NCOS Repository

Follow these steps to add the NCOS repository to your system and access NCOS-specific packages.

## Steps to Add the NCOS Repository

1.**Open pacman.conf file:**

   Use the following command to open the `pacman.conf` file in any text editor:

   ```bash
   sudo nano /etc/pacman.conf
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
	```sudo pacman -S ncos-hotfix```
5. **Apply the update:**

   Run this command to apply the update:

   ```bash
   ncos-package_name
   ```
!!!example 
	`ncos-hotfix`
	
---
## Future Updates

When future updates are released for ncos packages that you have already installed, they will be automatically downloaded when you update your system packages using `sudo pacman -Syu`.

- To apply the updates, simply run the following command:

  ```bash
  ncos-package_name
  ```
  
