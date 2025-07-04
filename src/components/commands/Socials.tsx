import { useContext, useEffect } from "react";
import { ProjectsIntro } from "../styles/Projects.styled";
import { Cmd, CmdDesc, CmdList, HelpWrapper } from "../styles/Help.styled";
import {
    checkRedirect,
    generateTabs,
    getCurrentCmdArry,
    isArgInvalid,
} from "../../utils/funcs";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Socials: React.FC = () => {
    const { arg, history, rerender } = useContext(termContext);

    /* ===== get current command ===== */
    const currentCommand = getCurrentCmdArry(history);

    /* ===== check current command makes redirect ===== */
    useEffect(() => {
        if (checkRedirect(rerender, currentCommand, "socials")) {
            socials.forEach(({ id, url }) => {
                id === parseInt(arg[1]) && window.open(url, "_blank");
            });
        }
    }, [arg, rerender, currentCommand]);

    /* ===== check arg is valid ===== */
    const checkArg = () =>
        isArgInvalid(arg, "go", ["1", "2", "3", "4", "5"]) ? (
            <Usage cmd="socials" />
        ) : null;

    return arg.length > 0 || arg.length > 2 ? (
        checkArg()
    ) : (
        <HelpWrapper data-testid="socials">
            <ProjectsIntro>Here are my social links</ProjectsIntro>
            {socials.map(({ id, title, url, tab }) => (
                <CmdList key={title}>
                    <Cmd>{`${id}. ${title}`}</Cmd>
                    {/* {generateTabs(tab)} */}
                    {/* <CmdDesc>- {url}</CmdDesc> */}
                </CmdList>
            ))}
            <Usage cmd="socials" marginY />
        </HelpWrapper>
    );
};

const socials = [
    {
        id: 1,
        title: "GitHub",
        url: "https://github.com/cx330blake",
        tab: 3,
    },
    {
        id: 2,
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/%E5%AD%90%E9%9B%8B-%E9%99%B3-11087825b/",
        tab: 3,
    },
    {
        id: 3,
        title: "X/Twitter",
        url: "https://x.com/CX330Blake",
        tab: 1,
    },
    {
        id: 4,
        title: "Blog",
        url: "https://blog.cx330.tw",
        tab: 0,
    },
    {
        id: 5,
        title: "LinkTree",
        url: "https://linktr.ee/CX330Blake",
        tab: 0,
    },
];

export default Socials;
