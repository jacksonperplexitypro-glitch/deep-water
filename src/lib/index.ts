export const ROUTE_PATHS = {
  HOME: '/'
} as const;

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  salesOfficeHours: string;
}

export const CONTACT_INFO: ContactInfo = {
  phone: '2336 3198',
  whatsapp: '+852 9876 5432',
  email: 'info@deepwatersouth.hk',
  address: '香港仔黃竹坑站港島南岸',
  salesOfficeHours: '每日 10:00 - 19:00'
};

export interface UnitType {
  id: string;
  type: '3房1套' | '3房2套' | '4房2套' | '天際特色戶';
  area: string;
  quantity: number;
  status: 'available' | 'limited' | 'sold-out';
}

export const UNIT_TYPES: UnitType[] = [
  { id: '1', type: '3房1套', area: '862-922', quantity: 68, status: 'available' },
  { id: '2', type: '3房2套', area: '918-1,000', quantity: 42, status: 'limited' },
  { id: '3', type: '4房2套', area: '1,520-1,696', quantity: 38, status: 'limited' },
  { id: '4', type: '天際特色戶', area: '2,642', quantity: 6, status: 'sold-out' }
];

export interface Amenity {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const AMENITIES: Amenity[] = [
  {
    id: '1',
    title: '無際室外泳池',
    description: '俯瞰深水灣壯麗海景的無邊際泳池',
    icon: 'pool'
  },
  {
    id: '2',
    title: '悠閒按摩池',
    description: '頂層按摩池，享受山海美景',
    icon: 'spa'
  },
  {
    id: '3',
    title: '兒童戲水池',
    description: '安全有趣的兒童專屬水上樂園',
    icon: 'kids'
  },
  {
    id: '4',
    title: '室內恆溫泳池',
    description: '全年適用的豪華室內泳池',
    icon: 'indoor-pool'
  },
  {
    id: '5',
    title: '雙會所設施',
    description: '逾100,000平方呎南法度假式會所',
    icon: 'clubhouse'
  },
  {
    id: '6',
    title: 'Rottet Studio設計',
    description: '世界頂尖設計團隊匠心傑作',
    icon: 'design'
  }
];

export const PROJECT_INFO = {
  name: 'DEEP WATER SOUTH',
  phase: '第6B期',
  subName: 'GRANDE BLANC',
  totalUnits: 154,
  location: '深水灣、壽臣山',
  developer: '會德豐地產',
  clubhouseArea: '100,000+',
  features: [
    '154伙優質住宅單位',
    '實用面積862-2,642平方呎',
    '全數3房及4房大宅',
    '部份單位覽深水灣及壽臣山景觀',
    '所有4房大宅設獨立私人升降機大堂',
    '超級樓王天際特色戶配備娛樂室及工作間'
  ]
};

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const formatPhoneNumber = (phone: string): string => {
  return phone.replace(/\s/g, '');
};

export const getWhatsAppLink = (phone: string, message?: string): string => {
  const cleanPhone = formatPhoneNumber(phone);
  const encodedMessage = message ? encodeURIComponent(message) : '';
  return `https://wa.me/${cleanPhone}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
};