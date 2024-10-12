const experiences = [
  {
    period: 'Nov/2023 - Now',
    title: 'Senior Healthcare Assistant',
    institution: 'TLC Carton',
  },
  {
    period: 'Feb/2023 - Nov/2023',
    title: 'Healthcare Assistant',
    institution: 'TLC Carton',
  },
  {
    period: 'Apr/2022 - Sep/2022',
    title: 'Healthcare Assistant',
    institution: 'All In Care',
  },
  {
    period: 'Feb/2020 - May/2021',
    title: 'Web Developer',
    institution: 'Farmacias Pague Menos',
  },
  {
    period: 'Apr/2019 - Feb/2020',
    title: 'Software Tester',
    institution: 'Farmacias Pague Menos',
  },
  {
    period: 'Dec/2014 - Dec/2018',
    title: 'Sub Manager',
    institution: 'Companhia do Saldo',
  },
  {
    period: 'Apr/2012 - Dec/2014',
    title: 'Seller',
    institution: 'Companhia do Saldo',
  },
];

export function GetExperiencesByUserToInsert(userId: string) {
  const experiencesByUserToInsert = experiences.map((experience) => ({
    ...experience,
    user_ID: userId
  }));

  return experiencesByUserToInsert;
};