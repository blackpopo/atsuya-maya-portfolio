// =============================================================
// サイトの中身はすべてこのファイルで編集できます。
// { ja: "...", en: "..." } の形式で日英併記になります。
// =============================================================

export type Bilingual = {
  ja: string;
  en: string;
};

export const site = {
  title: 'Atsuya Matsumoto — Portfolio',
  description:
    'Personal portfolio of Atsuya Matsumoto: research, publications, and projects.',
  // ドメイン取得後にここを書き換える（OGP等で使用）
  url: 'https://atsuya-maya-portfolio.kaya-takashiro-0808.workers.dev',
};

export const profile = {
  name: {
    ja: '松本 篤弥',
    en: 'Atsuya Matsumoto',
  },
  role: {
    ja: '博士課程学生 / ヒューマンロボットインタラクション',
    en: 'Ph.D. Student / Human-Robot Interaction',
  },
  affiliation: {
    ja: '東京大学大学院（要編集：研究科・研究室名）',
    en: 'The University of Tokyo (placeholder: school / lab)',
  },
  summary: {
    ja: 'ロボットとの継続的な関係性やエージェンシー知覚をテーマに研究しています。ここに2〜3文の自己紹介を書きます。',
    en: 'I study long-term human-robot relationships and perceived agency. Write a 2-3 sentence introduction here.',
  },
  avatar: '/anime_atsuya.jpeg',
  email: 'your-email@example.com',
  links: [
    { label: 'GitHub', url: 'https://github.com/blackpopo' },
    { label: 'Google Scholar', url: 'https://scholar.google.com/' },
    { label: 'X (Twitter)', url: 'https://x.com/' },
  ],
};

export type TimelineItem = {
  period: string; // 例: '2024.04 – present'
  title: Bilingual;
  detail?: Bilingual;
};

export const education: TimelineItem[] = [
  {
    period: '2024.04 – present',
    title: {
      ja: '〇〇大学大学院 博士後期課程（要編集）',
      en: 'Ph.D. Program, XX University (placeholder)',
    },
  },
  {
    period: '2022.04 – 2024.03',
    title: {
      ja: '〇〇大学大学院 修士課程（要編集）',
      en: "Master's Program, XX University (placeholder)",
    },
  },
];

export type Publication = {
  authors: string; // 著者はそのまま表記（併記しない）
  title: string;
  venue: Bilingual;
  year: string;
  link?: string;
  badge?: Bilingual; // 例: 査読あり / Peer-reviewed
};

export const publications: {
  category: Bilingual;
  items: Publication[];
}[] = [
  {
    category: { ja: '国際会議', en: 'International Conferences' },
    items: [
      {
        authors: 'A. Takashiro, B. Author, C. Author',
        title: 'Sample Paper Title: Placeholder for Your Publication',
        venue: {
          ja: 'Proc. of XXX 2025（要編集）',
          en: 'Proc. of XXX 2025 (placeholder)',
        },
        year: '2025',
        link: 'https://example.com',
        badge: { ja: '査読あり', en: 'Peer-reviewed' },
      },
    ],
  },
  {
    category: { ja: '国内発表', en: 'Domestic Presentations' },
    items: [
      {
        authors: '高城敦也, 著者B',
        title: 'サンプル発表タイトル（要編集）',
        venue: { ja: '〇〇学会 2024', en: 'XX Society Annual Meeting 2024' },
        year: '2024',
      },
    ],
  },
  {
    category: { ja: '受賞', en: 'Awards' },
    items: [
      {
        authors: '高城敦也',
        title: 'サンプル受賞名（要編集）',
        venue: { ja: '〇〇学会', en: 'XX Society' },
        year: '2024',
      },
    ],
  },
];

export type Project = {
  name: Bilingual;
  description: Bilingual;
  tech: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    name: { ja: 'サンプルプロジェクト1', en: 'Sample Project 1' },
    description: {
      ja: 'プロジェクトの説明をここに書きます。何を作ったか、何が特徴かを1〜2文で。',
      en: 'Describe the project here in one or two sentences: what it is and what makes it interesting.',
    },
    tech: ['Python', 'React', 'WebSocket'],
    link: 'https://github.com/blackpopo',
  },
  {
    name: { ja: 'サンプルプロジェクト2', en: 'Sample Project 2' },
    description: {
      ja: '2つ目のプロジェクトの説明。',
      en: 'Description of the second project.',
    },
    tech: ['Next.js', 'Cloudflare'],
  },
];
