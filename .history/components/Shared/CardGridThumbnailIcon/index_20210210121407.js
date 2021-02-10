// Theme
import { desktopMaxWidth } from 'styles/theme'
// Components
import GridItem from './GridItem'

const CardGridThumbnailIcon = ({ ComponentProps }) => {

    const { CardGridTIItem } = ComponentProps

    return (
        <>
            <section className="containerSection" >
                <main>
                    {CardGridTIItem && CardGridTIItem.map(gridItem => {
                        return (
                            <GridItem
                                key={gridItem.id}
                                {...gridItem}
                            />
                        )
                    })}
                </main>
            </section>
            <style jsx>{`
                main {
                    max-width: ${desktopMaxWidth};
                    width: 100%;
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    column-gap: 50px;
                    row-gap: 50px;
                    padding: 45px 0;
                }
            `}</style>
        </>
    )
}

export default CardGridThumbnailIcon