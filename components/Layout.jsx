import Link from 'next/link';
import Button from 'antd/lib/button';

const Index = ({ children }) => {
     return (
        <>
            <header>
            <Link href="/a?id=1" as="/a/1">
                <Button>A</Button>
            </Link>
            </header>
            <div>
                {children}
            </div>
        </>
     )
};

export default Index;