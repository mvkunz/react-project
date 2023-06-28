const user = {
  name: 'Maria Vitória',
  lastName: 'Kunz',
};

function Header() {
  return (
    <h1>
      {`Olá ${user.name} ${user.lastName}`}
    </h1>
  );
}

export default Header;
