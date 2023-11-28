CREATE SCHEMA IF NOT EXISTS public;
CREATE EXTENSION IF NOT EXISTS pg_trgm;

CREATE TABLE IF NOT EXISTS public.user (
    id varchar(255) NOT NULL primary key,
    username varchar(255),
    full_name varchar(255),
    email varchar(255),
    roles varchar(255)[],
    avatar_url varchar,
    anonymous boolean NOT NULL default false,
    is_premium_user boolean NOT NULL default false,
    updated_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(id)
);
ALTER TABLE public.user OWNER TO root;
comment on table public.user is 'Basic user information';

CREATE TABLE IF NOT EXISTS public.task (
    id varchar(255) NOT NULL primary key,
    parent_task_id varchar(255),
    user_id varchar(255) NOT NULL,
    query varchar(255),
    status varchar(255),
    updated_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(query)
);
ALTER TABLE public.task OWNER TO root;

CREATE TABLE IF NOT EXISTS public.channel (
    id varchar(255) NOT NULL primary key,
    task_id varchar(255) NOT NULL,
    channel varchar(255) NOT NULL,
    updated_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE public.channel OWNER TO root;


CREATE TABLE IF NOT EXISTS public.youtube_leads (
    id varchar(255) NOT NULL primary key,
    first_name varchar(255),
    last_name varchar(255),
    emails text,
    description varchar,
    keywords varchar,
    channel_url varchar(255),
    channel_name varchar(255),
    channel_handle varchar(255),
    subscribers varchar(255),
    urls text,
    subscribers_value bigint,
    scraping_failed boolean NOT NULL DEFAULT false,
    updated_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(emails)
    );
ALTER TABLE public.youtube_leads OWNER TO root;
comment on table public.youtube_leads is 'Leads for user acquisition';

CREATE TABLE IF NOT EXISTS public.visits (
    id varchar(255) NOT NULL primary key,
    url varchar(255),
    updated_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(id)
    );
ALTER TABLE public.visits OWNER TO root;
comment on table public.visits is 'Urls visited by the crawler';

CREATE TABLE IF NOT EXISTS public.leads (
    id varchar(255) NOT NULL primary key,
    first_name varchar(255),
    last_name varchar(255),
    description text,
    email varchar(255),
    keywords text,
    phone_number varchar(255),
    reason_valid text,
    job_title varchar(255),
    gender varchar(255),
    country varchar(255),
    city varchar(255),
    state varchar(255),
    industry varchar(255),
    company_name varchar(255),
    website varchar(255),
    linkedin_profile varchar(255),
    age bigint,
    thumbnail text,
    company_size bigint,
    verified boolean NOT NULL default false,
    updated_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(email)
    );
ALTER TABLE public.leads OWNER TO root;

CREATE TABLE IF NOT EXISTS public.user_leads (
    id varchar(255) NOT NULL primary key,
    lead_id varchar(255) NOT NULL,
    user_id varchar(255) NOT NULL,
    created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(lead_id, user_id)
);
ALTER TABLE public.user_leads OWNER TO root;

CREATE TABLE IF NOT EXISTS public.query_leads (
    id varchar(255) NOT NULL primary key,
    lead_id varchar(255) NOT NULL,
    task_id varchar(255) NOT NULL,
    created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(lead_id, task_id)
);
ALTER TABLE public.query_leads OWNER TO root;

CREATE TABLE IF NOT EXISTS public.entitlements (
    id varchar(255) NOT NULL primary key,
    user_id varchar(255) NOT NULL,
    max_lead_count bigint NOT NULL DEFAULT 0,
    updated_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(id, user_id)
);
ALTER TABLE public.entitlements OWNER TO root;

CREATE TABLE IF NOT EXISTS public.email_verification (
    id varchar(255) NOT NULL primary key,
    lead_id varchar(255) NOT NULL,
    is_valid_format boolean NOT NULL DEFAULT false,
    is_domain_valid boolean NOT NULL DEFAULT false,
    is_disposable_email boolean NOT NULL DEFAULT false,
    is_mx_valid boolean NOT NULL DEFAULT false,
    is_smtp_valid boolean NOT NULL DEFAULT false,
    is_catchall_email boolean NOT NULL DEFAULT false,
    is_role_email boolean NOT NULL DEFAULT false,
    updated_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(lead_id)
);
ALTER TABLE public.email_verification OWNER TO root;
