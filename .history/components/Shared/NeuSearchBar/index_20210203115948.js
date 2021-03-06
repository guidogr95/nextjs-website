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
                    height: 90px;
                    width: 100%;
                    border-radius: 10px;
                    filter: blur(2px);
                    padding: 10px;
                }
                form {
                    box-shadow: 0 10px 40px #6536ff15, 0 0 0 20px #ffffffeb;
                    height: 100%;
                    width: inherit;
                    border-radius: 10px;
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