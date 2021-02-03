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
                    box-shadow: 0 10px 40px #ff7c7c, 0 0 0 20px #ffffffeb;
                }
                form {
                    height: 100%;
                    width: inherit;
                }
                input {
                    width: inherit;
                    height: 100%;
                    padding: 0 15px;
                    border: none;
                    outline: 0;
                }
            `}</style>
        </>
    )
}

export default NeuSearchBar