const userAuth = () => {
  // const user = localStorage.getItem('user');
  return true;
};

const adminAuth = () => {
  localStorage.setItem(
    "user",
    JSON.stringify({
      rol: 1,
      admin_token: "1234",
    })
  );
  const user = localStorage.getItem("user");
  const { rol, admin_token } = JSON.parse(user!);
  return rol === 1 && admin_token ? true : false;
};
export { userAuth, adminAuth };
