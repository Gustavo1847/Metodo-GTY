import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
const ContentSection = () => {
  const scrollToSignup = () => {
    window.location.href = 'captura';
  };
  return <section className="bg-gray-100">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            O Que Você Vai Aprender Na Imersão GTY
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Um programa estruturado em 3 sessões ao vivo, com conteúdo prático e aplicável desde o primeiro dia.
          </p>
        </div>
        
        <div className="space-y-8 mb-12">
          {/* Sessão 1 */}
          <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md">
            <div className="bg-orange-600 text-white p-4">
              <h3 className="text-xl font-bold">Sessão 1: Fundamentos e Técnica</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="ml-3">Introdução ao método de lavagem a seco profissional</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="ml-3">Produtos essenciais e suas funções (lista com opções de custo-benefício)</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="ml-3">Técnica em detalhes: passo a passo da lavagem externa completa</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="ml-3">Demonstração prática: carros claros, escuros e diferentes níveis de sujeira</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="ml-3">Kit inicial com menos de R$500 (onde comprar e como aproveitar ao máximo)</p>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Sessão 2 */}
          <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md">
            <div className="bg-orange-600 text-white p-4">
              <h3 className="text-xl font-bold">Sessão 2: Modelagem do Negócio</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="ml-3">Estruturando sua operação: modelos móvel, residencial e ponto fixo</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="ml-3">Formação de preço para máxima rentabilidade (fórmula GTY de precificação)</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="ml-3">Criando pacotes de serviços e planos de assinatura para renda recorrente</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="ml-3">Gestão de agenda e atendimento ao cliente (da primeira conversa ao pós-serviço)</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="ml-3">Formalização simples: MEI, emissão de notas e controle financeiro básico</p>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Sessão 3 */}
          <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md">
            <div className="bg-orange-600 text-white p-4">
              <h3 className="text-xl font-bold">Sessão 3: Aquisição de Clientes e Escalabilidade</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="ml-3">Estratégia de "Cliente Zero": conseguindo seus primeiros 3 clientes sem investir em marketing</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="ml-3">Marketing local efetivo: Instagram, WhatsApp, Google Meu Negócio e parcerias locais</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="ml-3">Da residência ao condomínio: estratégia para conquistar clientes em bloco</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="ml-3">Como propor e conquistar contratos com pequenas empresas e frotas</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="ml-3">Plano de 60 dias: do primeiro cliente aos R$10.000 em faturamento mensal</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border border-orange-100 p-6 rounded-xl mb-10 bg-orange-50">
          <h3 className="text-2xl font-bold mb-4 text-center">Mais do que conteúdo, você recebe um plano de ação completo:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold mb-2 text-orange-800">Kit de Implementação</h4>
              <p>Checklists, planilhas e roteiros para aplicar todo o conhecimento imediatamente</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold mb-2 text-orange-800">Suporte Ativo</h4>
              <p>30 dias de acesso direto ao criador do método para tirar dúvidas e receber orientações</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold mb-2 text-orange-800">Materiais Prontos</h4>
              <p>Templates para propostas, contratos e materiais de divulgação para começar sem perder tempo</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold mb-2 text-orange-800">Comunidade</h4>
              <p>Acesso a grupo exclusivo de alunos para networking, troca de experiências e oportunidades</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-14">
          <Button onClick={scrollToSignup} className="text-white font-bold text-lg px-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 bg-orange-600 hover:bg-orange-500 py-[35px]">
            QUERO DOMINAR ESTE MÉTODO COMPLETO
          </Button>
        </div>
      </div>
    </section>;
};
export default ContentSection;