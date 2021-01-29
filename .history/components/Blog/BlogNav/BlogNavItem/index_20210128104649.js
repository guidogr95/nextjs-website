import Link from 'next/link'
// Theme
import { borderRadius, colors } from 'styles/theme'
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
                    {iconRenderer(label)}<span>{label}</span>
                    </a>
                </Link>
            </li>
            <style jsx>{`
                li {
                    display: inherit;
                    background: white;
                    box-shadow:  7px 7px 26px #f5f5f5,
                    -7px -7px 26px #ffffff;
                    border-radius: ${borderRadius};
                }
                li :global(a) {
                    padding: 20px 15px;
                    color: ${colors.night};
                    transition: .3s ease-out all;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                li :global(a svg) {
                    height: 40px;
                    margin-bottom: 20px;
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