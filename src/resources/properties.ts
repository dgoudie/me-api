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
  scalar WebsiteStackElements
  
  type Query {
    info: Info
    websiteStackItemInfo(id: String!): WebsiteStackItemInfo
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
    websiteStackElements: WebsiteStackElements!
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

  type WebsiteStackItemInfo {
    title: String!
    imageUrl: String!
    description: String
    links: [WebsiteStackItemInfoLink]
    additionalImages: [WebsiteStackItemInfoImage]
  }

  type WebsiteStackItemInfoLink {
    text: String!
    href: String!
  }

  type WebsiteStackItemInfoImage {
    url: String!
    width: Int!
    height: Int!
    title: String
  }
  `,
};

export function overwriteProperties(newProperties: any) {
  properties = { ...properties, ...newProperties };
}
