CREATE TABLE "awards" (
  "award_id" serial PRIMARY KEY,
  "award_name" varchar(100),
  "created_at" timestamp
);

CREATE TABLE "genre" (
  "genre_id" serial PRIMARY KEY,
  "genre_name" varchar(100),
  "created_at" timestamp
);

CREATE TABLE "actor" (
  "actor_id" serial PRIMARY KEY,
  "actor_name" varchar(255),
  "url_actor" varchar(255),
  "created_at" timestamp
);

CREATE TABLE "countries" (
  "countries_id" serial PRIMARY KEY,
  "country_name" varchar(100),
  "created_at" timestamp
);

CREATE TABLE "availability" (
  "availability_id" serial PRIMARY KEY,
  "availability_name" varchar(100),
  "created_at" timestamp
);

CREATE TABLE "users" (
  "user_id" serial PRIMARY KEY,
  "username" varchar(255),
  "password_hash" varchar(255),
  "email" varchar(255),
  "created_at" timestamp
);

CREATE TABLE "film" (
  "film_id" serial PRIMARY KEY,
  "title" varchar(255),
  "alternative_title" varchar(255),
  "year_release" integer,
  "duration" integer,
  "url_banner" varchar(255),
  "url_trailer" varchar(255),
  "rating_film" numeric(3,1),
  "synopsis" text,
  "created_at" timestamp,
  "countries_id" integer,
  "availability_id" integer,
  "award_id" integer,
  CONSTRAINT fk_countries FOREIGN KEY ("countries_id") REFERENCES "countries" ("countries_id"),
  CONSTRAINT fk_availability FOREIGN KEY ("availability_id") REFERENCES "availability" ("availability_id"),
  CONSTRAINT fk_award FOREIGN KEY ("award_id") REFERENCES "awards" ("award_id")
);

CREATE TABLE "reviews" (
  "review_id" serial PRIMARY KEY,
  "rating_user" numeric(3,1),
  "review_text" text,
  "review_date" timestamp,
  "created_at" timestamp,
  "film_id" int,
  "user_id" int,
  CONSTRAINT fk_film FOREIGN KEY ("film_id") REFERENCES "film" ("film_id"),
  CONSTRAINT fk_user FOREIGN KEY ("user_id") REFERENCES "users" ("user_id")
);

CREATE TABLE "role" (
  "role_id" serial PRIMARY KEY,
  "role_name" varchar(100),
  "user_id" int,
  "created_at" timestamp,
  CONSTRAINT fk_user_role FOREIGN KEY ("user_id") REFERENCES "users" ("user_id")
);

CREATE TABLE "film_genre" (
  "film_id" int,
  "genre_id" int,
  CONSTRAINT fk_film_genre FOREIGN KEY ("film_id") REFERENCES "film" ("film_id"),
  CONSTRAINT fk_genre FOREIGN KEY ("genre_id") REFERENCES "genre" ("genre_id")
);

CREATE TABLE "film_actor" (
  "film_id" int,
  "actor_id" int,
  CONSTRAINT fk_film_actor FOREIGN KEY ("film_id") REFERENCES "film" ("film_id"),
  CONSTRAINT fk_actor FOREIGN KEY ("actor_id") REFERENCES "actor" ("actor_id")
);
