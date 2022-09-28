import { gql } from "@apollo/client";

export const USERS_QUERY = gql`
  query {
    getAllUsers {
      results {
        id
        firstName
        lastName
        email
        contactNo
        password
        otp
        role
        createdAt
        updatedAt
      }
    }
  }
`;
