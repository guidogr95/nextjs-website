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
            return <OpenStackIcon />
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
                    background: ${colors.whiteGray};
                    top: 0px;
                    border-radius: ${borderRadius};
                    transition: .3s ease-out all;
                    display: block;
                    position: relative;
                    overflow: hidden;
                    border: 1px solid #f2f8f9;
                }
                li:hover {
                    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
                    top: -4px;
                    border: 1px solid #cccccc;
                    background: #6536FF;
                    box-shadow: inset 9px 9px 18px #572edb,
                                inset -9px -9px 18px #733eff;
                }
                li:before {
                    content: "";
                    position: absolute;
                    z-index: -1;
                    top: -16px;
                    right: -16px;
                    background: #00838d;
                    height: 32px;
                    width: 32px;
                    border-radius: 32px;
                    transform: scale(2);
                    transform-origin: 50% 50%;
                    transition: transform 0.15s ease-out;
                }

                li:hover:before {
                    transform: scale(2.15);
                }
                li :global(a) {
                    padding: 20px 15px;
                    color: ${colors.day};
                    transition: .3s ease-out all;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                }
                li :global(a svg) {
                    height: 40px;
                    margin-bottom: 20px;
                    color: ${colors.day};
                    fill: ${colors.day};
                    stroke: ${colors.day};
                    transition: .3s ease-out all;
                }
                li:hover :global(a),
                li:hover :global(a svg) {
                    color: ${colors.whiteGray};
                }
            `}</style>
        </>
    )
}

export default BlogNavItem