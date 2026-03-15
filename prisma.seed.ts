// Example seed data for Framey (for reference / local scripts)
export const users = [
  {
    id: '00000000-0000-0000-0000-000000000001',
    name: 'Lena Morales',
    username: 'lenamorales',
    email: 'lena@example.com',
    role: 'filmmaker',
    location: 'Los Angeles, CA'
  },
  {
    id: '00000000-0000-0000-0000-000000000002',
    name: 'Atlas Studio',
    username: 'atlasstudio',
    email: 'producer@example.com',
    role: 'client',
    location: 'Berlin, DE'
  }
];

export const filmmakerProfiles = [
  {
    user_id: users[0].id,
    bio: 'Director & DP crafting cinematic campaigns and music videos.',
    skills: ['Director', 'DP', 'Editor'],
    price_range: '$5k–$20k',
    portfolio_links: ['https://vimeo.com/12345678']
  }
];

export const jobs = [
  {
    id: '10000000-0000-0000-0000-000000000001',
    client_id: users[1].id,
    title: 'Launch film for new SaaS product',
    description: 'Story-driven launch film with founder interviews and product visuals.',
    budget: 12000,
    location: 'Remote',
    deadline: '2026-06-01',
    category: 'commercial'
  }
];

export const posts = [
  {
    id: '20000000-0000-0000-0000-000000000001',
    filmmaker_id: users[0].id,
    content: 'Available for music video shoots in LA and NYC this summer.',
    media: []
  }
];

export const messages = [
  {
    id: '30000000-0000-0000-0000-000000000001',
    sender_id: users[1].id,
    receiver_id: users[0].id,
    content: 'Loved your latest spot. Are you open for a fintech launch campaign?'
  }
];

