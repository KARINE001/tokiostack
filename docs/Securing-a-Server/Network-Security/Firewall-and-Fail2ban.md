# Configuring a Firewall & Fail2ban

Blocking unauthorized access improves security.

1. Allow necessary ports:

   ```bash
   sudo ufw allow 2222/tcp
   sudo ufw allow 80/tcp
   sudo ufw allow 443/tcp
   sudo ufw enable
   ```
2. Install Fail2ban:

   ```bash
   sudo apt-get install fail2ban
   ```
3. Configure Fail2ban:

   ```bash
   sudo nano /etc/fail2ban/jail.local
   ```
   Add:

   ```bash
   [sshd]
   enabled = true
   port = 2222
   logpath = /var/log/auth.log
   maxretry = 3
   ```
4. Restart Fail2ban:

   ```bash
   sudo systemctl restart fail2ban
   ```
