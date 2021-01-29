import Link from 'next/link'
// Theme
import { colors } from 'styles/theme'
// Assets
import OpenStackIcon from 'components/Shared/OpenStackIcon'
import CloudIcon from 'components/Shared/CloudIcon'
import PrivateCloudIcon from 'components/Shared/PrivateCloudIcon'

const iconRenderer = (label) => {
    switch (label.toLowerCase()) {
        case 'openstack':
            return <OpenStackIcon />
        case 'private cloud':
            return <PrivateCloudIcon />
        case 'public cloud':
            return <CloudIcon />
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
                    transition: .3s ease-out all;
                }
                li :global(a):hover {
                    background: #6536FF;
box-shadow: inset 9px 9px 18px #572edb,
            inset -9px -9px 18px #733eff;
                    color: ${colors.whiteGray};
                }
                li :global(a:hover svg) {
                    color: ${colors.whiteGray};
                    fill: ${colors.whiteGray};
                    stroke: ${colors.whiteGray};
                }
            `}</style>
        </>
    )
}

export default BlogNavItem