import Link from 'next/link'

const BlogNavItem = ({ slug, label }) => {
    return (
        <div>
            <Link href={slug || ''} >
                <a>
                    {label}
                </a>
            </Link>
        </div>
    )
}

export default BlogNavItem