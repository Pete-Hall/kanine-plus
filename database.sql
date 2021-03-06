
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- Create origin table (Rescue Breeder, Unknown, Adoption)
CREATE TABLE "origin" (
	"id" SERIAL PRIMARY KEY,
	"type" VARCHAR (255)
);

-- Create driving_route table (Emerson, Tangletown, Misfits, Far, Floater, Undecided)
CREATE TABLE "driving_route" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (255)
);

-- Create dog table
CREATE TABLE "dog" (
	"id" SERIAL PRIMARY KEY,
	"dog_name" VARCHAR (255),
	"address" VARCHAR (1000),
	"breed" VARCHAR (255),
	"age" VARCHAR (255),
	"gender" VARCHAR (255),
	"monday" BOOLEAN,
	"tuesday" BOOLEAN,
	"wednesday" BOOLEAN,
	"thursday" BOOLEAN,
	"friday" BOOLEAN,
	"owner_name" VARCHAR (255),
	"owner_email" VARCHAR (255),
	"owner_phone_one" VARCHAR (255),
	"owner_phone_two" VARCHAR (255),
	"pick_up" VARCHAR (1000),
	"drop_off" VARCHAR (1000),
	"gender" VARCHAR (255),
	"image" VARCHAR (1000),
	"userID" integer
);

-- Create the note table
CREATE TABLE "note" (
	"id" SERIAL PRIMARY KEY,
	"content" VARCHAR (1000),
	"date" VARCHAR (255)
);

-- Add in data for origin
INSERT INTO origin ("type") VALUES ('Rescue'), ('Breeder'), ('Unknown'), ('Adoption');

-- Add in data for driving_route
INSERT INTO driving_route ("name") VALUES ('Emerson'), ('Tangletown'), ('Misfits'), ('Far'), ('Floater'), ('Undecided');

-- Add a foreign key to the dog table for the origin 
ALTER TABLE "public"."dog"
  ADD COLUMN "originID" integer,
  ADD FOREIGN KEY ("originID") REFERENCES "public"."origin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Add a foreign key to the dog table for the driving route
ALTER TABLE "public"."dog"
  ADD COLUMN "driving_routeID" integer,
  ADD FOREIGN KEY ("driving_routeID") REFERENCES "public"."driving_route"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Add a foreign key to the note table for the dog
ALTER TABLE "public"."note"
  ADD COLUMN "dogID" integer,
  ADD FOREIGN KEY ("dogID") REFERENCES "public"."dog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Add a forign key to the note table for the user
ALTER TABLE "public"."note"
  ADD COLUMN "userID" integer,
  ADD FOREIGN KEY ("userID") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Add in a sample dog to have some data starting out
INSERT INTO dog ("dog_name", "address", "breed", "age", "monday", "tuesday", "wednesday", "thursday", "friday", "owner_name", "owner_email", "owner_phone_one", "owner_phone_two", "pick_up", "drop_off", "originID", "driving_routeID") VALUES ('Tillie', '2809 W Minnehaha Pkwy, #200, Minneapolis, MN 55417', 'English Cocker Spaniel', 10, true, false, true, false, true, 'Pete Hall', 'pete.mack.hall@gmail.com', 815-123-4567, 815-098-8765, 'Front door. Key. Call for Tillie.', 'Front door. Loose in house is OK.', 2, 5);

