import { useRef, useState } from 'react'
// Components
import NeuSearchBar from 'components/Shared/NeuSearchBar'
import TutorialSearchResult from './TutorialSearchResult'
// Utils
import { Transition } from 'react-spring/renderprops.cjs'
import useOnClickOutside from 'utils/useOnClickOutside'

const TutorialSearchBar = ({ Tutorials }) => {

    const resultsRef = useRef(null)
    useOnClickOutside(resultsRef, () => resultsActive && setResultsActive(false))

    const [formData, setFormData] = useState('')

    const [resultsActive, setResultsActive] = useState(false)

    const handleInput = (e) => {
        setFormData(e.target.value)
    }

    const ResultsContainer = (props) => {
        const searchPhrase = formData.trim().toLowerCase()
        return (
            <div
                className="results-container"
                style={props}
                ref={resultsRef}
            >
                <div className="results-wrapper" >
                    <div className="_wrapper-inner" >
                        { Tutorials.filter(tutorial => tutorial.Title.toLowerCase().includes(searchPhrase)).map(tutorial => {
                            return (
                                <TutorialSearchResult
                                    key={tutorial.Slug}
                                    Title={tutorial.Title}
                                    Slug={`/tutorials/${tutorial.Slug}`}
                                    Thumbnail={tutorial?.Thumbnail?.formats?.small?.url || tutorial?.Thumbnail?.url}
                                />
                            )
                        }) }
                    </div>
                </div>
            </div>
        )
    }

    console.log("res", resultsActive)

    return (
        <>
            <div className="sr-container" >
                <div className="sb-wrapper" >
                    <NeuSearchBar
                        onChange={handleInput}
                        formData={formData}
                        placeholder="Search Tutorials..."
                        onFocus={() => console.log("focus")}
                    />
                </div>
                    <Transition
                        items={formData.trim().length > 0}
                        from={{ opacity: 0, transform: 'translateY(-10px)' }}
                        enter={{ opacity: 1, transform: 'translateY(0px)' }}
                        leave={{ opacity: 0, transform: 'translateY(-10px)' }}>
                        {show => (show && resultsActive) && (props => <ResultsContainer {...props} />)}
                    </Transition>
            </div>
            <style jsx>{`
                .sr-container {
                    margin-bottom: 45px;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    z-index: 2;
                }
                .sr-container :global(.results-container) {
                    position: relative;
                }
                .sr-container :global(.results-wrapper) {
                    position: absolute;
                    top: 25px;
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
                    border-radius: 10px;
                }
                .sr-container :global(.results-wrapper ._wrapper-inner) {
                    border-radius: 10px;
                    box-shadow: inset 10px 10px 15px -10px #c3c3c3, inset -10px -10px 15px -10px #ffffff;
                }
            `}</style>
        </>
    )
}

export default TutorialSearchBar