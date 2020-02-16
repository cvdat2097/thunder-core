export interface IScreen {
  roles: Array<string>;
  path: string;
}

export default [
  {
    roles: ['admin'],
    path: '/sum',
  },
] as Array<IScreen>;
