const NeuSearchBar = ({ placeholder, onSubmit, onChange, formData }) => {
    return (
        <>
            <div className="sb-container" >
                <form >
                    <input
                        placeholder={placeholder || 'Search...'}
                    />
                </form>
            </div>
            <style jsx>{`
                .sb-container {
                    height: 72px;
                    width: 100%;
                    border-radius: 8px;
                }
                form {
                    height: 100%;
                    width: inherit;
                    border-radius: 8px;
                    overflow: hidden;
                }
                input {
                    width: inherit;
                    height: 100%;
                    padding: 0 15px;
                    border: none;
                    outline: 0;
                    font-size: 1.2em;
                }
            `}</style>
        </>
    )
}

export default NeuSearchBar