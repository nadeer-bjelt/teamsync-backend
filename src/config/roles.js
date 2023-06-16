const allRoles = {
  user: [],
  admin: ['getUsers', 'manageUsers'],
  itManager: [],
  businessManager: [],
  dmManger: [],
  salesManager: [],
  itMember: [],
  dmEmployee: [],
  salesEmployee: [],
  hr: [],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));
