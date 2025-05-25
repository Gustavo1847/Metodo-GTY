import { Button } from "@/components/ui/button";
const ProofSection = () => {
  const scrollToSignup = () => {
    window.location.href = '/captura';
  };
  return <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Um Mercado Validado e Uma Oportunidade Real
        </h2>
        
        <div className="border border-orange-100 p-6 md:p-8 rounded-xl mb-14 bg-orange-50">
          <p className="text-lg mb-4 font-medium text-center">
            Esta é a primeira turma oficial da Imersão Método GTY, e você será parte do grupo pioneiro
          </p>
          
          <div className="mb-6 p-5 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-orange-600">Resultados validados pelo criador do método:</h3>
            
            <ul className="space-y-3 mb-4">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mais de <strong>R$ 10.000</strong> em faturamento mensal utilizando exatamente o mesmo método</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>De <strong>0 a 20 clientes recorrentes</strong> nos primeiros 45 dias de operação</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Taxa de conversão de <strong>87% para serviços recorrentes</strong> após o primeiro atendimento</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Primeiro contrato com <strong>empresa de pequeno porte</strong> fechado em 60 dias</span>
              </li>
            </ul>
          </div>
          
          <div className="p-5 bg-white rounded-lg shadow-sm mb-6">
            <h3 className="text-xl font-bold mb-4 text-orange-600">Dados do setor (Fonte: ABRALAV):</h3>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-orange-500 mr-2 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span>O mercado de estética automotiva cresceu <strong>32% nos últimos 3 anos</strong> no Brasil</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-orange-500 mr-2 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span>Menos de <strong>8% dos serviços de lavagem</strong> no país utilizam o método a seco</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-orange-500 mr-2 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span>Crescente <strong>conscientização ambiental</strong> favorece métodos que economizam água</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-orange-500 mr-2 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span>Previsão de <strong>crescimento contínuo</strong> do setor nos próximos 5 anos</span>
              </li>
            </ul>
          </div>
          
          <p className="text-center font-bold mb-2">
            Você fará parte da primeira turma oficial!
          </p>
          <p className="text-center text-gray-600 mb-6">
            Isso significa que receberá atenção especial e será um dos primeiros casos de sucesso do método.
          </p>
          
          <div className="text-center">
            <Button onClick={scrollToSignup} className="text-white font-bold px-6 rounded-lg bg-orange-600 hover:bg-orange-500 py-[30px]">
              QUERO FAZER PARTE DESSE GRUPO PIONEIRO
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default ProofSection;