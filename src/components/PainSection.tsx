
import { Button } from "@/components/ui/button";

const PainSection = () => {
  const scrollToSignup = () => {
    const element = document.getElementById("signup");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Você Já Se Cansou de Trabalhar Muito e Ganhar Pouco?
        </h2>
        
        <div className="bg-gray-100 p-6 md:p-8 rounded-xl mb-10">
          <p className="mb-4 text-lg">
            Imagine a situação do <strong>Rafael Martins</strong>, 29 anos. 
            Há mais de 2 anos trabalhando como entregador de aplicativo, enfrentando:
          </p>
          
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">✖</span>
              <span>Jornadas exaustivas de 10-12 horas diárias</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">✖</span>
              <span>Instabilidade financeira completa (um dia bom, três ruins)</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">✖</span>
              <span>Risco constante no trânsito e insegurança nas entregas</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">✖</span>
              <span>Zero tempo para família e lazer</span>
            </li>
          </ul>
          
          <p className="mb-6 text-lg">
            Rafael sempre gostou de carros e sonha em ter seu próprio negócio. Mas entre contas para pagar e a sensação constante de estar preso num ciclo sem fim, ele não vê saída.
          </p>
          
          <p className="font-bold text-lg">
            Talvez você, assim como Rafael, esteja buscando uma oportunidade real de transformar sua situação.
          </p>
        </div>
        
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Você Também Se Identifica Com Alguma Dessas Situações?
          </h3>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">➤</span>
              <span>Está cansado de serviços que exigem muito esforço e pagam pouco</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">➤</span>
              <span>Sonha em empreender, mas não tem muito capital para investir</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">➤</span>
              <span>Gosta do universo automotivo e tem facilidade para aprender coisas práticas</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">➤</span>
              <span>Procura algo que possa começar como renda extra e crescer para se tornar sua principal atividade</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">➤</span>
              <span>Quer um negócio acessível, com demanda real e que não dependa de modismos</span>
            </li>
          </ul>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
            <p className="italic">
              "Eu também já estive nessa situação. Trabalhando no Japão, longe da família, em jornadas de até 16 horas. Quando voltei ao Brasil, precisei recomeçar do zero e encontrei na lavagem automotiva uma oportunidade real."
            </p>
            <p className="font-bold mt-2">— Gustavo Yudi, criador do Método GTY</p>
          </div>
          
          <p className="text-lg font-medium text-center mb-8">
            É por isso que desenvolvi o <strong>Método GTY</strong>, um caminho prático, acessível e realista para quem quer entrar no mercado de estética automotiva com foco em lavagem a seco.
          </p>
          
          <div className="flex justify-center">
            <Button 
              onClick={scrollToSignup}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-5 rounded-lg shadow-lg transform transition-transform hover:scale-105"
            >
              QUERO CONHECER ESSA OPORTUNIDADE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
