const allRoles = {
  user: [],
  admin: ['getUsers', 'manageUsers'],
  itManager: [],
  businessManager: [],
  dmManger: [],
  salesManager: [],
  itEmployee: [],
  dmEmployee: [],
  salesEmployee: [],
  hr: [],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
