import { useState } from 'react'

const SearchBox = () => {

    const [formData, setFormData] = useState('')

    const handleSubmit = (e) => {
        if (e) e.preventDefault()
        window.alert('submitted')
    }

    return (
        <>
            <div className="searchBox" >
                <h4>
                    Search
                </h4>
                <form onSubmit={handleSubmit} >
                    <input
                        value={formData}
                        onChange={(e) => setFormData(e.target.value)}
                        placeholder="Search..."
                    />
                </form>
            </div>
        </>
    )
}

export default SearchBox