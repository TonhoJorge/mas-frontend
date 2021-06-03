import React from "react";
import { Container } from "./styles";

export function ActivyTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Unicade Curricular</th>
                        <th>Atividade</th>
                        <th>Avaliação</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Conteudo1</th>
                        <th>Conteudo1</th>
                        <th>Conteudo1</th>
                        <th>Conteudo1</th>
                    </tr>
                    <tr>
                        <th>Conteudo2</th>
                        <th>Conteudo2</th>
                        <th>Conteudo2</th>
                        <th>Conteudo2</th>
                    </tr>
                    <tr>
                        <th>Conteudo3</th>
                        <th>Conteudo3</th>
                        <th>Conteudo3</th>
                        <th>Conteudo3</th>
                    </tr>
                    <tr>
                        <th>Conteudo4</th>
                        <th>Conteudo4</th>
                        <th>Conteudo4</th>
                        <th>Conteudo4</th>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}