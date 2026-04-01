/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEntry = /* GraphQL */ `
  query GetEntry($id: ID!) {
    getEntry(id: $id) {
      id
      createdAt
      updatedAt
      employmentType
      desiredOccupation
      location
      fullName
      furigana
      postCode
      address
      phoneNumber
      birthDate
      gender
      email
      education
      qualification
      type
    }
  }
`;
export const listEntries = /* GraphQL */ `
  query ListEntries(
    $filter: ModelEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        employmentType
        desiredOccupation
        location
        fullName
        furigana
        postCode
        address
        phoneNumber
        birthDate
        gender
        email
        education
        qualification
        type
      }
      nextToken
    }
  }
`;
export const getInquiry = /* GraphQL */ `
  query GetInquiry($id: ID!) {
    getInquiry(id: $id) {
      id
      createdAt
      updatedAt
      companyName
      name
      email
      phoneNumber
      title
      content
      type
    }
  }
`;
export const listInquiries = /* GraphQL */ `
  query ListInquiries(
    $filter: ModelInquiryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInquiries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        companyName
        name
        email
        phoneNumber
        title
        content
        type
      }
      nextToken
    }
  }
`;
export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      createdAt
      updatedAt
      code
      title
      description
      cover
      status
      content
      type
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        code
        title
        description
        cover
        status
        content
        type
      }
      nextToken
    }
  }
`;
export const getPageContent = /* GraphQL */ `
  query GetPageContent($id: ID!) {
    getPageContent(id: $id) {
      id
      createdAt
      updatedAt
      code
      content
    }
  }
`;
export const listPageContents = /* GraphQL */ `
  query ListPageContents(
    $filter: ModelPageContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPageContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        code
        content
      }
      nextToken
    }
  }
`;
export const entriesByType = /* GraphQL */ `
  query EntriesByType(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    EntriesByType(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        updatedAt
        employmentType
        desiredOccupation
        location
        fullName
        furigana
        postCode
        address
        phoneNumber
        birthDate
        gender
        email
        education
        qualification
        type
      }
      nextToken
    }
  }
`;
export const inquiriesByType = /* GraphQL */ `
  query InquiriesByType(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelInquiryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    InquiriesByType(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        updatedAt
        companyName
        name
        email
        phoneNumber
        title
        content
        type
      }
      nextToken
    }
  }
`;
export const blogByCode = /* GraphQL */ `
  query BlogByCode(
    $code: String!
    $sortDirection: ModelSortDirection
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    BlogByCode(
      code: $code
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        updatedAt
        code
        title
        description
        cover
        status
        content
        type
      }
      nextToken
    }
  }
`;
export const blogsByStatus = /* GraphQL */ `
  query BlogsByStatus(
    $status: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    BlogsByStatus(
      status: $status
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        updatedAt
        code
        title
        description
        cover
        status
        content
        type
      }
      nextToken
    }
  }
`;
export const blogsByType = /* GraphQL */ `
  query BlogsByType(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    BlogsByType(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        updatedAt
        code
        title
        description
        cover
        status
        content
        type
      }
      nextToken
    }
  }
`;
export const pageContentByCode = /* GraphQL */ `
  query PageContentByCode(
    $code: String!
    $sortDirection: ModelSortDirection
    $filter: ModelPageContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    PageContentByCode(
      code: $code
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        updatedAt
        code
        content
      }
      nextToken
    }
  }
`;
