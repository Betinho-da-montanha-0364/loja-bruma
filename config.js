/* CONFIGURAÇÃO DA LOJA: edite aqui. Vale para todas as páginas. */
window.CONFIG_LOJA = {
  nome: "Bruma",
  tawk: "",                          // chat do site (Tawk.to): "IDdaPropriedade/IDdoWidget", tirado do código do widget. Vazio = o botão abre o Direct do Instagram
  instagram: "brumamodafeminina414",  // usuário do Instagram da loja
  checkout: "mercadopago",            // pagamento pelo Mercado Pago (precisa da hospedagem Netlify)
  urlPagamento: "/api/criar-pagamento",
  urlEstoque: "/api/estoque",
  urlConsulta: "/api/consultar-pedido",
  esgotados: [],                      // ids marcados como esgotados direto aqui (o painel faz isso sem editar código)
  metaPixel: "",                      // ID do Pixel da Meta (Facebook/Instagram), só números. Vazio = desligado
  googleTag: "",                      // ID do Google Analytics (G-XXXX) ou Google Ads (AW-XXXX). Vazio = desligado
  googleAdsConversao: "",             // conversão de compra do Google Ads, ex.: "AW-123456789/AbCdEfGhIj". Vazio = desligado
  adsLimiteSemVenda: 30,              // peça que gastar isso (R$, 30 dias) em anúncio sem vender sai dos anúncios
  adsCustoMaxVenda: 35,               // te avisa se cada venda pelo anúncio custar mais que isso (R$)
  freteFixo: 11.99,                   // frete cobrado em todo pedido
  freteGratisAcima: null,             // ex.: 199 para dar frete grátis acima desse valor; null = sempre cobra
  descontoPix: 5,                     // % de desconto no Pix (0 para desligar)
  parcelas: 10,                       // máximo de parcelas sem juros no cartão
  parcelaMinima: 5,                   // valor mínimo de cada parcela (R$)
  limiteMEI: 81000,                   // teto anual do MEI (R$). O bot avisa quando o faturamento chegar perto
  cnpj: "00.000.000/0001-00",
  razaoSocial: "Seu nome ou nome do MEI",
  endereco: "Cidade - UF"
};
