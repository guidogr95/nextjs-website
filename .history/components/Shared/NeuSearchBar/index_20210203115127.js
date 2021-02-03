// Theme
import { borderRadius, colors } from 'styles/theme'

const NeuSearchBar = ({ onSubmit, placeholder, formData, onChange }) => {
    return (
        <>
            <div className="sb-container">
                <div className="cover">
                    <form onSubmit={onSubmit} >
                        <div className="inner" >
                            <input
                                onChange={onchange || null}
                                value={formData}
                                placeholder={placeholder || 'Search...'}
                            />
                        </div>
                    </form>
                </div>
            </div>
            <style jsx>{`
                .sb-container {
                    width: 100%;
                }
                .cover {
                    position: relative;
                    overflow: hidden;
                    width: 100%;
                    height: 90px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 15px;
                    border-radius: ${borderRadius};
                    0 10px 40px #ff7c7c, 0 0 0 20px #ffffffeb;
                }
                form {
                    width: inherit;
                    height: 100%;
                }
                .inner {
                    background: ${colors.day};
                    border-radius: ${borderRadius};
                    color: ${colors.whiteGray};
                    height: 100%;
                    width: inherit;
                    box-shadow:  5px 5px 40px #562ed980, -5px -5px 40px #743eff80;
                }
                input {
                    border-radius: ${borderRadius};
                    padding: 0 10px;
                    width: inherit;
                    height: inherit;
                    border: none;
                    outline: 0;
                    background: none;
                }
            `}</style>
        </>
    )
}

export default NeuSearchBar