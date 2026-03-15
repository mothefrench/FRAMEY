-- Users base table (mirrors auth.users via Supabase)
create table if not exists public.users (
  id uuid primary key default gen_random_uuid(),
  auth_id uuid not null unique,
  name text,
  username text unique,
  email text not null unique,
  role text not null check (role in ('client', 'filmmaker', 'both')),
  profile_image text,
  location text,
  created_at timestamptz not null default now()
);

create table if not exists public.filmmaker_profiles (
  user_id uuid primary key references public.users(id) on delete cascade,
  bio text,
  skills text[],
  price_range text,
  services text[],
  portfolio_links text[],
  rating numeric(2,1),
  reviews_count integer default 0
);

create table if not exists public.jobs (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.users(id) on delete cascade,
  title text not null,
  description text,
  budget numeric,
  location text,
  deadline date,
  category text check (category in ('music_video','commercial','youtube','event','short_film','other')),
  created_at timestamptz not null default now(),
  status text not null default 'open'
);

create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  job_id uuid not null references public.jobs(id) on delete cascade,
  filmmaker_id uuid not null references public.users(id) on delete cascade,
  message text,
  price numeric,
  portfolio_reference text,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

create table if not exists public.portfolio (
  id uuid primary key default gen_random_uuid(),
  filmmaker_id uuid not null references public.users(id) on delete cascade,
  title text not null,
  description text,
  media_url text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  filmmaker_id uuid not null references public.users(id) on delete cascade,
  content text not null,
  media text[],
  created_at timestamptz not null default now()
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  sender_id uuid not null references public.users(id) on delete cascade,
  receiver_id uuid not null references public.users(id) on delete cascade,
  content text,
  attachment_url text,
  created_at timestamptz not null default now()
);

