import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import clsx from "clsx";

const accordionData = [
    {
        id: uuid(),
        title: "How AI Impact the role of faculty members?",
        isOpen: true,
        content:
            "Machine learning is a subset of artificial intelligence (AI) that focuses on developing algorithms and statistical models that enable computers to learn and improve from experience without being explicitly programmed. It is used in various applications such as image recognition, natural language processing, and predictive analytics."
    },
    {
        id: uuid(),
        title: "RIO?",
        isOpen: false,
        content:
            "A neural network is a computational model inspired by the structure and functioning of the human brain. It consists of interconnected nodes (neurons) arranged in layers. Each neuron processes input data, applies weights and biases, and passes the result through an activation function to produce output. Neural networks are trained using algorithms like backpropagation to adjust weights and improve accuracy."
    },
    {
        id: uuid(),
        title: "How Does AI tutoring improves student outcomes in IT Courses?",
        isOpen: false,
        content: "AI has numerous applications across various industries, including healthcare (diagnosis and treatment planning), finance (fraud detection and algorithmic trading), transportation (autonomous vehicles), and entertainment (recommendation systems and virtual assistants)."
    },
    {
        id: uuid(),
        title: "What Impact Does AI toturing have in faculty workload and teaching effciency?",
        isOpen: false,
        content:
            "You can explore online courses, tutorials, and resources offered by educational platforms, universities, and AI communities. Additionally, joining AI-related forums, attending workshops, and working on AI projects can enhance your understanding and skills in this field."
    },
    {
        id: uuid(),
        title: "How is student data handled and protected?",
        isOpen: false,
        content:
            "You can explore online courses, tutorials, and resources offered by educational platforms, universities, and AI communities. Additionally, joining AI-related forums, attending workshops, and working on AI projects can enhance your understanding and skills in this field."
    },
    {
        id: uuid(),
        title: "What is the implementation process for AI tutoring system in high education?",
        isOpen: false,
        content:
            "You can explore online courses, tutorials, and resources offered by educational platforms, universities, and AI communities. Additionally, joining AI-related forums, attending workshops, and working on AI projects can enhance your understanding and skills in this field."
    },
    {
        id: uuid(),
        title: "What kind of support and training is provoided for faculty?",
        isOpen: false,
        content:
            "You can explore online courses, tutorials, and resources offered by educational platforms, universities, and AI communities. Additionally, joining AI-related forums, attending workshops, and working on AI projects can enhance your understanding and skills in this field."
    },
    {
        id: uuid(),
        title: "How Does AI Tutoring integerate with existing educational technologies?",
        isOpen: false,
        content:
            "You can explore online courses, tutorials, and resources offered by educational platforms, universities, and AI communities. Additionally, joining AI-related forums, attending workshops, and working on AI projects can enhance your understanding and skills in this field."
    },
    {
        id: uuid(),
        title: "What are the subject supported?",
        isOpen: false,
        content:
            "You can explore online courses, tutorials, and resources offered by educational platforms, universities, and AI communities. Additionally, joining AI-related forums, attending workshops, and working on AI projects can enhance your understanding and skills in this field."
    }
];

const accordionItemType = {
    top: "rounded-t-lg",
    default: "border rounded-none border-t-0",
    bottom: "border border-t-0 rounded-b-lg"
};

export const Accordion = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const accordionClickHandle = (id) => {
        setActiveAccordion(id === activeAccordion ? null : id);
    };

    return (
        <SectionContainer className="accordion--container my-16 drop-shadow-xl max-w-3xl mx-auto offset-y-0 offset-x-8">
            {accordionData.map((accordionItem, index) => (
                <div
                    key={accordionItem.id}
                    id={accordionItem.id}
                    className={clsx(
                        "accordion-item--container border border-neutral-200 bg-white overflow-hidden",
                        {
                            [accordionItemType.top]: index === 0,
                            [accordionItemType.default]:
                                index > 0 && index < accordionData.length - 1,
                            [accordionItemType.bottom]:
                                index === accordionData.length - 1
                        }
                    )}
                >
                    <h2 className="accordion-item--heading mb-0">
                        <button
                            className="group relative flex w-full font-semibold items-center rounded-t-lg border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition"
                            type="button"
                            aria-expanded={accordionItem.isOpen}
                            onClick={() =>
                                accordionClickHandle(accordionItem.id)
                            }
                        >
                            {accordionItem.title}
                            <Icon
                                icon="material-symbols:keyboard-arrow-up-rounded"
                                className="ml-auto h-8 w-8 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out motion-reduce:transition-none"
                            />
                        </button>
                    </h2>
                    <div
                        className={clsx(
                            "accordion-item--content py-4 px-5 text-base",
                            {
                                hidden: activeAccordion !== accordionItem.id, // Use hidden class to animate height to 0
                                "!visibility block":
                                    activeAccordion === accordionItem.id // Use block class to show content again
                            }
                        )}
                    >
                        <p>{accordionItem.content}</p>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
