import { Button } from "@/components/ui/button";
const HeroSection = () => {
  const scrollToSignup = () => {
    const element = document.getElementById("signup");
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="bg-gradient-to-b from-blue-600 to-blue-700 text-white py-16 px-4">
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <img
          src="public/GTY Studio - ClaroTrans.png" // coloque aqui a URL real do seu logo
          alt="Logo GTY Studio"
          style={{ maxWidth: "180px", height: "auto" }}
        />
      </div>

      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-8">
          <span className="inline-block bg-orange-600 font-bold px-4 py-1 rounded-full text-sm mb-6 text-white">
            PRIMEIRA TURMA OFICIAL
          </span>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center leading-tight">
          Comece um Negócio Lucrativo com Lavagem a Seco e Alcance Seus Primeiros R$ 10 Mil — Mesmo Sem Experiência!
        </h1>
        
        <p className="text-xl md:text-2xl mb-10 text-center max-w-4xl mx-auto">
          Essa é sua chance de entrar na primeira turma oficial do Método GTY — uma imersão online prática, 
          criada por quem já validou esse modelo no dia a dia e quer ensinar o caminho mais curto
          (e mais econômico) pra transformar seu talento por carros em renda real.
        </p>
        
        <div className="flex justify-center mb-10">
          <Button onClick={scrollToSignup} size="xl" className="bg-orange-500 hover:bg-orange-600 text-white-900 font-bold text-base md:text-lg md:px-10 rounded-lg shadow-lg transform transition-transform hover:scale-105 mx-4 text-white">
            QUERO FAZER PARTE DESSA PRIMEIRA TURMA
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="bg-blue-800 p-4 rounded-lg">
            <p className="text-center font-medium">O mercado brasileiro movimenta bilhões por ano com estética automotiva</p>
          </div>
          <div className="bg-blue-800 p-4 rounded-lg">
            <p className="text-center font-medium">Lavagem a seco representa menos de 8% das operações</p>
          </div>
          <div className="bg-blue-800 p-4 rounded-lg">
            <p className="text-center font-medium">Baixo investimento e operação portátil</p>
          </div>
          <div className="bg-blue-800 p-4 rounded-lg">
            <p className="text-center font-medium">Modelo já validado pelo próprio criador</p>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;