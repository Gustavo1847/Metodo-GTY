// src/components/LeadCapture.tsx
import React from "react";
import Head from "next/head";

export default function LeadCapture() {
  return (
    <section id="signup" className="bg-gray-100 text-center">
      <Head>
        <script
          src="https://f.convertkit.com/ckjs/ck.5.js"
          async
        ></script>
      </Head>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "0px" }}>
        <img
          src="/Metodo-GTY-Black-Trans.png" // coloque aqui a URL real do seu logo
          alt="Logo GTY Studio"
          style={{ maxWidth: "180px", height: "auto" }}
        />
      </div>

      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <span className="inline-block bg-orange-600 font-bold px-4 py-1 rounded-full text-sm mb-6 text-white">
            PRIMEIRA TURMA OFICIAL
          </span>
        </div>
      </div>
     <form
  action="https://app.kit.com/forms/8096496/subscriptions"
  method="post"
  data-sv-form="8096496"
  data-uid="98108de147"
  data-format="inline"
  data-version="5"
  data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Agora você faz parte da lista VIP!&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;fathom&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:true},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}"
  className="seva-form formkit-form form-k"
  style={{ backgroundColor: '#fff', maxWidth: '832px', minHeight: "600px", height: "auto", margin: "0 auto 64px", borderRadius: '6px', display: 'flex', flexDirection: 'row' }}
>
  <div data-style="full">
    <div
      data-element="column"
      className="formkit-background"
      style={{
        backgroundImage: 'url("https://embed.filekitcdn.com/e/9vaHmGk8keRbaYADoCpK3T/aBJSzEa7Em8T355xvboEsy")',
        maxHeight: '600px',
        height:'auto',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }}
    ></div> 
    <div data-element="column" className="formkit-column" style={{ padding: '20px', position: 'relative', display: "flex", justifyContent:"center",flexDirection:"column"  }}>
      <div className="formkit-header" data-element="header" style={{ color: '#000', fontSize: '8px', fontWeight: '700', margin: '0' }}>
        <h2 style={{ lineHeight:'35px', fontSize: '33px', margin:'10px' }}>
          Entre na Lista VIP do Método GTY
        </h2>
        <h2 style={{ lineHeight:'25px', fontSize: '20px', fontWeight: '450' }}>
          
          Receba conteúdos exclusivos, acesso antecipado e condições especiais para faturar R$10 mil com lavagem a seco!
          <br />
        </h2>
      </div>

      <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>

      <div data-element="fields" className="seva-fields formkit-fields">
        <div className="formkit-field">
          <input
            className="formkit-input"
            aria-label="Nome"
            name="fields[first_name]"
            required
            placeholder="Nome"
            type="text"
            style={{ color: '#8b8b8b', borderColor: '#dde0e4', fontWeight: '400' }}
          />
        </div>
        <div className="formkit-field">
          <input
            className="formkit-input"
            name="WhatsApp"
            placeholder="WhatsApp"
            type="tel"
            style={{ color: '#8b8b8b', borderColor: '#dde0e4', fontWeight: '400' }}
          />
        </div>
        <div className="formkit-field">
          <input
            className="formkit-input"
            name="email_address"
            aria-label="E-mail"
            placeholder="E-mail"
            required
            type="email"
            style={{ color: '#8b8b8b', borderColor: '#dde0e4', fontWeight: '400' }}
          />
        </div>

        <button
          data-element="submit"
          className="formkit-submit formkit-submit"
          style={{color: "rgb(255, 255, 255)", backgroundColor: "rgb(255, 117, 0)", borderRadius: "3px", fontWeight: 700}}
        >
          <div className="formkit-spinner"><div></div><div></div><div></div></div>
          <span className="">Quer entrar na Lista VIP!</span>
        </button>
      </div>

      <div className="formkit-disclaimer" data-element="disclaimer" style={{ color: '#8b8b8b', fontSize: '10px', margin: '0' }}>
        <p>Respeitamos sua privacidade. Cancele o cadastro a qualquer momento.</p>
      </div>
    </div>
  </div>
</form>

    </section>
  );
}
