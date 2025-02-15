# **System Maintenance Guide**

### Maintaining NCOS ensures a smooth and efficient system. Follow these Directions to keep your system up to date and running optimally.

## Keeping the System Updated
To update all packages, run:
```bash
sudo pacman -Syu
```
To update AUR packages only, run:
```bash
yay --aur
```
For a full system upgrade including AUR packages :
```bash
yay 
```
---
## Cleaning Up the System
### Removing Unused Packages
!!!warning
	Always double check the package list before deleting
To remove orphaned packages:
```bash
sudo pacman -Rns $(pacman -Qdtq)
```

### Clearing the Package Cache
To free up disk space:
```bash
sudo pacman -Sc  # Remove old package versions
sudo pacman -Scc # Remove all cached packages
```
---
## Managing Services
Check the status of a service:
```bash
systemctl status <service-name>
```
Enable a service at startup:
```bash
sudo systemctl enable <service-name>
```
Disable a service:
```bash
sudo systemctl disable <service-name>
```
Restart a service:
```bash
sudo systemctl restart <service-name>
```
---
## Checking System Logs
View logs for troubleshooting:
```bash
journalctl -xe
```
View logs for a specific service:
```bash
journalctl -u <service-name> --no-pager
```
---
## Monitoring System Resources
To check system resource usage:
```bash
htop 
```
To check disk usage:
```bash
df -h
```
---


