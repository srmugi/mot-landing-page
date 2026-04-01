/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEntry = /* GraphQL */ `
  subscription OnCreateEntry($filter: ModelSubscriptionEntryFilterInput) {
    onCreateEntry(filter: $filter) {
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
export const onUpdateEntry = /* GraphQL */ `
  subscription OnUpdateEntry($filter: ModelSubscriptionEntryFilterInput) {
    onUpdateEntry(filter: $filter) {
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
export const onDeleteEntry = /* GraphQL */ `
  subscription OnDeleteEntry($filter: ModelSubscriptionEntryFilterInput) {
    onDeleteEntry(filter: $filter) {
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
export const onCreateInquiry = /* GraphQL */ `
  subscription OnCreateInquiry($filter: ModelSubscriptionInquiryFilterInput) {
    onCreateInquiry(filter: $filter) {
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
export const onUpdateInquiry = /* GraphQL */ `
  subscription OnUpdateInquiry($filter: ModelSubscriptionInquiryFilterInput) {
    onUpdateInquiry(filter: $filter) {
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
export const onDeleteInquiry = /* GraphQL */ `
  subscription OnDeleteInquiry($filter: ModelSubscriptionInquiryFilterInput) {
    onDeleteInquiry(filter: $filter) {
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
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onCreateBlog(filter: $filter) {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onUpdateBlog(filter: $filter) {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog($filter: ModelSubscriptionBlogFilterInput) {
    onDeleteBlog(filter: $filter) {
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
export const onCreatePageContent = /* GraphQL */ `
  subscription OnCreatePageContent(
    $filter: ModelSubscriptionPageContentFilterInput
  ) {
    onCreatePageContent(filter: $filter) {
      id
      createdAt
      updatedAt
      code
      content
    }
  }
`;
export const onUpdatePageContent = /* GraphQL */ `
  subscription OnUpdatePageContent(
    $filter: ModelSubscriptionPageContentFilterInput
  ) {
    onUpdatePageContent(filter: $filter) {
      id
      createdAt
      updatedAt
      code
      content
    }
  }
`;
export const onDeletePageContent = /* GraphQL */ `
  subscription OnDeletePageContent(
    $filter: ModelSubscriptionPageContentFilterInput
  ) {
    onDeletePageContent(filter: $filter) {
      id
      createdAt
      updatedAt
      code
      content
    }
  }
`;
