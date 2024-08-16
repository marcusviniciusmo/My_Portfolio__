# Back-end

## Entities

### Profile

user_ID (PK)
name
role
curriculum

### Blogs

blog_ID (PK)
user_ID (FK)
name
image
url

### Certificates

certificate_ID (PK)
user_ID (FK)
name
image
workload
instructor
institution
conclusion
type
score
sharingLink
area (FK)

### Experiences

experience_ID (PK)
user_ID (FK)
period
title
institution

### Expertises

expertise_ID (PK)
user_ID (FK)
title
text
iconClassName
icon

### Graduations

graduation_ID (PK)
user_ID (FK)
period
title
institution

### Knowledges

knowledge_ID (PK)
user_ID (FK)
description

### MenuItems

menuItem_ID (PK)
user_ID (FK)
icon
label
to

### ProfileInfo

profileInfo_ID (PK)
user_ID (FK)
label
link
data
icon
className

### Skills

skill_ID (PK)
user_ID (FK)
description
percentage

### SocialNetworks

socialNetwork_ID (PK)
user_ID (FK)
title
link
icon
className

### - CertificateAreas

area_ID (PK)
areaDescription

## User Cases

- list of User
- list of Blogs
- list of Certificates
- list of Experiences
- list of Expertises
- list of Graduations
- list of knowledges
- list of Menu Items
- list of Profile Info
- list of skills
- list of Social Networks