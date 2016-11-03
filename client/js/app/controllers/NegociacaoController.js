// Frame/client/js/app/controllers/NegociacaoController.js

class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));

        // chamando o método `update` da nossa view.
        this._negociacoesView.update(this._listaNegociacoes);

    }

    adiciona(event) {

        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());

        // atualiza a view a cada inclusão para que reflete o estado atual da nossa lista de negociações
        this._negociacoesView.update(this._listaNegociacoes);
        this._limpaFormulario();
    }

    _criaNegociacao() {
        return new Negociacao(
                DateHelper.textoParaData(this._inputData.value),
                this._inputQuantidade.value,
                this._inputValor.value
            );   
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputData.focus();
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0
    }
}