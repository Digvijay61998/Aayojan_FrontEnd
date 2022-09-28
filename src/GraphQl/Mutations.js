import {gql} from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      firstName
      lastName
      email
      contactNo
      role
      token
      createdAt
      updatedAt
    }
  }
`;
// {
//   "query": "mutation uploadFile($file:Upload!)
//   { \n uploadFile(file: $file){ url } \n } "}
  
export const SIGUP_MUTATION = gql`
  mutation RegisterUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $contactNo: String!
    $password: String!
    # $role: [UserRole]!
  ) {
    registerUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      contactNo: $contactNo
      password: $password
      # role: $role
    ) {
      id
      firstName
      lastName
      email
      contactNo
      password
      otp
      # role
      createdAt
      updatedAt
    }
  }
`;
