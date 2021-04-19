export let properties = {
  serviceName: process.env.npm_package_name,
  serviceShortName: process.env.npm_package_name!.replace(/-v[0-9]+/, ''),
  serviceVersion: process.env.npm_package_name!.replace(/.+-(v[0-9]+)/, '$1'),
  serviceDescription: process.env.npm_package_description,
  serverPort: 8080,
  mongodbDbName: null,
  mongodbInfoCollectionName: 'INFO',
  mongodbEducationCollectionName: 'EDUCATION',
  mongodbLinksCollectionName: 'LINKS',
  mongodbTopSkillsCollectionName: 'TOP_SKILLS',
  mongodbWorkExperienceCollectionName: 'WORK_EXPERIENCE',
  mongodbWebsiteStackElementsCollectionName: 'WEBSITE_STACK_NODES',
  mongodbWebsiteStackEdgesCollectionName: 'WEBSITE_STACK_EDGES',
  graphQlTypeDefs: ` 
  scalar Date
  scalar WebsiteStackGraphElement
  scalar WebsiteStackDialogElementData
  scalar Edge
  
  type Query {
    info: Info!
    links: [Link]!
    education: [EducationItem]!
    workExperience: [WorkExperienceItem]!
    topSkills: [TopSkill]!
    websiteStackNodes: [WebsiteStackGraphElement]!
    websiteStackEdges: [Edge]!
    websiteStackDialog(id: String!): WebsiteStackDialogElementData
  }
  
  type Info {
    name: String!
    title: String!
    imageUrl: String!
    about: [String]!
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
  `,
};

export function overwriteProperties(newProperties: any) {
  properties = { ...properties, ...newProperties };
}
