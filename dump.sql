CREATE TABLE "public.products" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"qtt" int NOT NULL,
	"image" char NOT NULL,
	"desc" char,
	CONSTRAINT "products_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




