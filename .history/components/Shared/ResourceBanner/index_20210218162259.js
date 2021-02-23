// Theme
import { borderRadius } from 'styles/theme'

const ResourceBanner = (props) => {
    console.log(props)
    return (
        <>
            <div className="banner-container" >

            </div>
            <style jsx>{`
                .banner-container {
                    background: linear-gradient(to left, #6536ff, #2a1659);
                    min-height: 300px;
                    width: 100%;
                    border-radius: ${borderRadius};
                }
            `}</style>
        </>
    )
}

export default ResourceBanner