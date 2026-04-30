# Live Market Analysis

**Maintained by Paritosh Sawai**  
GitHub: [paritoshsawai](https://github.com/paritoshsawai)  
LinkedIn: [paritoshsawai](https://www.linkedin.com/in/paritoshsawai/)

Portfolio-focused real-time global intelligence dashboard with live market, geopolitical, infrastructure, and signal monitoring.

**Real-time global intelligence dashboard** — AI-powered news aggregation, geopolitical monitoring, and infrastructure tracking in a unified situational awareness interface.

[![GitHub stars](https://img.shields.io/github/stars/paritoshsawai/Live-Market-Tracker?style=social)](https://github.com/paritoshsawai/Live-Market-Tracker/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/paritoshsawai/Live-Market-Tracker?style=social)](https://github.com/paritoshsawai/Live-Market-Tracker/network/members)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Last commit](https://img.shields.io/github/last-commit/paritoshsawai/Live-Market-Tracker)](https://github.com/paritoshsawai/Live-Market-Tracker/commits/main)

<p align="center">
  <a href="https://github.com/paritoshsawai/Live-Market-Tracker"><img src="https://img.shields.io/badge/Repository-Live_Market_Tracker-1f6feb?style=for-the-badge&logo=github&logoColor=white" alt="Repository"></a>&nbsp;
  <a href="https://github.com/paritoshsawai"><img src="https://img.shields.io/badge/Maintainer-Paritosh_Sawai-0f766e?style=for-the-badge&logo=github&logoColor=white" alt="Maintainer"></a>&nbsp;
  <a href="https://www.linkedin.com/in/paritoshsawai/"><img src="https://img.shields.io/badge/LinkedIn-Paritosh_Sawai-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Portfolio_Project-8b5cf6?style=for-the-badge" alt="Portfolio Project">&nbsp;
  <img src="https://img.shields.io/badge/Usage-Research_Only-f59e0b?style=for-the-badge" alt="Research Only">&nbsp;
  <img src="https://img.shields.io/badge/Mode-Public_Dashboard-111827?style=for-the-badge" alt="Public Dashboard">
</p>

<p align="center">
  <a href="https://github.com/paritoshsawai/Live-Market-Tracker"><strong>Repository</strong></a> &nbsp;·&nbsp;
  <a href="https://github.com/paritoshsawai"><strong>GitHub Profile</strong></a> &nbsp;·&nbsp;
  <a href="https://www.linkedin.com/in/paritoshsawai/"><strong>LinkedIn</strong></a>
</p>

![Live Market Analysis Dashboard](docs/images/worldmonitor-7-mar-2026.jpg)

---

## What It Does

- **500+ curated news feeds** across 15 categories, AI-synthesized into briefs
- **Dual map engine** — 3D globe (globe.gl) and WebGL flat map (deck.gl) with 45 data layers
- **Cross-stream correlation** — military, economic, disaster, and escalation signal convergence
- **Country Intelligence Index** — composite risk scoring across 12 signal categories
- **Finance radar** — 92 stock exchanges, commodities, crypto, and 7-signal market composite
- **Local AI** — run everything with Ollama, no API keys required
- **5 site variants** from a single codebase (world, tech, finance, commodity, happy)
- **Native desktop app** (Tauri 2) for macOS, Windows, and Linux
- **21 languages** with native-language feeds and RTL support

This repository focuses on the live dashboard experience, market monitoring, geopolitical signals, and research-oriented situational awareness workflows.

---

## Quick Start

```bash
git clone https://github.com/paritoshsawai/Live-Market-Tracker.git
cd Live-Market-Tracker
npm install
npm run dev
```

Open [http://127.0.0.1:3002](http://127.0.0.1:3002). No environment variables required for basic operation.

For variant-specific development:

```bash
npm run dev:tech       # tech.worldmonitor.app
npm run dev:finance    # finance.worldmonitor.app
npm run dev:commodity  # commodity.worldmonitor.app
npm run dev:happy      # happy.worldmonitor.app
```

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | Vanilla TypeScript, Vite, globe.gl + Three.js, deck.gl + MapLibre GL |
| **Desktop** | Tauri 2 (Rust) with Node.js sidecar |
| **AI/ML** | Ollama / Groq / OpenRouter, Transformers.js (browser-side) |
| **API Contracts** | Protocol Buffers (92 protos, 22 services), sebuf HTTP annotations |
| **Deployment** | Vite, web app shell, Tauri desktop support |
| **Caching** | Redis (Upstash), 3-tier cache, CDN, service worker |

---

## Flight Data

Flight and transport-related data in this project depends on the upstream integrations and availability of external providers in your local/runtime environment.

---

## Data Sources

This project aggregates a broad set of external data sources across geopolitics, finance, energy, climate, aviation, cyber, military, infrastructure, and news intelligence.

---

## Contributing

Contributions welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

```bash
npm run typecheck        # Type checking
npm run build:full       # Production build
```

---

## Derivative Notice

- Original project: [World Monitor](https://github.com/koala73/worldmonitor)
- Original author: **Elie Habib**
- This repository contains local modifications, UI changes, and portfolio-oriented adjustments by **Paritosh Sawai**
- Redistribution remains subject to the original AGPL license and any additional terms stated by the upstream project

See [NOTICE.md](NOTICE.md) and [LICENSE](LICENSE).

---

## License

**AGPL-3.0** for non-commercial use. **Commercial license** required for any commercial use.

| Use Case | Allowed? |
|----------|----------|
| Personal / research / educational | Yes |
| Self-hosted (non-commercial) | Yes, with attribution |
| Fork and modify (non-commercial) | Yes, share source under AGPL-3.0 |
| Commercial use / SaaS / rebranding | Requires commercial license |

See [LICENSE](LICENSE) for full terms. For commercial licensing, contact the maintainer.

Copyright (C) 2024-2026 Elie Habib. All rights reserved.

---

## Maintainer

**Paritosh Sawai** — [GitHub](https://github.com/paritoshsawai) · [LinkedIn](https://www.linkedin.com/in/paritoshsawai/)

## Security Acknowledgments

We thank the following researchers for responsibly disclosing security issues:

- **Cody Richard** — Disclosed three security findings covering IPC command exposure, renderer-to-sidecar trust boundary analysis, and fetch patch credential injection architecture (2026)

See our [Security Policy](./SECURITY.md) for responsible disclosure guidelines.
