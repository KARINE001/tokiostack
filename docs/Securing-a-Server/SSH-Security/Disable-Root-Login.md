# Disabling Root Login

Direct root login is a security risk. Disable it to enforce non-root user access.

1. Edit SSH config:

   ```bash
   sudo nano /etc/ssh/sshd_config
   ```
2. Modify the setting:

   ```bash
   PermitRootLogin no
   ```
3. Restart SSH:

   ```bash
   sudo systemctl restart ssh
   ```
