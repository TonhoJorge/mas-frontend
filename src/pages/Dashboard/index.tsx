import React from "react";
import { ActivyTable } from "../../compoents/ActivyTable";
import { Header } from "../../compoents/Header";
import { Summary } from "../../compoents/Summary";
import { Container } from "./styles";

export function Dashboard() {
    return(
        <>
            <Header />
            <Container> 
                <Summary />
                <ActivyTable />
            </Container>
        </>
    )
}