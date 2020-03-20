import { User } from '../model/user';
import { Role } from '../model/role';

const getUserByUsername = async (username: string) => {
  return await User.findOne({
    where: {
      username,
    },
    include: [
      {
        model: Role,
      },
    ],
  });
};

export default {
  getUserByUsername,
};
