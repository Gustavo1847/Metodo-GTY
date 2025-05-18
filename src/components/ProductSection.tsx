import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
const ProductSection = () => {
  const scrollToSignup = () => {
    const element = document.getElementById("signup");
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <span className="inline-block bg-orange-600 text-white font-medium px-4 py-1 rounded-full mb-4 text-xl">CONHEÇA</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Imersão Método GTY — Do Zero aos 10K com Lavagem a Seco
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Um programa de 3 sessões ao vivo + 30 dias de suporte + plano de ação 
            completo para você iniciar, estruturar e escalar seu negócio de lavagem a seco.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <div className="bg-blue-100 text-blue-800 w-12 h-12 flex items-center justify-center rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Prático e Direto</h3>
            <p className="text-gray-600">
              Aprenda as técnicas exatas já validadas para lavar carros de forma profissional, sem curvas de aprendizado desnecessárias.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <div className="bg-yellow-100 text-yellow-800 w-12 h-12 flex items-center justify-center rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Baixo Investimento</h3>
            <p className="text-gray-600">
              Estruture seu negócio com o mínimo necessário, seguindo um plano que prioriza resultados antes de grandes gastos.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <div className="bg-green-100 text-green-800 w-12 h-12 flex items-center justify-center rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">30-60 Dias Para Resultado</h3>
            <p className="text-gray-600">
              Um plano de ação estruturado para você alcançar seus primeiros R$10 mil em até dois meses de operação.
            </p>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-10">
          <h3 className="text-2xl font-bold mb-6">O Que Você Vai Conquistar Com a Imersão GTY:</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-5 w-5 text-green-500" />
              </div>
              <p className="ml-3"><strong>Autonomia técnica total</strong> para lavar qualquer veículo utilizando o método a seco</p>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-5 w-5 text-green-500" />
              </div>
              <p className="ml-3"><strong>Estratégia validada para atrair clientes</strong> rapidamente, mesmo começando do zero</p>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-5 w-5 text-green-500" />
              </div>
              <p className="ml-3"><strong>Plano prático de precificação</strong> para maximizar seu lucro desde o primeiro carro</p>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-5 w-5 text-green-500" />
              </div>
              <p className="ml-3"><strong>Kit inicial otimizado</strong> para iniciar com o mínimo necessário (investimento abaixo de R$500)</p>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-5 w-5 text-green-500" />
              </div>
              <p className="ml-3"><strong>Suporte direto do criador do método</strong> durante toda a implementação (30 dias)</p>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-5 w-5 text-green-500" />
              </div>
              <p className="ml-3"><strong>Roteiro de expansão</strong> para escalar de lavagens residenciais para frotas empresariais</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Button onClick={scrollToSignup} className="text-white font-bold text-lg px-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 bg-orange-600 hover:bg-orange-500 py-[35px]">
            QUERO PARTICIPAR DA IMERSÃO GTY
          </Button>
        </div>
      </div>
    </section>;
};
export default ProductSection;