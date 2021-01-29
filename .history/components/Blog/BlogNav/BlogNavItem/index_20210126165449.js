import Link from 'next/link'

const BlogNavItem = ({ slug, label, pathname }) => {
    return (
        <div>
            <Link href={slug ? `${pathname}/${slug}` : ''}>
                <a>
                    {label}
                </a>
            </Link>
        </div>
    )
}

export default BlogNavItem