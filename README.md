# cs2-relay-blocker
node app to block/unblock certain relays for counter-strike 2 by configuring firewall rules

### Prerequisites
- Install [Node.js](https://nodejs.org/en/)

### Installing
- Clone the repository
```
git clone https://github.com/19EB/cs2-relay-blocker
```

- Install dependencies
```
npm install
```

### Running the server blocker

  - Run a terminal with elevated privileges (run as administrator)

To block a relay, run the following command
```
npm run block <relay>

e.g
npm run block hel
```

To unblock a relay
```
npm run unblock <relay>

e.g
npm run unblock hel
```

### Available relays
```
[
  { ams: 'Amsterdam (Netherlands)' },
  { atl: 'Atlanta (Georgia)' },
  { dfw: 'Dallas (Texas)' },
  { dxb: 'Dubai (United Arab Emirates)' },
  { eze: 'Buenos Aires (Argentina)' },
  { fra: 'Frankfurt (Germany)' },
  { gru: 'Sao Paulo (Brazil)' },
  { hel: 'Helsinki (Finland)' },
  { hkg: 'Hong Kong' },
  { iad: 'Sterling (Virginia)' },
  { jfk: 'New York' },
  { jnb: 'Johannesburg (South Africa)' },
  { lax: 'Los Angeles (California)' },
  { lhr: 'London (England)' },
  { lim: 'Lima (Peru)' },
  { mad: 'Madrid (Spain)' },
  { ord: 'Chicago (Illinois)' },
  { par: 'Paris (France)' },
  { pwg: 'Perfect World Guangdong 1 (China)' },
  { pwj: 'Perfect World Tianjin (China)' },
  { pwu: 'Perfect World Hebei (China)' },
  { pww: 'Perfect World Wuhan (China)' },
  { pwz: 'Perfect World Zhejiang (China)' },
  { scl: 'Santiago (Chile)' },
  { sea: 'Seattle (Washington)' },
  { seo: 'Seoul (South Korea)' },
  { sgp: 'Singapore' },
  { shb: 'Perfect World (sha-4) Backbone (Shanghai, China)' },
  { sto: 'Stockholm - Kista (Sweden)' },
  { syd: 'Sydney (Australia)' },
  { tyo: 'Tokyo Koto City (Japan)' },
  { vie: 'Vienna (Austria)' },
  { waw: 'Warsaw (Poland)' },
  { bom2: 'Mumbai (India)' },
  { maa2: 'Chennai - Ambattur (India)' },
  { sto2: 'Stockholm - Bromma (Sweden)' },
  { canm: 'Perfect World Guangdong 2 - Mobile (China)' },
  { ctum: 'Alibaba Cloud Chengdu - Mobile (China)' },
  { pvgm: 'Alibaba Cloud Shanghai Alicloud - Mobile (China)' },
  { sham: 'Perfect World Shanghai - Mobile (China)' },
  { tsnm: 'Perfect World Tianjin - Mobile (China)' },
  { cant: 'Perfect World Guangdong 2 - Telecom (China)' },
  { ctut: 'Alibaba Cloud Chengdu - Telecom (China)' },
  { pvgt: 'Alibaba Cloud Shanghai Alicloud - Telecom (China)' },
  { shat: 'Perfect World Shanghai - Telecom (China)' },
  { tsnt: 'Perfect World Tianjin - Telecom (China)' },
  { canu: 'Perfect World Guangdong 2 - Unicom (China)' },
  { ctuu: 'Alibaba Cloud Chengdu - Unicom (China)' },
  { pvgu: 'Alibaba Cloud Shanghai Alicloud - Unicom (China)' },
  { shau: 'Perfect World Shanghai - Unicom (China)' },
  { tsnu: 'Perfect World Tianjin - Unicom (China)' }
]
```