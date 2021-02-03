// Components
import { useState } from 'react'
// Components
import NeuSearchBar from 'components/Shared/NeuSearchBar'

const TutorialSearchBar = ({ Tutorials }) => {

    const [formData, setFormData] = useState('')

    const handleInput = (e) => {
        setFormData(e.target.value)
    }

    const ResultsContainer = () => {
        const searchPhrase = formData.trim().toLowerCase()
        return (
            <div className="results-container" >
                <div className="results-wrapper" >
                    { Tutorials.filter(tutorial => tutorial.Title.toLowerCase().includes(searchPhrase)).map(tutorial => {
                        return (
                            <p
                                key={tutorial.Slug}
                            >
                                {tutorial.TItle}
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
                { formData.trim().length > 0 &&
                    <ResultsContainer />
                }
            </div>
            <style jsx>{`
                .sr-container {
                    margin-bottom: 45px;
                    display: flex;
                    flex-direction: column;
                }
                .results-container {
                    position: relative;
                }
                .results-wrapper {
                    position: absolute;
                    top: 0;
                    right: 0;
                    left: 0;
                    background: black;
                }
            `}</style>
        </>
    )
}

export default TutorialSearchBar