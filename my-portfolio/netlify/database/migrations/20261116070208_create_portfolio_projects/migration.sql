CREATE TABLE "portfolio_collections" (
	"name" text PRIMARY KEY,
	"initialized" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE "portfolio_projects" (
	"id" text PRIMARY KEY,
	"title" text NOT NULL,
	"description" text DEFAULT '' NOT NULL,
	"tech" text DEFAULT '' NOT NULL,
	"image" text DEFAULT '' NOT NULL,
	"github" text DEFAULT '' NOT NULL,
	"live" text DEFAULT '' NOT NULL,
	"position" integer DEFAULT 0 NOT NULL
);
