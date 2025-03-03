# Creating a Non-Root User

A non-root user adds security for daily operations.

1. Create a new user:

   ```bash
   sudo adduser youruser
   ```
2. Grant sudo privileges:

   ```bash
   sudo usermod -aG sudo youruser
   ```
3. Test login:

   ```bash
   ssh -p 2222 youruser@<vps_ip_address>
   sudo ls /root
   ```
