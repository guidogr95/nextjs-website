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
                a {
                    padding: 20px 15px;
                }
            `}</style>
        </>
    )
}

export default BlogNavItem