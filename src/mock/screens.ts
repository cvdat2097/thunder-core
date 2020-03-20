export interface IScreen {
  roles: Array<any>;
  path: string;
}

export default [
  {
    roles: [{ name: 'Admin' }],
    path: '/sum',
  },
] as Array<IScreen>;
