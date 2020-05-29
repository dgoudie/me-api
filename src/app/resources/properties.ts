export let properties = {
  serviceName: process.env.npm_package_name,
  serviceShortName: process.env.npm_package_name.replace(/-v[0-9]+/, ''),
  serviceVersion: process.env.npm_package_name.replace(/.+-(v[0-9]+)/, '$1'),
  serviceDescription: process.env.npm_package_description,
  serverPort: 80,
  mongodbDbName: null,
  mongodbCollectionName: 'INFO',
  grapqlSchema: `    
  type Query {
    info: Info
  }

  type Info {
      name: String!
      title: String!
      links: [Link]!
      about: [String]!
      education: [EducationItem]!
      workExperience: [WorkExperienceItem]!
      interests: [String]!
      topSkills: [TopSkill]!
      builtWith: [BuiltWithItem]!
  }

  type Link {
      text: String!
      textForPrint: String!
      link: String!
      icon: String!
  }

  type EducationItem {
      icon: String!
      title: String!
      secondaryInfo: [String]!
  }

  type WorkExperienceItem {
      icon: String!
      company: String!
      jobTitle: String!
      startMonth: String!
      startYear: Int!
      endMonth: String!
      endYear: Int
  }

  type TopSkill {
      name: String!
      percentage: Int!
  }

  type BuiltWithItem {
      icon: String!
      name: String!
      link: String
  }`,
};

export function overwriteProperties(newProperties: any) {
  properties = { ...properties, ...newProperties };
}
