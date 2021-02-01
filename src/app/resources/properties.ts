export let properties = {
  serviceName: process.env.npm_package_name,
  serviceShortName: process.env.npm_package_name.replace(/-v[0-9]+/, ''),
  serviceVersion: process.env.npm_package_name.replace(/.+-(v[0-9]+)/, '$1'),
  serviceDescription: process.env.npm_package_description,
  serverPort: 8080,
  mongodbDbName: null,
  mongodbCollectionName: 'INFO',
  graphQlTypeDefs: ` 
  scalar Date
  
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
    faIcon: String!
    name: String!
  }
  
  type EducationItem {
    iconUrl: String!
    title: String!
    secondaryInfo: [String]!
  }
  
  type WorkExperienceItem {
    iconUrl: String!
    company: String!
    jobTitle: String!
    startDate: Date!
    endDate: Date
    description: String!
  }
  
  type TopSkill {
    name: String!
    percentage: Int!
  }
  
  type BuiltWithItem {
    iconUrl: String!
    name: String!
    links: [BuiltWithItemLink]
  }
  
  type BuiltWithItemLink {
    text: String!
    url: String!
  }
  `,
};

export function overwriteProperties(newProperties: any) {
  properties = { ...properties, ...newProperties };
}
