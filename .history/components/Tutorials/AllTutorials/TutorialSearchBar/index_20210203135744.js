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
        console.log(Tutorials.filter(tutorial => tutorial.Title.includes(formData.trim())))
        return (
            <div className="results-container" >
                { Tutorials.filter(tutorial => tutorial.Title.includes(formData.trim())).map(tutorial => {
                    return (
                        <p
                            key={tutorial.Slug}
                        >
                            {tutorial.TItle}
                        </p>
                    )
                }) }
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
            `}</style>
        </>
    )
}

export default TutorialSearchBar