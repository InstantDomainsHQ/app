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

CREATE TABLE IF NOT EXISTS public.domains (
    id varchar(255) NOT NULL primary key,
    domain_name varchar(255) NOT NULL,
    created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(domain_name)
);
ALTER TABLE public.domains OWNER TO root;

CREATE TABLE IF NOT EXISTS public.tlds (
    id varchar(255) NOT NULL primary key,
    domain_id varchar(255) NOT NULL,
    tld varchar(255) NOT NULL,
    registrar_name varchar(255) NOT NULL,
    registrar_url varchar(255) NOT NULL,
    whois_url varchar(255) NOT NULL,
    registered_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL,
    expires_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(domain_id, tld)
);
ALTER TABLE public.tlds OWNER TO root;