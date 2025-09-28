export interface Club {
  id: string;
  name: string;
  description: string;
  color?: string; // optional in case some clubs don't define it yet
  logo: string;
  about: string;
  blog: string;
  contact: string;
}
