-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Blogs" (
    "blog_ID" TEXT NOT NULL PRIMARY KEY,
    "user_ID" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    CONSTRAINT "Blogs_user_ID_fkey" FOREIGN KEY ("user_ID") REFERENCES "Profile" ("user_ID") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Blogs" ("blog_ID", "image", "name", "url", "user_ID") SELECT "blog_ID", "image", "name", "url", "user_ID" FROM "Blogs";
DROP TABLE "Blogs";
ALTER TABLE "new_Blogs" RENAME TO "Blogs";
CREATE TABLE "new_Certificates" (
    "certificate_ID" TEXT NOT NULL PRIMARY KEY,
    "user_ID" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "workload" TEXT,
    "instructor" TEXT,
    "institution" TEXT,
    "conclusion" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "score" TEXT,
    "sharingLink" TEXT,
    "area" TEXT NOT NULL,
    CONSTRAINT "Certificates_user_ID_fkey" FOREIGN KEY ("user_ID") REFERENCES "Profile" ("user_ID") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Certificates_type_fkey" FOREIGN KEY ("type") REFERENCES "CertificateTypes" ("type_ID") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Certificates_area_fkey" FOREIGN KEY ("area") REFERENCES "CertificateAreas" ("area_ID") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Certificates" ("area", "certificate_ID", "conclusion", "image", "institution", "instructor", "name", "score", "sharingLink", "type", "user_ID", "workload") SELECT "area", "certificate_ID", "conclusion", "image", "institution", "instructor", "name", "score", "sharingLink", "type", "user_ID", "workload" FROM "Certificates";
DROP TABLE "Certificates";
ALTER TABLE "new_Certificates" RENAME TO "Certificates";
CREATE TABLE "new_Experiences" (
    "experience_ID" TEXT NOT NULL PRIMARY KEY,
    "user_ID" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    CONSTRAINT "Experiences_user_ID_fkey" FOREIGN KEY ("user_ID") REFERENCES "Profile" ("user_ID") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Experiences" ("experience_ID", "institution", "period", "title", "user_ID") SELECT "experience_ID", "institution", "period", "title", "user_ID" FROM "Experiences";
DROP TABLE "Experiences";
ALTER TABLE "new_Experiences" RENAME TO "Experiences";
CREATE TABLE "new_Expertises" (
    "expertise_ID" TEXT NOT NULL PRIMARY KEY,
    "user_ID" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "iconClassName" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    CONSTRAINT "Expertises_user_ID_fkey" FOREIGN KEY ("user_ID") REFERENCES "Profile" ("user_ID") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Expertises_icon_fkey" FOREIGN KEY ("icon") REFERENCES "Icons" ("icon_ID") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Expertises" ("expertise_ID", "icon", "iconClassName", "text", "title", "user_ID") SELECT "expertise_ID", "icon", "iconClassName", "text", "title", "user_ID" FROM "Expertises";
DROP TABLE "Expertises";
ALTER TABLE "new_Expertises" RENAME TO "Expertises";
CREATE TABLE "new_Graduations" (
    "graduation_ID" TEXT NOT NULL PRIMARY KEY,
    "user_ID" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    CONSTRAINT "Graduations_user_ID_fkey" FOREIGN KEY ("user_ID") REFERENCES "Profile" ("user_ID") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Graduations" ("graduation_ID", "institution", "period", "title", "user_ID") SELECT "graduation_ID", "institution", "period", "title", "user_ID" FROM "Graduations";
DROP TABLE "Graduations";
ALTER TABLE "new_Graduations" RENAME TO "Graduations";
CREATE TABLE "new_Knowledges" (
    "knowledge_ID" TEXT NOT NULL PRIMARY KEY,
    "user_ID" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    CONSTRAINT "Knowledges_user_ID_fkey" FOREIGN KEY ("user_ID") REFERENCES "Profile" ("user_ID") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Knowledges" ("description", "knowledge_ID", "user_ID") SELECT "description", "knowledge_ID", "user_ID" FROM "Knowledges";
DROP TABLE "Knowledges";
ALTER TABLE "new_Knowledges" RENAME TO "Knowledges";
CREATE TABLE "new_MenuItems" (
    "menuItem_ID" TEXT NOT NULL PRIMARY KEY,
    "user_ID" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    CONSTRAINT "MenuItems_user_ID_fkey" FOREIGN KEY ("user_ID") REFERENCES "Profile" ("user_ID") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "MenuItems_icon_fkey" FOREIGN KEY ("icon") REFERENCES "Icons" ("icon_ID") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_MenuItems" ("icon", "label", "menuItem_ID", "to", "user_ID") SELECT "icon", "label", "menuItem_ID", "to", "user_ID" FROM "MenuItems";
DROP TABLE "MenuItems";
ALTER TABLE "new_MenuItems" RENAME TO "MenuItems";
CREATE TABLE "new_ProfileInfo" (
    "profileInfo_ID" TEXT NOT NULL PRIMARY KEY,
    "user_ID" TEXT NOT NULL,
    "className" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "link" TEXT,
    "data" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    CONSTRAINT "ProfileInfo_user_ID_fkey" FOREIGN KEY ("user_ID") REFERENCES "Profile" ("user_ID") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ProfileInfo_icon_fkey" FOREIGN KEY ("icon") REFERENCES "Icons" ("icon_ID") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ProfileInfo" ("className", "data", "icon", "label", "link", "profileInfo_ID", "user_ID") SELECT "className", "data", "icon", "label", "link", "profileInfo_ID", "user_ID" FROM "ProfileInfo";
DROP TABLE "ProfileInfo";
ALTER TABLE "new_ProfileInfo" RENAME TO "ProfileInfo";
CREATE TABLE "new_Skills" (
    "skill_ID" TEXT NOT NULL PRIMARY KEY,
    "user_ID" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "percentage" INTEGER NOT NULL,
    CONSTRAINT "Skills_user_ID_fkey" FOREIGN KEY ("user_ID") REFERENCES "Profile" ("user_ID") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Skills" ("description", "percentage", "skill_ID", "user_ID") SELECT "description", "percentage", "skill_ID", "user_ID" FROM "Skills";
DROP TABLE "Skills";
ALTER TABLE "new_Skills" RENAME TO "Skills";
CREATE TABLE "new_SocialNetworks" (
    "socialNetwork_ID" TEXT NOT NULL PRIMARY KEY,
    "user_ID" TEXT NOT NULL,
    "className" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    CONSTRAINT "SocialNetworks_user_ID_fkey" FOREIGN KEY ("user_ID") REFERENCES "Profile" ("user_ID") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "SocialNetworks_icon_fkey" FOREIGN KEY ("icon") REFERENCES "Icons" ("icon_ID") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_SocialNetworks" ("className", "icon", "link", "socialNetwork_ID", "title", "user_ID") SELECT "className", "icon", "link", "socialNetwork_ID", "title", "user_ID" FROM "SocialNetworks";
DROP TABLE "SocialNetworks";
ALTER TABLE "new_SocialNetworks" RENAME TO "SocialNetworks";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
