# Antarctic Station Digital Twin – Maitri & Bharati

A digital twin and telemetry dashboard for India's Antarctic research stations: **Maitri** (Schirmacher Oasis, 70.77°S 11.73°E) and **Bharati** (Larsemann Hills, 69.41°S 76.19°E).

![Antarctic Station Twin](https://img.shields.io/badge/Antarctic-Digital--Twin-0f79b3?style=for-the-badge)
![Telemetry](https://img.shields.io/badge/Telemetry-Simulated-7fd3f7?style=for-the-badge)
![Dataset](https://img.shields.io/badge/Dataset-NCPOR%20%2F%20NPDC-5fd6a5?style=for-the-badge)

---

## ❄ Features

- **Interactive Station Schematic**: Real-time virtual twin schematic site plan. Inspect modules including Living & Lab Module, Power House, Fuel Store, Comms Mast, Met Station, and Logistics Yard.
- **Operator Authentication Gateway (`login.html`)**:
  - Polar-themed secure gateway with glassmorphism and cyan ice highlights.
  - Multi-station selector (**Maitri Station** vs. **Bharati Station**).
  - Clearance roles: *Station Commander*, *Scientific Lead*, *Systems Engineer*.
  - 1-Click quick demo credentials for rapid testing.
  - Simulated **INSAT-4CR SATCOM** transponder handshake and cryptographic key verification.
- **Station Infrastructure**:
  - Live equipment health indicators (Living modules, power house, water & waste plant, heating, comms mast).
  - Automated maintenance planner with alerts and overdue tasks tracking.
- **Energy Management**:
  - Dynamic 24-hour generation vs. load polyline chart.
  - Generator statuses (DG-1, DG-2, DG-3) and battery bank telemetry.
- **Logistics & Inventory**:
  - Supply levels (Diesel reserve, food stores, spare parts, medical supplies).
  - Transit logistics tracker (Cape Town / Goa / Ship routes).
- **Environmental Data Integration**:
  - Integration with **NCPOR / NPDC** public datasets.
  - CSV parser for meteorological data (temperature, wind, atmospheric pressure, relative humidity).
  - Unaltered reference image/screenshot viewer with lightbox inspection.
- **Responsive & Accessible**:
  - Built-in **Light / Dark** theme switcher.
  - Fully responsive mobile navigation bar with touch-friendly layout.

---

## 🚀 How to Run

### Option 1: Direct File (No Install Required)
Simply open `login.html` or `index.html` in any modern web browser:
```bash
# Windows
start login.html
```

### Option 2: Local Node.js Server
Run the built-in HTTP server:
```bash
node server.js
```
Then navigate to:
- **Login Portal**: [http://localhost:3000/login.html](http://localhost:3000/login.html) (or [http://localhost:3000/](http://localhost:3000/))
- **Dashboard**: [http://localhost:3000/index.html](http://localhost:3000/index.html)

---

## 📂 Project Structure

```text
├── login.html      # Secure polar authentication portal
├── index.html      # Antarctic digital twin telemetry dashboard
├── server.js       # Lightweight Node.js static server
├── README.md       # Project documentation
└── README.txt      # Original reference notes
```

---

## 🛰 Data Attribution & Disclaimer
Environmental and meteorological reference parameters are structured for public **NCPOR** (National Centre for Polar and Ocean Research) / **NPDC** datasets. Station operational parameters (generator load, battery telemetry, equipment condition) are simulated for prototype demonstration.
