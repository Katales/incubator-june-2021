import {environment} from "../../environments/environment";

const baseUrl = environment.API_URL;

export const API_URL = {
  USERS: `${baseUrl}/users`,
  POSTS: `${baseUrl}/posts`,
  COMMENTS: `${baseUrl}/comments`,
}
