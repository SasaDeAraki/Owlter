import { useState } from "react";
import "./FAQ.css";
import arrowDown from "../../assets/images/arrow-down.png";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function FAQ() {
const questions = [
    { 
        question: "O que é a plataforma?", 
        answer: "É um aplicativo que funciona como um sistema colaborativo de alertas sobre desastres naturais. Usuários recebem notificações em tempo real, visualizam riscos no mapa e podem contribuir com informações locais." 
    },
    { 
        question: "Como a plataforma ajuda em situações de desastre?", 
        answer: "Ela permite que você receba alertas rápidos sobre eventos próximos, visualize áreas afetadas e compartilhe informações úteis com outras pessoas, ajudando na prevenção e resposta a desastres." 
    },
    { 
        question: "Quem pode usar o aplicativo?", 
        answer: "Qualquer pessoa! O aplicativo é aberto para quem deseja monitorar desastres, se manter informado ou ajudar sua comunidade com relatos e atualizações." 
    },
    { 
        question: "De onde vêm as informações sobre os desastres?", 
        answer: "As informações vêm de duas fontes principais: dados oficiais de órgãos especializados e relatos colaborativos de usuários locais, que ajudam a validar e enriquecer os alertas." 
    },
    { 
        question: "Preciso pagar para usar?", 
        answer: "Não. A plataforma é gratuita, pois acreditamos que o acesso à informação sobre desastres deve ser universal e acessível para todos." 
    },
    { 
        question: "Como posso contribuir com o projeto?", 
        answer: "Você pode colaborar compartilhando informações sobre eventos em sua região, enviando feedbacks nos alertas ou divulgando a plataforma para que mais pessoas se protejam." 
    }
];


    const [visibleIndex, setVisibleIndex] = useState(null);

    const toggleAnswer = (index) => {
        setVisibleIndex(visibleIndex === index ? null : index);
    };

    return (
        <>
            <div className="container-faq">
                <div className="container-texto-faq">
                    <h6>ESTAMOS AQUI PARA AJUDAR</h6>
                    <h1>Perguntas</h1>
                    <h1>frequentes</h1>
                    <h6>Ache a resposta para perguntas frequentes aqui.</h6>
                </div>
                <div className="container-perguntas-faq">
                    {questions.map((item, index) => (
                        <div
                            key={index}
                            className={`container-pergunta ${visibleIndex === index ? "expanded" : ""}`}
                            onClick={() => toggleAnswer(index)}
                        >
                            <div className="pergunta">
                                <span>{item.question}</span>
                                <img
                                    src={arrowDown}
                                    alt="arrow-icon"
                                    className={`container-pergunta-botao ${visibleIndex === index ? "open" : ""}`}
                                />
                            </div>
                            <div className="container-resposta">
                                <span className={visibleIndex === index ? "resposta aberta" : "resposta fechada"}>
                                    {item.answer}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
