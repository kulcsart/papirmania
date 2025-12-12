import Admin from '../Admin';

export default function Page() {
    return <Admin />;
}

export function generateStaticParams() {
    return [
        { params: [] }
    ];
}
