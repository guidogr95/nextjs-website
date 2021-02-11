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
                    {CardGridTIItem && CardGridTIItem.map((gridItem, index) => {
                        return (
                            <GridItem
                                key={gridItem.id}
                                index={index}
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
                    grid-template-columns: repeat(4, 1fr);
                    grid-template-rows: repeat(3, 250px);
                    column-gap: 70px;
                    row-gap: 70px;
                    padding: 45px 0;
                }
            `}</style>
        </>
    )
}

export default CardGridThumbnailIcon