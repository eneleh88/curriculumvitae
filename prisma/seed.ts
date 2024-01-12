import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  // Sample data for Certification
  await prisma.certification.createMany({
    data: [
      {
        certificationName: 'Sample Certification 1',
        issuedBy: 'Sample Issuer 1',
        earnedDate: new Date('2022-01-01'),
        credentialId: '123456',
        credentialLink: 'https://example.com/certification/123456',
        profileId: 1,
      },
    ],
  });

  // Sample data for Education
  await prisma.education.createMany({
    data: [
      {
        institution: 'Sample University',
        startYear: new Date('2018-01-01'),
        endYear: new Date('2022-01-01'),
        degree: 'Bachelor of Science',
        profileId: 1,
      },
    ],
  });

  // Sample data for Experience
  await prisma.experience.createMany({
    data: [
      {
        workplace: 'Sample Company',
        startDate: new Date('2022-01-01'),
        endDate: new Date('2024-01-01'),
        role: 'Software Engineer',
        profileId: 1,
      },
      // Add more Experience entries as needed
    ],
  });

  // Sample data for Profile
  await prisma.profile.createMany({
    data: [
      {
        name: 'Annie Doe',
        birth: new Date('1990-01-01'),
        location: 'Sample City',
        skills: ['JavaScript', 'React', 'Node.js', 'Azure', 'CSS', 'HTML', 'JSON', 'Git', 'SQL'],
        profileText: 'A passionate software engineer with experience in web development.',
      },
    ],
  });

  // Sample data for Social
  await prisma.social.createMany({
    data: [
      {
        name: 'GitHub',
        icon: '<GitHub />',
        link: 'https://github.com/',
        profileId: 1,
      },
    ],
  });

  // Sample data for Strength
  await prisma.strength.createMany({
    data: [
      {
        name: 'Teamwork',
        icon: '<Diversity3Icon />',
        profileId: 1,
      },
    ],
  });
}

try {
  await seed();
  await prisma.$disconnect();
} catch (e) {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
}