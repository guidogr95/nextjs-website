import Link from 'next/link'

const BlogNavItem = ({ slug, label, pathname }) => {
    return (
        <>
            <li>
                <Link href={slug ? `${pathname}/${slug}` : ''}>
                    <a>
                        {label}
                    </a>
                </Link>
            </li>
            <style jsx>{`
                li {
                    display: inherit;
                }
                li :global(a) {
                    padding: 20px 15px;
                }
            `}</style>
        </>
    )
}

export default BlogNavItem