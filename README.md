# CRUD Veiculo

Descrição: Cada aluno deve fazer uma API contendo todas as funções de um CRUD (Create, Read, Update, Delete). Cada aluno fará a API considerando o seu tópico específico, sendo todos os tópicos relacionados ao contexto de uma loja de aluguel de carros.

Campos:

    Id,
    Tipo de veiculo (carro ou moto),
    placa,
    chassi,
    renavam,
    ano,
    categoria (básico, intermediário),
    cor,
    direção (hidráulica ou manual),
    data de criação,
    nome pessoa que cadastrou,
    motor (ex. 1.0, 1.4 etc)"

## Rotas

### Create

Criação de veiculo
Rota do tipo POST -> /vehicle
Enviar no corpo da requisição os seguintes dados:

      Tipo de veiculo (carro ou moto),
      placa,
      chassi,
      renavam,
      ano,
      categoria (básico, intermediário),
      cor,
      direção (hidráulica ou manual),
      nome pessoa que cadastrou,
      motor (ex. 1.0, 1.4 etc)"
