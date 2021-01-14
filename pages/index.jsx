import Button from 'antd/lib/button';
import Link from 'next/link';
import Router from 'next/router';

const events = [
    'routeChangeStart',
    'routeChangeComplete',
    'routeChangeError',
    'beforeHistoryChange',
    'hashChangeStart',
    'hashChangeComplete'
];

function makeEvent(type) {
    return (...args) => {
        console.log(type, ...args);
    };
}

events.forEach(event => {
    Router.events.on(event, makeEvent(event));
});

const Index = () =>  (
    <>
    <Link href="/a?id=1" as="/a/1" title="AAA">
        <Button>Click</Button>
    </Link>
    <Button onClick={() => {
        Router.push({
            pathname: '/a',
            query: {
                id: 2
            }
        }, 'a/2');
    }}>Click me</Button>
    </>
)

export default Index;