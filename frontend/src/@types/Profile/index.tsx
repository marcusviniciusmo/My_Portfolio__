export interface ProfileType {
  id: string;
  name: string;
  role: string;
  curriculum: string;
}

export const ProfileInitialState: ProfileType = {
  id: '',
  name: '',
  role: '',
  curriculum: '',
};
