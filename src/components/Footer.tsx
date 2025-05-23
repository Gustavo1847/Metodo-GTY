const Footer = () => {
  return <footer className="bg-blue-900 text-gray-400 py-10 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <p className="mb-4">© 2025 Método GTY - Todos os direitos reservados</p>
          
          <div className="flex flex-wrap justify-center gap-4 md:space-x-6 mb-6">
            <a href="#" className="hover:text-white py-2 px-3">Termos de Uso</a>
            <a href="#" className="hover:text-white py-2 px-3">Política de Privacidade</a>
            <a href="#" className="hover:text-white py-2 px-3">Contato</a>
          </div>
          
          <p className="text-xs max-w-lg mx-auto">
            Os resultados apresentados não são garantia de ganhos. Os ganhos dependem de fatores individuais como 
            dedicação, implementação e persistência. Este site não é afiliado ao Facebook, Google ou qualquer
            outra plataforma mencionada.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;