# Pre-Installation Guide

Before installing NCOS, follow these steps to prepare your system:

## Download the NCOS ISO
- Visit the [NCOS official website](https://exothermic88.github.io) for the download link.  
- Download the latest NCOS ISO file.  




## Flash the ISO to a USB Drive
You need to create a bootable USB drive using the NCOS ISO. Here are two recommended tools:


=== "Windows"

    * Download and install [Rufus](https://rufus.ie/) on your Windows PC.  
    * Open Rufus.  
    * Select your USB drive from the "Device" dropdown menu.  
    * Click "Select" and choose the NCOS ISO file.  
    * Ensure the "Partition scheme" is set to **GPT**.  
    * Leave the file system settings as default (usually FAT32).  
    * Click "Start" to begin creating the bootable USB.  
    * Once complete, safely eject the USB drive.  

=== "Linux"

    * Download and install [Etcher](https://www.balena.io/etcher/) on your system.  
    * Open Etcher.  
    * Click "Flash from file" and select the NCOS ISO file.  
    * Insert your USB drive, and Etcher will automatically detect it.  
    * Click "Flash" to begin writing the ISO to the USB drive.  
    * Wait for the process to complete.  
    * Safely remove the USB drive from your system.  
---

## Configure Your BIOS and Boot from USB
To boot into the NCOS live environment, follow these steps:

1. **Access the BIOS/UEFI:**
   	- Restart your computer and enter the BIOS/UEFI settings. The key to access the BIOS varies by manufacturer (e.g., `F2`, `F10`, `Del`, or `Esc`). Consult your system's manual for details.

2. **Disable Secure Boot:**
   	- Locate the **Secure Boot** option in your BIOS settings.
   	- **Disable** Secure Boot to allow booting from the NCOS USB.

3. **Set USB as Boot Priority:**
   	- Navigate to the **Boot Menu** in your BIOS.
   	- Set the USB drive as the first boot device.

4. **Save and Exit:**
   	- Save your changes and exit the BIOS.

---

## Step 4: Enter the Live Environment
- Insert your bootable USB drive into the target machine.
- Restart the system. It should boot directly into the NCOS live environment.
- If it doesn't boot, ensure that the USB is set as the first boot device in the BIOS settings.
---
# You're now ready to proceed with the [Installation Process](Installation.md)!

