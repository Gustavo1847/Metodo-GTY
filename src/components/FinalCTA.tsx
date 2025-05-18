import { Button } from "@/components/ui/button";
const FinalCTA = () => {
  const scrollToSignup = () => {
    const element = document.getElementById("signup");
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-br from-blue-800 to-blue-900 text-white rounded-xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <span className="inline-block bg-orange-500 text-white-900 font-bold px-4 py-1 rounded-full text-sm mb-4">
                ÚLTIMAS VAGAS DISPONÍVEIS
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                É Hora de Tomar Uma Decisão
              </h2>
              
              <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
                Você pode continuar onde está, enfrentando os mesmos desafios de sempre... 
                Ou pode dar o primeiro passo para transformar sua realidade com um negócio próprio.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Lembre-se que esta oferta inclui:</h3>
              
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>3 sessões ao vivo do Método GTY</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>30 dias de suporte direto com o criador do método</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Plano de ação completo para alcançar R$10 mil em 60 dias</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>5 bônus exclusivos para a primeira turma</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Garantia dupla de satisfação e resultados</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center space-y-6">
              <div>
                <p className="mb-2">Preço exclusivo para a primeira turma:</p>
                <p className="text-2xl md:text-3xl font-bold">R$ 497 <span className="text-base font-normal opacity-80">ou 12x de R$ 48,42</span></p>
              </div>
              
              <Button onClick={scrollToSignup} size="xl" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold text-base md:text-lg rounded-lg shadow-lg transform transition-transform hover:scale-105 mx-4">
                <span className="hidden md:inline">SIM! EU QUERO ENTRAR NA PRIMEIRA TURMA DO MÉTODO GTY E TRANSFORMAR MINHA REALIDADE</span>
                <span className="md:hidden">QUERO ENTRAR NA PRIMEIRA TURMA DO MÉTODO GTY</span>
              </Button>
              
              <div>
                <p className="text-sm opacity-80">
                  Nas próximas edições, o investimento será maior e o acesso a alguns bônus exclusivos não estará mais disponível.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FinalCTA;