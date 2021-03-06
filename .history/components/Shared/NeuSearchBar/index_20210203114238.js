// Theme
import { borderRadius, colors } from 'styles/theme'

const NeuSearchBar = ({ onSubmit, placeholder, formData, onChange }) => {
    return (
        <>
            <div className="sb-container">
                <div id="cover">
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
                .cover {
                    position: relative;
                    overflow: hidden;
                    width: 100%;
                    height: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 10px;
                    border-radius: ${borderRadius};
                }
                .inner {
                    background: ${colors.day};
                    border-radius: ${borderRadius};
                    color: ${colors.whiteGray};
                    height: 100%;
                    box-shadow:  34px 34px 68px #562ed9, -34px -34px 68px #743eff;
                }
                input {
                    padding: 0 10px;
                    height: inherit;
                }
            `}</style>
        </>
    )
}

export default NeuSearchBar