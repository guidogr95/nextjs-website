import Link from 'next/link'
// Theme
import { colors } from 'styles/theme'
// Assets
import OpenStackIcon from 'components/Shared/OpenStackIcon'

const iconRenderer = (label) => {
    switch (label.toLowerCase()) {
        case 'openstack':
            return <OpenStackIcon />
        default:
            return null
    }
}

const BlogNavItem = ({ slug, label, pathname }) => {

    return (
        <>
            <li>
                <Link href={slug ? `${pathname}/${slug}` : ''}>
                    <a>
                        <span>{label}</span>{iconRenderer(label)}
                    </a>
                </Link>
            </li>
            <style jsx>{`
                li {
                    display: inherit;
                }
                li :global(a) {
                    padding: 20px 15px;
                    color: ${colors.night};
                    transition: .3s ease-out all;
                    display: flex;
                    align-items: center;
                }
                li :global(a svg) {
                    height: 20px;
                    margin-left: 8px;
                    color: ${colors.night};
                    fill: ${colors.night};
                    stroke: ${colors.night};
                }
                li :global(a):hover {
                    color: ${colors.day};
                }
            `}</style>
        </>
    )
}

export default BlogNavItem