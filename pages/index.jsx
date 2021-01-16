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
        <span>Index</span>
    </>
)

export default Index;