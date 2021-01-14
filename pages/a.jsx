import { withRouter } from 'next/router';
import Link from 'next/link';

const Index =  ({router}) => {
    const {id} = router.query;
    
    return (
        <Link href={`/a/${id}#aaa`}>
            <span>A {id || ''} </span>
        </Link>
    )
}

Index.getInitialProps = async () => {
    return {}
}

export default withRouter(Index);