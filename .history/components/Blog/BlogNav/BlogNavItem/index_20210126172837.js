import Link from 'next/link'
import { colors } from 'styles/theme'

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
                    color: ${colors.lightGray};
                    transition: .3s ease-out all;
                }
                li :global(a) {
                    color: ${colors.nightBlack};
                }
            `}</style>
        </>
    )
}

export default BlogNavItem