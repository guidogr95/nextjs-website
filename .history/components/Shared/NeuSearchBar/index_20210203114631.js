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
                    box-shadow:  5px 5px 20px #562ed9, -35x -5px 20px #743eff;
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