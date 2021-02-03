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
                    height: 70px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 10px;
                    border-radius: ${borderRadius};
                }
                form {
                    width: inherit;
                }
                .inner {
                    background: ${colors.day};
                    border-radius: ${borderRadius};
                    color: ${colors.whiteGray};
                    height: 100%;
                    width: inherit;
                    box-shadow:  34px 34px 68px #562ed9, -34px -34px 68px #743eff;
                }
                input {
                    padding: 0 10px;
                    width: inherit;
                    height: inherit;
                }
            `}</style>
        </>
    )
}

export default NeuSearchBar