import React from 'react';
import Container from "@/atom/templates/container/Container";
import Main from "@/atom/templates/main/Main";
import Header from "@/atom/organisms/header/Header";
import AboutMe from "@/atom/organisms/about_me/AboutMe";
import Intro from "@/atom/organisms/intro/Intro";
import Stack from "@/atom/organisms/stack/Stack";
import Project from "@/atom/organisms/project/Project";
import Footer from "@/atom/organisms/Footer";
import Education from "@/atom/organisms/education/Education";

export default function Home(): React.JSX.Element {



    return (
        <Container>
            <Header/>
            <Main>
                <Intro/>
                <AboutMe/>
                <Stack/>
                <Project />
                <Education />
            </Main>
            <Footer />
        </Container>
    )
}
