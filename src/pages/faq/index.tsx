import Accordion from "../../components/home/accordian";
import classNames from "../../consts/classNames";
import faqs from "../../data/faq_real.json";
const FAQ = () => {
  return (
    <div className={`${classNames.containerClass} mt-10 lg:mt-20`}>
      <h1 className="text-center text-3xl lg:text-5xl">
        Got a question? We have{" "}
        <span className="text-indigo-500">Answers!</span>
      </h1>
      <div className="mt-10 lg:mt-20 space-y-8">
        {faqs.map((d: any, index: number) => (
          <Accordion key={index} title={d.answer} description={d.answer} />
        ))}
      </div>
    </div>
  );
};
export default FAQ;
