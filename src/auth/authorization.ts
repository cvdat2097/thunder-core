import screenRepo from '@/db/repository/screen-repository';

const authorize = (user: any, path: string, screens: Array<any>) => {
  const screen = screens.find(s => s.path === path);
  if (!screen) {
    return false;
  }

  const userRoles = user?.roles.map((r: any) => r.name);
  const screenRoles = screen.roles.map((r: any) => r.name);
  for (const userRole of userRoles) {
    if (screenRoles.includes(userRole)) {
      return true;
    }
  }
  return false;
};

export default async (req: any, res: any, next: any) => {
  const { user, path } = req;
  const screens = await screenRepo.getScreenByPath(path);
  if (!user || !authorize(user, path, screens)) {
    throw new Error('Authorization failed');
  }
  return next();
};
