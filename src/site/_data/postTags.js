const tags = {
  '3d': {
    title: '3D',
    description: 'Our latest news, updates, and stories about 3D.',
  },
  accessibility: {
    title: 'Accessibility',
  },
  amp: {
    title: 'AMP',
    description: 'Our latest news, updates, and stories about AMP.',
  },
  analytics: {
    title: 'Analytics',
  },
  audio: {
    title: 'Audio',
  },
  'augmented-reality': {
    title: 'Augmented Reality',
  },
  canvas: {
    title: 'Canvas',
  },
  capabilities: {
    title: 'Capabilities',
  },
  'case-study': {
    title: 'Case Study',
    description: 'Our latest news, updates, and stories about case studies.',
  },
  cast: {
    title: 'Cast',
  },
  'chrome-ux-report': {
    title: 'Chrome UX Report',
    description:
      'Our latest news, updates, and stories about Chrome UX Report.',
  },
  'chrome-dev-summit': {
    title: 'Chrome Dev Summit',
    description:
      'Our latest news, updates, and stories about Chrome Dev Summit.',
  },
  'content-security-policy': {
    title: 'Content Security Policy',
  },
  cookies: {
    title: 'Cookies',
  },
  cors: {
    title: 'CORS',
    description: 'Our latest news, updates, and stories about CORS.',
  },
  css: {
    title: 'CSS',
    description: 'Our latest news, updates, and stories about CSS.',
  },
  devtools: {
    title: 'DevTools',
    description: 'Our latest news, updates, and stories about DevTools.',
  },
  dom: {
    title: 'DOM',
    description: 'Our latest news, updates, and stories about DOM.',
  },
  encryption: {
    title: 'Encryption',
  },
  'engineering-blog': {
    title: 'Engineering Blog',
    description:
      'Our latest news, updates, and stories from our engineering team.',
  },
  'feature-policy': {
    title: 'Feature Policy',
  },
  'file-system': {
    title: 'File System',
  },
  fonts: {
    title: 'Fonts',
  },
  forms: {
    title: 'Forms',
  },
  fugu: {
    title: 'Fugu',
    description: 'Our latest news, updates, and stories about Fugu.',
  },
  games: {
    title: 'Games',
  },
  graphics: {
    title: 'Graphics',
  },
  houdini: {
    title: 'Houdini',
    description: 'Our latest news, updates, and stories about Houdini.',
  },
  identity: {
    title: 'Identity',
  },
  images: {
    title: 'Images',
  },
  install: {
    title: 'Install',
  },
  intl: {
    title: 'Intl',
  },
  iot: {
    title: 'IoT',
    description: 'Our latest news, updates, and stories about IoT.',
  },
  javascript: {
    title: 'JavaScript',
    description: 'Our latest news, updates, and stories about JavaScript.',
  },
  layout: {
    title: 'Layout',
  },
  lighthouse: {
    title: 'Lighthouse',
    description: 'Our latest news, updates, and stories about Lighthouse.',
  },
  media: {
    title: 'Media',
  },
  'media-queries': {
    title: 'Media Queries',
  },
  metrics: {
    title: 'Metrics',
  },
  mobile: {
    title: 'Mobile',
  },
  modules: {
    title: 'Modules',
  },
  monetization: {
    title: 'Monetization',
  },
  network: {
    title: 'Network',
  },
  node: {
    title: 'Node',
  },
  notifications: {
    title: 'Notifications',
  },
  offline: {
    title: 'Offline',
  },
  'origin-trials': {
    title: 'Origin Trials',
  },
  payments: {
    title: 'Payments',
  },
  performance: {
    title: 'Performance',
  },
  permissions: {
    title: 'Permissions',
  },
  'progressive-web-apps': {
    title: 'Progressive Web Apps',
  },
  puppeteer: {
    title: 'Puppeteer',
    description: 'Our latest news, updates, and stories about Puppeteer.',
  },
  rendering: {
    title: 'Rendering',
  },
  security: {
    title: 'Security',
  },
  seo: {
    title: 'SEO',
    description: 'Our latest news, updates, and stories about SEO.',
  },
  'service-worker': {
    title: 'Service Worker',
  },
  storage: {
    title: 'Storage',
  },
  svg: {
    title: 'SVG',
    description: 'Our latest news, updates, and stories about SVG.',
  },
  testing: {
    title: 'Testing',
  },
  ux: {
    title: 'UX',
    description: 'Our latest news, updates, and stories about UX.',
  },
  'virtual-reality': {
    title: 'Virtual Reality',
  },
  'web-assembly': {
    title: 'Web Assembly',
  },
  'web-bundles': {
    title: 'Web Bundles',
  },
  'web-vitals': {
    title: 'Web Vitals',
    description: 'Our latest news, updates, and stories about Web Vitals.',
  },
  webxr: {
    title: 'WebXR',
    description: 'Our latest news, updates, and stories about WebXR.',
  },
};

const postTags = {};

Object.keys(tags).forEach((key) => {
  const tag = tags[key];
  const description = tag.description
    ? tag.description
    : `Our latest news, updates, and stories about ${tag.title.toLowerCase()}.`;

  postTags[key] = {
    ...tag,
    description,
    href: `/tags/${key}/`,
    key,
  };
});

module.exports = postTags;
