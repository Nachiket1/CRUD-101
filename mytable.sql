CREATE TABLE "Tasks" ( 
  "id" serial NOT NULL,
  "activity" VARCHAR(255) NOT NULL, 
  CONSTRAINT "Users_pk" PRIMARY KEY ("id") 
  ) WITH (
  OIDS=FALSE 
);