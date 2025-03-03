# System Updates & Monitoring

Keeping your system updated is crucial.

1. Enable automatic updates:

   ```bash
   sudo apt-get install unattended-upgrades
   sudo dpkg-reconfigure --priority=low unattended-upgrades
   ```
2. Monitor logs for security events:

   ```bash
   sudo tail -f /var/log/auth.log
   sudo journalctl -xe
   ```
