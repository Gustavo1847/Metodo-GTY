
import { Button } from "@/components/ui/button";

const OfferSection = () => {
  return (
    <section id="signup" className="py-16 px-4 bg-gradient-to-b from-blue-800 to-blue-900 text-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <span className="inline-block bg-yellow-500 text-blue-900 font-bold px-4 py-1 rounded-full text-sm mb-4">
            OFERTA EXCLUSIVA PARA PRIMEIRA TURMA
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Participe da Imersão Método GTY
          </h2>
          <p className="text-xl opacity-90">
            Comece seu negócio de lavagem a seco e alcance seus primeiros R$10 mil
          </p>
        </div>
        
        <div className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-2xl mb-10">
          <div className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Pacote Completo da Imersão</h3>
              <p className="text-gray-600">(Valor total: R$1.397,00)</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="font-medium">3 Sessões ao Vivo do Método GTY</p>
                  <p className="text-gray-600 text-sm">Valor: R$697,00</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="font-medium">30 Dias de Suporte Direto</p>
                  <p className="text-gray-600 text-sm">Valor: R$350,00</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="font-medium">Plano de Ação 0-10K</p>
                  <p className="text-gray-600 text-sm">Valor: R$250,00</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="font-medium">Material de Implementação</p>
                  <p className="text-gray-600 text-sm">Valor: R$100,00</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg mb-8">
              <h4 className="font-bold text-lg text-blue-800 mb-3">
                BÔNUS EXCLUSIVOS PRIMEIRA TURMA
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Treinamento Marketing Local</p>
                    <p className="text-gray-600 text-sm">Como dominar o Google Meu Negócio e alcance local</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Kit Inicial Otimizado</p>
                    <p className="text-gray-600 text-sm">Guia para montar seu kit starter com melhor custo-benefício</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Mentoria Express 1:1 (10 primeiros)</p>
                    <p className="text-gray-600 text-sm">30 minutos de consultoria individual com o criador</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Guia de Legalização MEI</p>
                    <p className="text-gray-600 text-sm">Passo a passo para formalizar seu negócio sem complicações</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Templates de Divulgação (20 primeiros)</p>
                    <p className="text-gray-600 text-sm">Kit completo de artes para redes sociais e divulgação local</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6 text-center">
              <p className="text-gray-500 line-through mb-1">De R$ 1.397,00 por apenas</p>
              <div className="mb-4">
                <span className="text-4xl font-bold text-blue-600">R$ 497</span>
                <span className="text-gray-600"> ou 12x de R$ 48,42</span>
              </div>
              
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-6 py-4 rounded-lg w-full shadow-lg transform transition-transform hover:scale-105 mb-4"
              >
                SIM! QUERO FAZER PARTE DA PRIMEIRA TURMA
              </Button>
              
              <div className="flex justify-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Pagamento Seguro</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Acesso Imediato</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 border-t border-gray-100">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="ml-3">
                <h4 className="font-bold mb-1">Garantia Dupla Sem Risco</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">1.</span>
                    <span><strong>Garantia Incondicional de 7 dias:</strong> Assista à primeira sessão e, se não ficar satisfeito por qualquer motivo, solicite seu dinheiro de volta sem justificativas.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">2.</span>
                    <span><strong>Garantia de Resultados de 30 dias:</strong> Se aplicar o método conforme orientado durante 30 dias e não conseguir resultados, devolvemos seu investimento mediante comprovação de implementação.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg opacity-90 mb-4">
            Esta é uma oportunidade única para a primeira turma. As próximas edições terão valor superior e menos bônus.
          </p>
          <p className="font-medium">
            Não perca a chance de transformar sua relação com trabalho e renda em 2023!
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
