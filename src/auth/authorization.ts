import screens from '@/mock/screens';

const authorize = (user: any, path: string) => {
  const screen = screens.find(s => s.path === path);
  if (!screen) {
    return false;
  }

  const userRoles = user?.roles;
  const screenRoles = screen.roles;
  for (const userRole of userRoles) {
    if (screenRoles.includes(userRole)) {
      return true;
    }
  }
  return false;
};

export default (req: any, res: any, next: any) => {
  const { user } = req;
  if (!user || !authorize(user, req.path)) {
    throw new Error('Authorization failed');
  }
  return next();
};
