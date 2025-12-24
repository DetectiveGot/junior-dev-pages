"use client";

import { useParams, useSearchParams } from "next/navigation";
import Header from "../../../../components/header";
import "../../../../styles/subproblems.css";
import Footer from "../../../../components/footer";

const Page = () => {
    const params = useParams<{ contest: string; id: string }>();
    const {contest, id} = params;

    const searchParams = useSearchParams();
    const folder = searchParams.get("folder") ?? "";
    const prefixUrl = `https://raw.githubusercontent.com/jun10r-d3v/${contest}/`;
    const infixUrl = folder.trim()?
        `refs/heads/main/${folder}/`:
        "main/";
    const suffixUrl = id=="Editorial"?
        "Editorial.pdf":
        `${id}/statement.pdf`;

    const url = prefixUrl+infixUrl+suffixUrl;
    console.log(decodeURIComponent(url));

    return (
      <>
          <Header/>
          <div className="main">
              <a className="submit" href="https://codeforces.com/group/eScIVDG1u2/contest/570964/submit?submittedProblemIndex=%22W%22" target="_blank" rel="noopener noreferrer">
                  Submit Code
              </a>
              <div className="pdffile">
                  <embed src={`/api/pdf?url=${encodeURIComponent(url)}`} width="800px" height="600px" type="application/pdf"/>
              </div>
          </div>
          <Footer/>
      </>
    );
};

export default Page;

