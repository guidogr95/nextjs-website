import { useState } from 'react'
// Components
import NeuSearchBar from 'components/Shared/NeuSearchBar'
// Utils
import { Transition } from 'react-spring/renderprops.cjs'

const TutorialSearchBar = ({ Tutorials }) => {

    const [formData, setFormData] = useState('')

    const handleInput = (e) => {
        setFormData(e.target.value)
    }

    const ResultsContainer = (props) => {
        console.log(props)
        const searchPhrase = formData.trim().toLowerCase()
        return (
            <div
                className="results-container"
                style={props}
            >
                <div className="results-wrapper" >
                    { Tutorials.filter(tutorial => tutorial.Title.toLowerCase().includes(searchPhrase)).map(tutorial => {
                        return (
                            <p
                                key={tutorial.Slug}
                            >
                                {tutorial.Title}
                            </p>
                        )
                    }) }
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="sr-container" >
                <div className="sb-wrapper" >
                    <NeuSearchBar
                        onChange={handleInput}
                        formData={formData}
                        placeholder="Search Tutorials..."
                    />
                </div>
                    <Transition
                        items={formData.trim().length > 0}
                        from={{ opacity: 0, transform: 'translateY(10px)' }}
                        enter={{ opacity: 1, transform: 'translateY(0px)' }}
                        leave={{ opacity: 0, transform: 'translateY(10px)' }}>
                        {show => show && (props => <ResultsContainer {...props} />)}
                    </Transition>
            </div>
            <style jsx>{`
                .sr-container {
                    margin-bottom: 45px;
                    display: flex;
                    flex-direction: column;
                }
                .sr-container :global(.results-container) {
                    position: relative;
                }
                .sr-container :global(.results-wrapper) {
                    position: absolute;
                    top: 15px;
                    right: 0;
                    left: 0;
                    background: black;
                    display: flex;
                    flex-direction: column;
                    border: 1px solid #fff;
                    background-color: #ffffff;
                    border-radius: 15px;
                    padding: 8px;
                    box-shadow: 9px 9px 16px rgb(189 189 189 / 30%), -9px -9px 16px rgb(255 255 255 / 50%);
                }
            `}</style>
        </>
    )
}

export default TutorialSearchBar