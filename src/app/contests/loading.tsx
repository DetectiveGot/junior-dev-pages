import Header from "@/src/components/header";
import { Loading } from "@/src/components/loading";
import { Container } from "@/src/ui/Container";

export default function LoadingPage() {
    return (
        <div>
            <Header curPage={"contests"}/>
            <Container>
                <Loading/>
            </Container>
        </div>
    )
}