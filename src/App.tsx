// Componente principal da aplicação. Os componentes tem que iniciar em maiúsculo!
// É o primeiro componente React e corresponde à sua aplicação propriamente dita. É nele que você vai adicionar os principais elementos que vão compor sua aplicação. Além disso, todos os componentes da aplicação deverão ser chamados pelo App ou por seus componentes-filhos (há mais informações sobre componentes adiante no conteúdo).
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Header />
      <p>Hello World</p>
      <Footer />
    </div>
  );
}

export default App;
