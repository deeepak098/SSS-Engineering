export const SITE_NAME = 'SSS Engineering';
export const TAGLINE = 'Moulded fibre trays. Production machinery.';
export const BUSINESS_BODY =
  'Twenty-five years manufacturing moulded fibre egg trays for Indian poultry producers and building the tray-making machinery that is now running in 45 countries.';
export const FOUNDED_YEAR = 1999;

export const TRUST = {
  years: 25,
  countries: 45,
  machinesInstalled: 320,
} as const;

// Fallback catalogue — used when Firestore is empty so spec tables demonstrate real density.
// Shape matches `lib/types.ts` exactly.
export type FallbackTray = {
  name: string;
  slug: string;
  size: string;
  capacity: number;
  material: string;
  moq: string;
  images: string[];
};

export type FallbackMachine = {
  name: string;
  slug: string;
  category: 'semi-automatic' | 'fully-automatic';
  capacityPerHour: number;
  specs: { power: string; rawMaterial: string; dimensions: string };
  images: string[];
  brochurePdfUrl: string;
  exportReady: boolean;
};

export const FALLBACK_TRAYS: FallbackTray[] = [
  {
    name: '30-egg standard',
    slug: '30-egg-standard',
    size: '298 × 298 × 48 mm',
    capacity: 30,
    material: 'Moulded fibre — recycled kraft pulp',
    moq: '50,000 pcs',
    images: ['/trays/30std-1.jpg'],
  },
  {
    name: '18-egg retail',
    slug: '18-egg-retail',
    size: '270 × 165 × 52 mm',
    capacity: 18,
    material: 'Moulded fibre — recycled kraft pulp',
    moq: '30,000 pcs',
    images: ['/trays/18ret-1.jpg'],
  },
  {
    name: '12-egg retail',
    slug: '12-egg-retail',
    size: '182 × 152 × 56 mm',
    capacity: 12,
    material: 'Moulded fibre — bleached kraft pulp',
    moq: '20,000 pcs',
    images: ['/trays/12ret-1.jpg'],
  },
  {
    name: '6-egg retail',
    slug: '6-egg-retail',
    size: '152 × 98 × 54 mm',
    capacity: 6,
    material: 'Moulded fibre — bleached kraft pulp',
    moq: '15,000 pcs',
    images: ['/trays/6ret-1.jpg'],
  },
];

export const FALLBACK_MACHINES: FallbackMachine[] = [
  {
    name: 'SSS 1500 — Semi-automatic line',
    slug: 'sss-1500-semi',
    category: 'semi-automatic',
    capacityPerHour: 1500,
    specs: {
      power: '3.5 kW',
      rawMaterial: 'Waste paper / OCC, water, starch',
      dimensions: '2400 × 1100 × 1750 mm',
    },
    images: ['/machines/1500-1.jpg'],
    brochurePdfUrl: '/brochures/SSS-1500-spec.pdf',
    exportReady: true,
  },
  {
    name: 'SSS 3000 — Fully automatic line',
    slug: 'sss-3000-auto',
    category: 'fully-automatic',
    capacityPerHour: 3000,
    specs: {
      power: '6.2 kW',
      rawMaterial: 'Waste paper / OCC, water, starch',
      dimensions: '3200 × 1300 × 1900 mm',
    },
    images: ['/machines/3000-1.jpg'],
    brochurePdfUrl: '/brochures/SSS-3000-spec.pdf',
    exportReady: true,
  },
  {
    name: 'SSS 4500 — Fully automatic line',
    slug: 'sss-4500-auto',
    category: 'fully-automatic',
    capacityPerHour: 4500,
    specs: {
      power: '9.0 kW',
      rawMaterial: 'Waste paper / OCC, water, starch',
      dimensions: '3800 × 1400 × 2050 mm',
    },
    images: ['/machines/4500-1.jpg'],
    brochurePdfUrl: '/brochures/SSS-4500-spec.pdf',
    exportReady: true,
  },
];

export const EXPORT_COUNTRIES: string[] = [
  'Kenya',
  'Ethiopia',
  'Nigeria',
  'Ghana',
  'Tanzania',
  'Uganda',
  'Rwanda',
  'Zambia',
  'South Africa',
  'Egypt',
  'Morocco',
  'Saudi Arabia',
  'UAE',
  'Qatar',
  'Oman',
  'Iran',
  'Turkey',
  'Jordan',
  'Vietnam',
  'Thailand',
  'Indonesia',
  'Philippines',
  'Malaysia',
  'Bangladesh',
  'Nepal',
  'Sri Lanka',
  'Myanmar',
  'Brazil',
  'Argentina',
  'Colombia',
  'Peru',
  'Ecuador',
  'Mexico',
  'Guatemala',
  'Honduras',
];

export const MANUFACTURING_STEPS = [
  {
    n: '01',
    title: 'Pulping',
    desc: 'Waste paper and OCC are hydrapulped with water and starch into a screened fibre slurry at controlled consistency.',
  },
  {
    n: '02',
    title: 'Moulding',
    desc: 'Slurry is vacuum-formed onto aluminium moulds — 30, 18, 12 or 6 cavities — then wet-pressed for dimensional accuracy.',
  },
  {
    n: '03',
    title: 'Drying',
    desc: 'Wet trays travel through a multi-deck hot-air dryer. Moisture drops below 8% before the next station.',
  },
  {
    n: '04',
    title: 'Trimming & stacking',
    desc: 'Hot-press trimming cleans the rim; an inline stacker counts and bundles trays ready for packing.',
  },
  {
    n: '05',
    title: 'Packing & despatch',
    desc: 'Bundles are poly-wrapped, palletised, and loaded for domestic fleet or sea-freight crating for export machinery clients.',
  },
] as const;
