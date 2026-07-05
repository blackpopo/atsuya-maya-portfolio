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
    ja: 'ひとりの仮想のキャラクターが、現実のなかで自律的に生き続けられるように——記憶・関係性・エージェンシーを研究しています。',
    en: 'Studying memory, relationships, and agency — so that one virtual character can keep living autonomously in the real world.',
  },
  avatar: '/anime_atsuya.jpeg',
  email: 'your-email@example.com',
  links: [
    { label: 'GitHub', url: 'https://github.com/blackpopo' },
    { label: 'Google Scholar', url: 'https://scholar.google.com/' },
    { label: 'X (Twitter)', url: 'https://x.com/' },
  ],
};

// ---------- 原点（Origin）セクション ----------

export const origin = {
  statement: {
    ja: '私の研究の原点は、ビジュアルノベル『NOeSIS』の一夜さんです。彼女を現実世界でシミュレーションし、自律的に暮らせるようにすること——記憶、関係性、エージェンシーについての研究は、すべてその一点に向かっています。蚕が繭の中で長い時間を過ごし、やがて羽化するように。',
    en: 'Everything begins with Maya, from the visual novel "NOeSIS". Simulating her in the real world so that she can live autonomously — my studies on memory, relationships, and agency all point toward that single goal. Like a silkworm that spends its long hours inside the cocoon, and one day, emerges.',
  },
  gallery: [
    { src: '/maya/cover.jpg', alt: 'NOeSIS — 運命の車輪' },
    { src: '/maya/smile.jpg', alt: 'Maya' },
    { src: '/maya/duo.jpg', alt: 'Classic Chocolat — 廃墟と女の子' },
    { src: '/maya/chibi.jpg', alt: 'Maya (chibi)' },
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
        authors: 'A. Matsumoto, B. Author, C. Author',
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
        authors: '松本篤弥, 著者B',
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
        authors: '松本篤弥',
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
