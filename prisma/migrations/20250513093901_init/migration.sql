/*
  Warnings:

  - You are about to drop the column `subject` on the `Volunteer` table. All the data in the column will be lost.
  - Added the required column `subjectExpertise` to the `Volunteer` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Volunteer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "subjectExpertise" TEXT NOT NULL,
    "availability" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Volunteer" ("availability", "createdAt", "email", "id", "name") SELECT "availability", "createdAt", "email", "id", "name" FROM "Volunteer";
DROP TABLE "Volunteer";
ALTER TABLE "new_Volunteer" RENAME TO "Volunteer";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
