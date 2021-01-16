import { withRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';

const Title =  styled.h1`
    color: yellow;
    font-size: 40px;
`

const Index =  ({router, name}) => {
    const {id} = router.query;
    return (
        <>
            <style jsx>{`
                span {
                    color: blue
                }
            `}</style>
            <Title>This is Title</Title>
            <Link href={`/a/${id}#aaa`}>
                <span>A {id || ''} { name } </span>
            </Link>
        </>
    );
}

Index.getInitialProps = async (ctx) => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'jokcy'
            })
        }, 1000);
    });
    return await promise;
}

export default withRouter(Index);