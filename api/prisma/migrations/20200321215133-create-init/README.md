# Migration `20200321215133-create-init`

This migration has been generated by Terris Kremer at 3/21/2020, 9:51:33 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Contact" (
    "createdAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00',
    "email" text  NOT NULL DEFAULT '',
    "id" SERIAL,
    "message" text  NOT NULL DEFAULT '',
    "name" text  NOT NULL DEFAULT '',
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."Post" (
    "body" text  NOT NULL DEFAULT '',
    "createdAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00',
    "id" SERIAL,
    "title" text  NOT NULL DEFAULT '',
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."User" (
    "createdAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00',
    "email" text  NOT NULL DEFAULT '',
    "id" SERIAL,
    "name" text  NOT NULL DEFAULT '',
    PRIMARY KEY ("id")
) 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200321215133-create-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,35 @@
+datasource DS {
+  provider = "postgresql"
+  url = env("DATABASE_URL")
+}
+
+generator photonjs {
+  provider = "prisma-client-js"
+  binaryTargets = env("BINARY_TARGET")
+}
+
+// Define your own datamodels here and run `yarn redwood db save` to create
+// migrations for them.
+
+model Contact {
+  id        Int @id @default(autoincrement())
+  name      String
+  email     String
+  message   String
+  createdAt DateTime @default(now())
+}
+
+model Post {
+  id        Int @id @default(autoincrement())
+  title     String
+  body      String
+  createdAt DateTime @default(now())
+}
+
+model User {
+  id        Int @id @default(autoincrement())
+  name      String
+  email     String
+  createdAt DateTime @default(now())
+}
+
```


