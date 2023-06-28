const user = {
  name: 'Maria Vitória',
  lastName: 'Kunz',
};

function User() {
  return <span>{`${user.name} ${user.lastName}`}</span>;
}
// Está sendo usando span pq não tem valor semântico para o html.

export default User;
