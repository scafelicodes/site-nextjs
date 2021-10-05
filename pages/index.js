import Head from "next/head";
import Image from "next/image";

import Header from "./../components/header";
import Footer from "./../components/footer";
import Hero from "./../components/hero";

import { getAllPosts } from "../scripts/blog/getAllPosts";

import { Container, Row, Col } from "react-bootstrap";

export default function Index() {
  return (
    <>
      <Header />
      <Hero />
      <section className="about">
        <Container>
          <Row className="d-flex align-items-center">
            <Col md={6}></Col>
            <Col md={6}></Col>
          </Row>
        </Container>
      </section>

      <section className="postsContainer">
        <h1>Posts</h1>
        {posts.map((post) => (
          <article key={post.metadata.title} className="postsContainer__post">
            <h2>
              <a href="#">{post.metadata.title}</a>
            </h2>
            <p>{post.metadata.excerpt}</p>
          </article>
        ))}
      </section>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
