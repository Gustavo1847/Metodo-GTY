import { Button } from "@/components/ui/button";
const MentorSection = () => {
  const scrollToSignup = () => {
    const element = document.getElementById("signup");
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quem é Gustavo Yudi?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            O criador do Método GTY e seu mentor nessa jornada
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center mb-10">
          <div className="w-full md:w-1/3">
            <div className="rounded-lg h-80 md:h-[500px] overflow-hidden shadow-md">
              <img
                src="/Perfil.jpeg" // ajuste se o nome do arquivo for outro
                alt="Gustavo Yudi - Mentor GTY"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <p className="mb-4 text-lg">
              Olá, sou o Gustavo Yudi. Antes de tudo, não sou nenhum "guru" ou empresário milionário — 
              sou um profissional que encontrou na estética automotiva uma forma honesta de ganhar dinheiro e construir um negócio.
            </p>
            
            <p className="mb-4 text-lg">
              Minha história começa no Japão, onde trabalhei em fábricas por quase 5 anos. Jornadas de até 16 horas, 
              longe da família e acumulando um desgaste físico e mental imenso. Quando voltei ao Brasil, precisei 
              recomeçar do zero.
            </p>
            
            <p className="mb-4 text-lg">
              Sempre gostei de carros e já cuidava bem do meu próprio veículo. Foi assim que identifiquei uma oportunidade: 
              muitos lava-jatos tradicionais ofereciam serviços caros e de baixa qualidade, gastando muita água e tempo.
            </p>
            
            <p className="mb-4 text-lg">
              Comecei a estudar e praticar técnicas de lavagem a seco. Com menos de R$500, montei meu primeiro kit 
              e decidi oferecer o serviço para conhecidos. Em 45 dias, já tinha uma clientela fiel de mais de 15 pessoas. 
              Em dois meses, fechei meu primeiro contrato com uma empresa local.
            </p>
            
            <p className="mb-4 text-lg font-medium">
              Hoje, faço mais de R$10 mil por mês com meu negócio de lavagem a seco, atendendo clientes 
              residenciais e empresariais — e criei o Método GTY para compartilhar exatamente como você pode fazer o mesmo, 
              sem enrolação ou promessas irreais.
            </p>
          </div>
        </div>
        
        <div className="border border-orange-100 p-6 rounded-xl mb-10 bg-orange-50">
          <h3 className="text-xl font-bold mb-4 text-center">
            Por que decidi criar esta imersão?
          </h3>
          
          <p className="mb-4">
            Vejo muitas pessoas na mesma situação em que eu estava: trabalhando demais, 
            ganhando pouco e sem perspectiva de crescimento. Ao mesmo tempo, o mercado 
            de lavagem a seco ainda é pouco explorado no Brasil, representando menos de 8% dos 
            serviços de estética automotiva.
          </p>
          
          <p className="mb-4">
            Percebi que poderia compartilhar o caminho que descobri, economizando tempo e 
            dinheiro para quem quer entrar nesse mercado. <strong>Não estou vendendo sonhos ou 
            promessas de riqueza fácil</strong> — estou compartilhando um método prático e validado para 
            quem quer trabalhar e construir um negócio real.
          </p>
          
          <p className="font-medium">
            O Método GTY é exatamente o que eu gostaria de ter tido acesso quando comecei: direto, 
            prático e sem enrolação.
          </p>
        </div>
        
        <div className="text-center">
          <Button onClick={scrollToSignup} size="lg" variant="brand" className="font-bold text-base md:text-lg rounded-lg shadow-lg transform transition-transform hover:scale-105 mx-4">
            QUERO APRENDER COM QUEM JÁ ESTÁ NO MERCADO
          </Button>
        </div>
      </div>
    </section>;
};
export default MentorSection;