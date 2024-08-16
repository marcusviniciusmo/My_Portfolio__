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
type (FK)
score
sharingLink
area (FK)

### - CertificateAreas

area_ID (PK)
areaDescription

### - CertificateTypes

type_ID (PK)
typeDescription

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
icon (FK)

### Graduations

graduation_ID (PK)
user_ID (FK)
period
title
institution

### Icons

icon_ID (PK)
iconDescription

### Knowledges

knowledge_ID (PK)
user_ID (FK)
description

### MenuItems

menuItem_ID (PK)
user_ID (FK)
to
label
icon (FK)

### ProfileInfo

profileInfo_ID (PK)
user_ID (FK)
className
label
link
data
icon (FK)

### Skills

skill_ID (PK)
user_ID (FK)
description
percentage

### SocialNetworks

socialNetwork_ID (PK)
user_ID (FK)
className
title
link
icon (FK)

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