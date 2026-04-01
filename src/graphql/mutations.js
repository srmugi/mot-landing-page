/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEntry = /* GraphQL */ `
  mutation CreateEntry(
    $input: CreateEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    createEntry(input: $input, condition: $condition) {
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
export const updateEntry = /* GraphQL */ `
  mutation UpdateEntry(
    $input: UpdateEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    updateEntry(input: $input, condition: $condition) {
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
export const deleteEntry = /* GraphQL */ `
  mutation DeleteEntry(
    $input: DeleteEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    deleteEntry(input: $input, condition: $condition) {
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
export const createInquiry = /* GraphQL */ `
  mutation CreateInquiry(
    $input: CreateInquiryInput!
    $condition: ModelInquiryConditionInput
  ) {
    createInquiry(input: $input, condition: $condition) {
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
export const updateInquiry = /* GraphQL */ `
  mutation UpdateInquiry(
    $input: UpdateInquiryInput!
    $condition: ModelInquiryConditionInput
  ) {
    updateInquiry(input: $input, condition: $condition) {
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
export const deleteInquiry = /* GraphQL */ `
  mutation DeleteInquiry(
    $input: DeleteInquiryInput!
    $condition: ModelInquiryConditionInput
  ) {
    deleteInquiry(input: $input, condition: $condition) {
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
export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createPageContent = /* GraphQL */ `
  mutation CreatePageContent(
    $input: CreatePageContentInput!
    $condition: ModelPageContentConditionInput
  ) {
    createPageContent(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      code
      content
    }
  }
`;
export const updatePageContent = /* GraphQL */ `
  mutation UpdatePageContent(
    $input: UpdatePageContentInput!
    $condition: ModelPageContentConditionInput
  ) {
    updatePageContent(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      code
      content
    }
  }
`;
export const deletePageContent = /* GraphQL */ `
  mutation DeletePageContent(
    $input: DeletePageContentInput!
    $condition: ModelPageContentConditionInput
  ) {
    deletePageContent(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      code
      content
    }
  }
`;
