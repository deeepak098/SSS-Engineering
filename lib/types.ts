export type Tray = {
  id: string;
  name: string;
  size: string; // e.g. "30-hole standard"
  capacity: number; // egg count
  material: string; // e.g. "molded fiber (recycled pulp)"
  images: string[]; // URLs
  moq: number; // minimum order quantity
  slug: string;
  createdAt?: Date;
};

export type MachineCategory = 'semi-automatic' | 'fully-automatic';

export type MachineSpec = {
  power: string; // e.g. "4.5 kW"
  rawMaterial: string; // e.g. "waste paper / cardboard"
  dimensions: string; // e.g. "2800 x 1200 x 1850 mm"
};

export type Machine = {
  id: string;
  name: string;
  category: MachineCategory;
  capacityPerHour: number; // pieces/hour
  specs: MachineSpec;
  images: string[]; // URLs
  videoUrl?: string;
  brochurePdfUrl: string; // URL to stored PDF
  exportReady: boolean;
  slug: string;
  createdAt?: Date;
};

export type InquiryType = 'tray' | 'machine';

export type Inquiry = {
  id?: string;
  type: InquiryType;
  name: string;
  phone: string;
  email?: string;
  country?: string;
  message: string;
  productRef?: string; // tray name or machine name
  status: 'new' | 'contacted' | 'quoted' | 'closed';
  createdAt: Date;
};
