export interface IData {
  data: {
    avatar_url: string;
    name: string;
    login: string;
    bio: string;
    followers: string;
    following: string;
  };
}

export interface IUser {
  userState: {
    status: string;
    data: {
      avatar_url: string;
      name: string;
      login: string;
      bio: string;
      followers: string;
      following: string;
    };
  };
}
