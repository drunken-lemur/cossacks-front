const hasAccess = (user, ...roles) => {
  return user && user.permissions && user.permissions.some(permissions => roles.includes(permissions));
};

export default hasAccess;