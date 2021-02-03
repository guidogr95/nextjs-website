// Components
import { useState } from 'react'
// Components
import NeuSearchBar from 'components/Shared/NeuSearchBar'

const TutorialSearchBar = () => {

    const [formData, setFormData] = useState('')

    const handleInput = (e) => {
        setFormData(e.target.value)
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
                <div className="results-container" >

                </div>
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