import React from "react";
import tarifsData from "./cardsData";
import CardTarif from "./Card";

function CardsBlock() {
    const TarifComponents = tarifsData.map(tarif => 
    <CardTarif
    key={tarif.name} 
    tarif={tarif} />)

    return (
        <React.Fragment>
            {TarifComponents}
        </React.Fragment>
    )
}

export default CardsBlock