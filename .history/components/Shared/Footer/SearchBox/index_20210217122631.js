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
                    <span className="screen-reader-text" >
                        Search for:
                    </span>
                    <input
                        value={formData}
                        onChange={(e) => setFormData(e.target.value)}
                        placeholder="Search..."
                    />
                </form>
            </div>
            <style jsx>{`
                .searchBox input {
                    padding: 0 15px 0 29px;
                    border: 1px solid #d2d2d2;
                    color: #aaa9a9;
                    outline: 0;
                }
            `}</style>
        </>
    )
}

export default SearchBox