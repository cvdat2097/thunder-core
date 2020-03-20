import { Screen } from '../model/screen';
import { Role } from '../model/role';

const getScreenByPath = async (path: string) => {
  return await Screen.findAll({
    where: {
      path,
    },
    include: [
      {
        model: Role,
      },
    ],
  });
};

export default {
  getScreenByPath,
};
