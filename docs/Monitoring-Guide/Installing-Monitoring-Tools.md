# Installing Grafana & Prometheus

Setting up monitoring tools ensures node performance and uptime.

1. Install Prometheus:

   ```bash
   sudo apt update && sudo apt install prometheus -y
   ```
2. Install Grafana:

   ```bash
   sudo apt install -y software-properties-common
   sudo add-apt-repository "deb https://packages.grafana.com/oss/deb stable main"
   sudo apt update && sudo apt install grafana -y
   ```
3. Start services:

   ```bash
   sudo systemctl enable --now prometheus
   sudo systemctl enable --now grafana-server
   ```
