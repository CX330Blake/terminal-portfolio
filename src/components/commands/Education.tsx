import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
    return (
        <Wrapper data-testid="education">
            <EduIntro>Here is my education background!</EduIntro>
            {eduBg.map(({ title, desc }) => (
                <EduList key={title}>
                    <div className="title">{title}</div>
                    <div className="desc">{desc}</div>
                </EduList>
            ))}
        </Wrapper>
    );
};

const eduBg = [
    {
        title: "BS in Computer Science & Information Engineering",
        desc: "National Cheng Kung University | 2024 - Present",
    },
    // {
    //   title: "HND in Computing & System Development",
    //   desc: "Info Myanmar University | 2016 - 2018",
    // },
    // {
    //   title: "IELTS 6.5",
    //   desc: "British Council Myanmar | 2017",
    // },
];

export default Education;
