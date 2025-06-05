import { useState } from "react";
import "./FAQ.css";
import arrowDown from "../../assets/images/arrow-down.png";

export default function FAQ() {
    const questions = [
        { question: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae itaque optio odio", answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae itaque optio odio' },
        { question: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae itaque optio odio", answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae itaque optio odio' },
        { question: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae itaque optio odio", answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae itaque optio odio' }
    ];

    const [visibleIndex, setVisibleIndex] = useState(null);

    const toggleAnswer = (index) => {
        setVisibleIndex(visibleIndex === index ? null : index);
    };

    return (
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
    );
}
