create table if not exists public.visionary_reviews (
  id bigint generated always as identity primary key,
  person_id text not null,
  rating integer not null check (rating between 1 and 10),
  comment text,
  created_at timestamptz not null default now()
);

alter table public.visionary_reviews enable row level security;

drop policy if exists "Anyone can read visionary reviews" on public.visionary_reviews;
create policy "Anyone can read visionary reviews"
on public.visionary_reviews
for select
to anon
using (true);

drop policy if exists "Anyone can add visionary reviews" on public.visionary_reviews;
create policy "Anyone can add visionary reviews"
on public.visionary_reviews
for insert
to anon
with check (
  person_id <> ''
  and rating between 1 and 10
  and char_length(coalesce(comment, '')) <= 500
);

create index if not exists visionary_reviews_person_created_idx
on public.visionary_reviews (person_id, created_at desc);

create table if not exists public.visionary_suggestions (
  id bigint generated always as identity primary key,
  name text not null,
  domain text not null,
  source_url text not null,
  reason text not null,
  contact text,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

alter table public.visionary_suggestions enable row level security;

drop policy if exists "Anyone can add visionary suggestions" on public.visionary_suggestions;
create policy "Anyone can add visionary suggestions"
on public.visionary_suggestions
for insert
to anon
with check (
  name <> ''
  and domain <> ''
  and source_url <> ''
  and reason <> ''
  and char_length(name) <= 120
  and char_length(domain) <= 140
  and char_length(source_url) <= 400
  and char_length(coalesce(contact, '')) <= 140
  and char_length(reason) <= 900
  and status = 'pending'
);

create index if not exists visionary_suggestions_created_idx
on public.visionary_suggestions (created_at desc);
