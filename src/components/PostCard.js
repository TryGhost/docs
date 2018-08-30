import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import AuthorList from './AuthorList';

const Card = styled.article`
    flex: 1 1 300px;
    -ms-flex-direction: column;
    flex-direction: column;
    overflow: hidden;
    margin: 0 20px 40px;
    min-height: 300px;
    background: #fff 50%;
    background-size: cover;
    border-radius: 5px;
    box-shadow: 8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03);
    transition: all .5s ease;

    &:nth-child(6n+1) {
        flex: 1 1 100%;
        flex-direction: row;
    }

    :hover {
        box-shadow: rgba(39,44,49,0.07) 8px 28px 50px, rgba(39, 44, 49, 0.04) 1px 6px 12px;
        transition: all 0.4s ease;
        transform: translate3D(0, -1px, 0) scale(1.02);
    }
`

const Content = styled.div`
    -ms-flex-positive: 1;
    flex-grow: 1;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: justify;
    justify-content: space-between;


`

const ContentLink = styled(Link)`
    position: relative;
    -ms-flex-positive: 1;
    flex-grow: 1;
    display: block;
    padding: 25px 25px 0;
    color: #15171a;

    &:hover {
      text-decoration: none;
    }
`

const PrimaryTag = styled.span`
    display: block;
    margin-bottom: 4px;
    color: #738a94;
    font-size: 1.2rem;
    line-height: 1.15em;
    font-weight: 500;
    letter-spacing: .5px;
    text-transform: uppercase;
`

const Footer = styled.footer`
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 25px 25px;
`

const Date = styled.span`
    flex-shrink: 0;
    margin-left: 20px;
    color: #738a94;
    font-size: 1.2rem;
    line-height: 33px;
    font-weight: 500;
    letter-spacing: .5px;
    text-transform: uppercase;
`

const getExcerpt = (post) => {
    if (post.custom_excerpt) {
        return post.custom_excerpt;
    }

    if (post.excerpt) {
        return post.excerpt;
    }

    if (post.plaintext) {
        return post.plaintext.substring(0, 200);
    }

    if (post.body) {
        return post.body.body.substring(0, 200);
    }
}

const makeAuthorObject = author => {
    return {
        name: author,
        slug: author.split(' ')[0].toLowerCase()
    };
}

const PostCard = props => {
    const post = props.post;
    const tag = post.primaryTag ? post.primaryTag.name : (post.tags ? post.tags[0].name : 'Untagged');
    const url = `/faq/${post.slug}`
    const excerpt = getExcerpt(post);
    const authors = post.authors[0].name ? post.authors : post.authors.map(author => makeAuthorObject(author));

    return (
        <Card>
            <Content>
                <ContentLink to={url}>
                    <header>
                        {tag ? <PrimaryTag>{tag}</PrimaryTag> : null}
                        <h2>{post.title}</h2>
                    </header>
                    {excerpt ? <section>{excerpt}</section> : null}
                </ContentLink>
                <Footer>
                    {post.authors ?<AuthorList authors={authors} /> : null}
                    <Date>{post.publishedAt}</Date>
                </Footer>

            </Content>
        </Card>
    );
};

export default PostCard;
