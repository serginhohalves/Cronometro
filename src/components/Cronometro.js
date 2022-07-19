import React, { Component } from "react";
import "./style.css";

//criar um cronometro que conte minutos e segundos, com botoes para iniciar, pausar e zerar
class Cronometro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: "Iniciar",
    };
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpa = this.limpa.bind(this);
  }

  vai() {
    let state = this.state;
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      state.botao = "Iniciar";
    } else {
      this.timer = setInterval(() => {
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
      }, 100);
      state.botao = "Pausar";
    }
    this.setState(state);
  }
  limpa() {
    let state = this.state;
    state.numero = 0;
    this.setState(state);
  }

  render() {
    return (
      <div className="cronometro">
        <div className="cronometro-controle">
          <button className="cronometro-btn" onClick={this.vai}>
            {this.state.botao}
          </button>
          <button className="cronometro-btn" onClick={this.limpa}>
            Limpar
          </button>
        </div>
        <div className="cronoTime">
          <span className="time">{this.state.numero.toFixed(1)}</span>
        </div>
      </div>
    );
  }
}

export default Cronometro;
