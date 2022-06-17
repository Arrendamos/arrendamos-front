
const useAuth = () => {
    const user = localStorage.getItem('user');
    return user ? true : false;
};

const adminAuth = () => {
    localStorage.setItem('user', JSON.stringify({
        rol: 1,
        admin_token: '1234'
    }))
    const user = localStorage.getItem('user');
    const { rol, admin_token } = JSON.parse(user!);
    return (rol === 1) && admin_token ? true : false;
}
export { useAuth, adminAuth };
