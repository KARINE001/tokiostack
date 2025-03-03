# Changing the SSH Port

Changing the default SSH port reduces automated attacks.

1. Edit the SSH config:

   ```bash
   sudo nano /etc/ssh/sshd_config
   ```
2. Set a new port:

   ```bash
   #Port 22  (Comment out this line)
   Port 2222  (Use a custom port)
   ```
3. Update firewall:

   ```bash
   sudo ufw allow 2222/tcp
   sudo ufw delete allow 22/tcp
   sudo ufw reload
   ```
4. Restart SSH:

   ```bash
   sudo systemctl restart ssh
   ```
5. Test the connection:

   ```bash
   ssh -p 2222 youruser@<vps_ip_address>
   ```
