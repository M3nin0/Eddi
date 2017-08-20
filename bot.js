const TelegramBot = require('node-telegram-bot-api');

const TOKEN = "SEU_TOKEN";

const bot = new TelegramBot(TOKEN, {polling: true});

//Comandos em do Telegram
// exemplos - Lista os repositórios de exemplos que o Edd conhece
// sites - Sites que o Edd recomenda para aprender estrutura de dados
// livros - Envia bons livros sobre estrutura de dados em C ou Java


//Definindo as principais refereências de estrutura de dados
const livro_c_1 = "http://www.mlaureano.org/livro/livro_estrutura_conta.pdf";

const livro_java_1 = "https://www.caelum.com.br/download/caelum-algoritmos-estruturas-dados-java-cs14.pdf";
const livro_java_2 = "https://www.ime.usp.br/~cosen/verao/alg.pdf";


const sites_c = {

  1: 'https://www.ime.usp.br/~pf/estruturas-de-dados/',
  2: 'https://www.ime.usp.br/~pf/mac0121-2015/',

};

const sites_java = {

  1: 'https://www.caelum.com.br/apostila-java-estrutura-dados/',
  2: 'https://loiane.training/course/estrutura-de-dados-e-algoritmos-com-java/'

}

const repo = {
  1: "https://github.com/Gigers/data-struct"
}


//Retorna as referencias para os estudos de estrutura de dados
bot.onText(/\/sites/, (msg) => {

  const chatID = msg.chat.id;

  bot.sendMessage(chatID, "Os melhores sites que conheço para estrutura de dados em são: \n" +
  sites_c[1] + "\n" + sites_c[2] + "\n" + "Em java conheço alguns outros \n" + sites_java[1] + "\n" + sites_java[2] + "\nEspero que esses ajudem =D"
  );

});

bot.onText(/\/livros/, (msg) => {

  const chatID = msg.chat.id;

  bot.sendMessage(chatID, "Você procura livros sobre Java ou C ?");

});

bot.onText(/(java)/, (msg) => {

  const chatID = msg.chat.id;

  bot.sendMessage(chatID, "Há um livro excelente da Caelum sobre estrutura de dados em Java");
  bot.sendDocument(chatID, livro_java_1);
  bot.sendMessage(chatID, "Tem outro também interessante do IME");
  bot.sendDocument(chatID, livro_java_2);

});

bot.onText(/(c)/, (msg) => {

  const chatID = msg.chat.id;

  bot.sendMessage(chatID, "Sobre C há um livro gratuito muito bom, essa aqui...");
  bot.sendDocument(chatID, livro_c_1);

});

bot.onText(/(exemplos)/, (msg) => {

  const chatID = msg.chat.id;

  bot.sendMessage(chatID, "Tem um repositório bacana que o pessoal da Fatec tem feito para colocar exemplos\n" + repo[1]);

});

bot.onText(/\/start/, (msg) => {

  const chatID = msg.chat.id;

  bot.sendMessage(chatID, "Opa! tudo bom ? Sou o Eddi, estou aqui para auxiliar você com os conteúdos de estrutura de dados\n" +
    "Escolha uma das opções:\n" +
    "/exemplos - Lista os repositórios de exemplos que o Eddi conhece\n" +
    "/sites - Sites que o Edd recomenda para aprender estrutura de dados\n" +
    "/livros - Envia bons livros sobre estrutura de dados em C ou Java"
  );
});
