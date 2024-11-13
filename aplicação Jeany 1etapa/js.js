function calc(valor, marcado){
    //entrada//

    //do formulário//
        let nome = document.form.nome.value;

        let tel = document.form.telefone.value;

        let data = document.form.data.value;

        let horario = document.form.hora.value;

    //"só entrada"//
        total = document.getElementById('total').value;
        
        saida2 = document.getElementById('saida2').value

    //processamento//
        if(marcado){
            total = Number(total) + Number(valor);
        }
        else{
            total = Number(total) - Number(valor);
        }

    //saída//
        total = document.getElementById('total').value = total;

        sa.value = `Olá, ${nome}. Você fez um agendamento no dia ${data} e no horário de ${horario}. Estamos esperando por você!`;
}